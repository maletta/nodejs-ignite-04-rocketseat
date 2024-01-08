import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

class CreateCarSpecificationController {
  public async handle(request: Request, response: Response) {
    const { car } = request.body;

    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase,
    );

    await createCarSpecificationUseCase.execute();

    response.json();
  }
}

export { CreateCarSpecificationController };
