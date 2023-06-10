import { createCategoryController } from '@cars-useCases/createCategory';
import { listCategoriesController } from '@cars-useCases/listCategories';
import { Router } from 'express';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
