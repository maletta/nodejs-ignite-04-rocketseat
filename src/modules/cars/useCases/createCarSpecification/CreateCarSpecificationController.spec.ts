import { CarsRepositoryInMemory } from '@cars/repositories/in-memory/CarsRepositoryInMemory';

import { AppError } from '@shared/errors/AppError';

import { CreateCarSpecificationUseCase } from './CreateCarSpecificationUseCase';

describe('should be able to add a new specification to the car', () => {
  let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
  let carRepositoryInMemory: CarsRepositoryInMemory;

  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carRepositoryInMemory,
    );
  });

  it('should not be able to add a new specification to a now-existent car', async () => {
    expect(async () => {
      const car_id = '1234';
      const specifications_id = ['4321'];
      return createCarSpecificationUseCase.execute({
        car_id,
        specifications_id,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a car specification ', async () => {
    const car_id = '1234';
    const specifications_id = ['4321'];
    const carSpecification = await createCarSpecificationUseCase.execute({
      car_id,
      specifications_id,
    });

    expect(carSpecification).toBe(null);
  });
});
