import { AppError } from '@src/errors/AppError';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UserRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '../createUser/CreateUserUseCase';
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

let usersRepositoryInMemory: UserRepositoryInMemory;
let authenticateUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UserRepositoryInMemory();
    authenticateUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '00123',
      email: 'user@test.com',
      password: '1234',
      name: 'User Test',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an nonexistent user', async () => {
    await expect(async () => {
      await authenticateUseCase.execute({
        email: 'user@test.com',
        password: '1234',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with incorrect password', async () => {
    const user: ICreateUserDTO = {
      driver_license: '00123',
      email: 'user@test.com',
      password: '1234',
      name: 'User Test',
    };

    await createUserUseCase.execute(user);

    await expect(async () => {
      await authenticateUseCase.execute({
        email: user.email,
        password: 'incorrectPassword',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
