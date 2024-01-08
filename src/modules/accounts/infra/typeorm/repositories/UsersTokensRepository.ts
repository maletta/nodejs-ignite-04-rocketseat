import { ICreateUserTokenDTO } from '@accounts/dtos/ICreateUserTokenDTO';
import { IUsersTokensRepository } from '@accounts/repositories/IUsersTokensRepository';
import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/typeorm/data-source';

import { UserTokens } from '../entities/UserTokens';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserTokens);
  }

  public async create({
    expires_in,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_in,
      refresh_token,
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
