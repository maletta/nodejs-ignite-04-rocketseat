import categoryRepository from '@cars-repositories/CategoriesRepository';

import { ListCatgoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
const listCategoriesController = new ListCatgoriesController(
  listCategoriesUseCase
);

export { listCategoriesController };
