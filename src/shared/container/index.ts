import { UserRepository } from '@accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@accounts/repositories/IUsersTokensRepository';
import { CarsRepository } from '@cars/infra/typeorm/repositories/CarsRepository';
import { CategoriesRepository } from '@cars/infra/typeorm/repositories/CategoriesRepository';
import { SpecificationRepository } from '@cars/infra/typeorm/repositories/SpecificationRepository';
import { ICarsRepository } from '@cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '@cars/repositories/ICategoriesRepository';
import { ISpecificationRepository } from '@cars/repositories/ISpecificationRepository';
import { container } from 'tsyringe';

import { IDateProvider } from './providers/IDateProvider';
import { DayJsDateProvider } from './providers/implementations/DayJsDateProvider';

// criando uma referência a instância singleton que será injetada
container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

// criando uma referência a instância singleton que será injetada
container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository,
);

// criando uma referência a instância singleton que será injetada
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UserRepository,
);

// criando uma referência a instância singleton que será injetada
container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);

// criando uma referência a instância singleton que será injetada
container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);

// criando uma referência a instância singleton que será injetada
container.registerSingleton<IDateProvider>(
  'DayJsDateProvider',
  DayJsDateProvider,
);
