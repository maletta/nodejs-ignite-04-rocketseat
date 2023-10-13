// import createCategoryController from '@cars-useCases/createCategory';
import { CreateCategoryController } from '@src/modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@src/modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCatgoriesController } from '@src/modules/cars/useCases/listCategories/ListCategoriesController';
import { Router } from 'express';
import multer from 'multer';

const categoriesRoutes = Router();
const upload = multer({ dest: './temp' });

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCatgoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle
);

export { categoriesRoutes };
