import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  // removendo construtor pois receberá createCategoryUseCase por injeção de dependência
  // public constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ description, name });

    return response.status(201).send();
  }
}

export { CreateCategoryController };
