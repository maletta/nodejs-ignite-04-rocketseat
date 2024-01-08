// import createCategoryController from '@cars-useCases/createCategory';
import { CreateCategoryController } from '@cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '@cars/useCases/importCategory/ImportCategoryController';
import { ListCatgoriesController } from '@cars/useCases/listCategories/ListCategoriesController';
import uploadConfig from '@config/upload';
import { Router } from 'express';
import multer from 'multer';

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';

import { ensureAdmin } from '../middleware/ensureAdmin';

const categoriesRoutes = Router();
const upload = multer(uploadConfig.upload('./tmp'));

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCatgoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.use(ensureAuthenticated, ensureAdmin);

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importCategoryController.handle
);

export { categoriesRoutes };
