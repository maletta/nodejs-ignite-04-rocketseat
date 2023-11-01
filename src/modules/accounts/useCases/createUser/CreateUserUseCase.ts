import { ICreateUserDTO } from '@accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { AppError } from '@errors/AppError';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

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
