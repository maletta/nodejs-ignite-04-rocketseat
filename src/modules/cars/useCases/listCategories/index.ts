import { CategoriesRepository } from '@cars-repositories/implementations/CategoriesRepository';

import { ListCatgoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCatgoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
