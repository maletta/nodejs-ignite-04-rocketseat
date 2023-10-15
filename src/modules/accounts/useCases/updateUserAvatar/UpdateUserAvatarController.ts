import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request;
    const avatarFile = request.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({
      userId: user.id,
      avatarFile,
    });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
