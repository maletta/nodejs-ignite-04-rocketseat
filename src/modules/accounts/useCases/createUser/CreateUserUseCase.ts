import { ICreateUserDTO } from '@accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(user: ICreateUserDTO): Promise<void> {
    const { name, email, password, driver_license } = user;

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      console.log('error detectado');
      throw new AppError('User already exists!');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
