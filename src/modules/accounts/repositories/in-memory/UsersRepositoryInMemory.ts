import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import Users from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UserRepositoryInMemory implements IUsersRepository {
  private users: Users[] = [];

  public async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, driver_license, password, avatar } = data;
    const user = new Users();

    Object.assign(user, {
      name,
      email,
      driver_license,
      password,
      avatar,
    });

    this.users.push(user);
  }

  public async findByEmail(email: string): Promise<Users> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }

  public async findById(id: string): Promise<Users> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}

export { UserRepositoryInMemory };
