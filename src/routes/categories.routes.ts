// import createCategoryController from '@cars-useCases/createCategory';
import { importCategoryController } from '@cars-useCases/importCategory';
import { listCategoriesController } from '@cars-useCases/listCategories';
import { CreateCategoryController } from '@src/modules/cars/useCases/createCategory/CreateCategoryController';
import { Router } from 'express';
import multer from 'multer';

const categoriesRoutes = Router();
const upload = multer({ dest: './temp' });

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    return importCategoryController.handle(request, response);
  }
);

export { categoriesRoutes };
