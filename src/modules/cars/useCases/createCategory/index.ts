import { CategoriesRepository } from '@cars-repositories/implementations/CategoriesRepository';

import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

// const categoriesRepository = CategoriesRepository.getInstance();

export default (): CreateCategoryController => {
  console.log('----------------------------------');
  console.log('executou createCategoryController');
  console.log('---------------------------------- ');
  const categoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  // const createCategoryController = new CreateCategoryController(
  //   createCategoryUseCase
  // );

  return new CreateCategoryController(createCategoryUseCase);
};
