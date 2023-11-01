import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    // Se usuário existe
    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    // Se a senha está correta
    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }

    // Gerar jsonwebtoken
    const token = sign({}, 'secret', {
      subject: user.id,
      expiresIn: '30d',
    });

    const response: IResponse = {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };

    return response;
  }
}

export { AuthenticateUserUseCase };
