import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { deleteFile } from '@src/utils/file';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  public async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(userId);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    await this.usersRepository.create({
      ...user,
      avatar: avatarFile,
    });
  }
}

export { UpdateUserAvatarUseCase };
