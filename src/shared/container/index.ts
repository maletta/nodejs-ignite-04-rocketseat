import { UserRepository } from '@accounts/infra/typeorm/repositories/UsersRepository';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { CategoriesRepository } from '@cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationRepository } from '@cars/infra/typeorm/repositories/SpecificationRepository';
import { ICategoriesRepository } from '@cars/repositories/ICategoriesRepository';
import { ISpecificationRepository } from '@cars/repositories/ISpecificationRepository';
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

// criando uma referência a instância singleton que será injetada
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UserRepository
);
