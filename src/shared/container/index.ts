import { ICategoriesRepository } from '@src/modules/cars/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@src/modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationRepository } from '@src/modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '@src/modules/cars/repositories/ISpecificationRepository';
import { container } from 'tsyringe';

// criando uma referência a instância singleton que será injetada
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository
);

// criando uma referência a instância singleton que será injetada
container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository
);
