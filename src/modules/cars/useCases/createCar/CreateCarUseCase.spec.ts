import { CarsRepositoryInMemory } from '@cars/repositories/in-memory/CarsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';
import { mockCarData1, mockCarData2 } from './creteCarMock';

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    const createdCar = await createCarUseCase.execute(mockCarData1);

    expect(createdCar).toHaveProperty('id');
    expect(createdCar.name).toBe(mockCarData1.name);
  });

  it('should not be able to create a car with exists license plate', async () => {
    await expect(async () => {
      await createCarUseCase.execute(mockCarData1);
      await createCarUseCase.execute(mockCarData2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should create a new car with available true', async () => {
    const createCar = await createCarUseCase.execute(mockCarData1);

    expect(createCar.available).toBe(true);
  });
});
