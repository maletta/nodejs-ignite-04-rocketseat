import { ICreateUserTokenDTO } from '@accounts/dtos/ICreateUserTokenDTO';
import { UserTokens } from '@accounts/infra/typeorm/entities/UserTokens';

interface IUsersTokensRepository {
  create({
    expires_in,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens>;
}

export { IUsersTokensRepository };
