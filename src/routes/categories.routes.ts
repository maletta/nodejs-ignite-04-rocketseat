import createCategoryController from '@cars-useCases/createCategory';
import { importCategoryController } from '@cars-useCases/importCategory';
import { listCategoriesController } from '@cars-useCases/listCategories';
import { Router } from 'express';
import multer from 'multer';

const categoriesRoutes = Router();
const upload = multer({ dest: './temp' });

categoriesRoutes.post('/', (request, response) => {
  console.log('entrou na rota de post category ');

  return createCategoryController().handle(request, response);
});

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
