import { UserRepository } from '@accounts/infra/typeorm/repositories/UsersRepository';
import { NextFunction, Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const { user } = request;

  if (!user) {
    throw new AppError('User admin not found');
  }

  const userFound = await new UserRepository().findById(user.id);

  if (!userFound.isAdmin) {
    throw new AppError("User isn't admin!");
  }

  next();
}

export { ensureAdmin };
