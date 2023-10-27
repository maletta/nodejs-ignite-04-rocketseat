import { AppError } from '@src/errors/AppError';
import { UserRepository } from '@src/modules/accounts/repositories/implementations/UsersRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
  exp: number;
  iat: number;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing!', 401);
  }

  // [0]Bearer [1]token
  const [, token] = authHeader.split(' ');

  try {
    // sub is userId
    const { sub: userId }: IPayload = verify(token, 'secret') as IPayload;

    const usersRepository = new UserRepository();
    const foundUser = await usersRepository.findById(userId);

    if (!foundUser) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = {
      id: foundUser.id,
    };

    next();
  } catch (error) {
    throw new AppError('Invalid token!', 401);
  }
}
