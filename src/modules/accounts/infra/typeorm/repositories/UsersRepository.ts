import { ICreateUserDTO } from '@accounts/dtos/ICreateUserDTO';
import Users from '@accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/typeorm/data-source';

class UserRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = AppDataSource.getRepository(Users);
  }

  public async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, driver_license, password, avatar, id } = data;
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id,
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
