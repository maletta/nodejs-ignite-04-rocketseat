import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private categoryUseCase: ImportCategoryUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    await this.categoryUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
