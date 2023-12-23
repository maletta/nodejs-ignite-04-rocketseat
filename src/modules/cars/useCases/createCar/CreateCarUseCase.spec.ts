import { CarsRepositoryInMemory } from '@cars/repositories/in-memory/CarsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const carData = {
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    const createdCar = await createCarUseCase.execute(carData);

    expect(createdCar).toHaveProperty('id');
    expect(createdCar.name).toBe(carData.name);
  });

  it('should not be able to create a car with exists license plate', async () => {
    const carData1 = {
      name: 'Name Car 1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };
    const carData2 = {
      name: 'Name Car 2',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    await expect(async () => {
      await createCarUseCase.execute(carData1);
      await createCarUseCase.execute(carData2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should create a new car with available true', async () => {
    const carData = {
      name: 'Name Car 1',
      description: 'Description Car',
      daily_rate: 100,
      license_plate: 'ABC-1234',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    const createCar = await createCarUseCase.execute(carData);

    expect(createCar.available).toBe(true);
  });
});
