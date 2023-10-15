import { AppDataSource } from '@src/database/data-source';
import { Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import Users from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UserRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

  public async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, driver_license, password } = data;
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }

  public async findByEmail(email: string): Promise<Users> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  public async findById(id: string): Promise<Users> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}

export { UserRepository };
