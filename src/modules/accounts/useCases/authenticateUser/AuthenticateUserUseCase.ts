import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@accounts/repositories/IUsersTokensRepository';
import auth from '@config/auth';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { IDateProvider } from '@shared/container/providers/IDateProvider';
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
  refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
  private usersRepository: IUsersRepository;
  private usersTokensRepository: IUsersTokensRepository;
  private dateProvider: IDateProvider;

  constructor(
    @inject('UsersRepository') usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    usersTokensRepository: IUsersTokensRepository,
    @inject('DayJsDateProvider') dateProvider: IDateProvider,
  ) {
    this.usersRepository = usersRepository;
    this.usersTokensRepository = usersTokensRepository;
    this.dateProvider = dateProvider;
  }

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
    } = auth;

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
    const token = sign({}, secret_token, {
      subject: user.id,
      expiresIn: expires_in_token,
    });

    const refresh_token = sign(
      {
        email, // payload
      },
      secret_refresh_token,
      {
        subject: user.id,
        expiresIn: expires_in_refresh_token,
      },
    );

    const refresh_token_expires_in = this.dateProvider.addDays(
      Number(expires_in_refresh_token.replace(/\D/g, '')),
    );

    await this.usersTokensRepository.create({
      user_id: user.id,
      refresh_token,
      expires_in: refresh_token_expires_in,
    });

    const response: IResponse = {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
      refresh_token,
    };

    return response;
  }
}

export { AuthenticateUserUseCase };
