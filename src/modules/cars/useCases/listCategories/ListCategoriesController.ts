import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCatgoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  public async handle(request: Request, response: Response): Promise<Response> {
    const allCategories = await this.listCategoriesUseCase.execute();
    return response.status(200).send(allCategories);
  }
}

export { ListCatgoriesController };
