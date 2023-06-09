import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCatgoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  public handle(request: Request, response: Response): Response {
    const allCategories = this.listCategoriesUseCase.execute();
    return response.status(200).send(allCategories);
  }
}

export { ListCatgoriesController };
