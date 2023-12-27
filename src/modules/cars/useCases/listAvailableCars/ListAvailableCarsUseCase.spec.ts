import { CarsRepositoryInMemory } from '@cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

describe('List Car', () => {
  let carRepositoryInMemory: CarsRepositoryInMemory;
  let listAvailableCarUseCase: ListAvailableCarsUseCase;

  beforeEach(() => {
    carRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarUseCase = new ListAvailableCarsUseCase(
      carRepositoryInMemory,
    );
  });

  it('should be able to list only available cars', async () => {
    const carDataAvailable = {
      name: 'Available Car 1',
      description: 'Available Car 1',
      daily_rate: 100,
      license_plate: 'ABC-1111',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    const carDataNotAvailable = {
      name: 'Available Car 2',
      description: 'Available Car 2',
      daily_rate: 100,
      license_plate: 'ABC-2222',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    await carRepositoryInMemory.create(carDataAvailable);
    await carRepositoryInMemory.create(carDataNotAvailable);

    const availableCars = await listAvailableCarUseCase.execute({});

    expect(availableCars.length).toBe(2);
    expect(availableCars[0].available).toBe(true);
  });

  it('should be able to list only available cars', async () => {
    const carDataAvailable = {
      name: 'Available Car 1',
      description: 'Available Car 1',
      daily_rate: 100,
      license_plate: 'ABC-1111',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    const carDataNotAvailable = {
      name: 'Available Car 2',
      description: 'Available Car 2',
      daily_rate: 100,
      license_plate: 'ABC-2222',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    await carRepositoryInMemory.create(carDataAvailable);
    await carRepositoryInMemory.create(carDataNotAvailable);

    const availableCars = await listAvailableCarUseCase.execute({
      brand: null,
      category_id: null,
      name: null,
    });

    expect(availableCars.length).toBe(2);
    expect(availableCars[0].available).toBe(true);
  });

  it('should be able to list only available cars with brand filter', async () => {
    const carDataAvailable = {
      name: 'Available Car 1',
      description: 'Available Car 1',
      daily_rate: 100,
      license_plate: 'ABC-1111',
      fine_amount: 60,
      brand: 'Brand 1',
      category_id: 'category',
    };

    const carDataNotAvailable = {
      name: 'Available Car 2',
      description: 'Available Car 2',
      daily_rate: 100,
      license_plate: 'ABC-2222',
      fine_amount: 60,
      brand: 'Brand 2',
      category_id: 'category',
    };

    await carRepositoryInMemory.create(carDataAvailable);
    await carRepositoryInMemory.create(carDataNotAvailable);

    const availableCars = await listAvailableCarUseCase.execute({
      brand: 'Brand 1',
    });

    expect(availableCars.length).toBe(1);
    expect(availableCars[0].available).toBe(true);
    expect(availableCars[0].brand).toBe('Brand 1');
  });

  it('should be able to list only available cars with category_id filter', async () => {
    const carDataAvailable = {
      name: 'Available Car 1',
      description: 'Available Car 1',
      daily_rate: 100,
      license_plate: 'ABC-1111',
      fine_amount: 60,
      brand: 'Brand 1',
      category_id: '111',
    };

    const carDataNotAvailable = {
      name: 'Available Car 2',
      description: 'Available Car 2',
      daily_rate: 100,
      license_plate: 'ABC-2222',
      fine_amount: 60,
      brand: 'Brand 2',
      category_id: '222',
    };

    await carRepositoryInMemory.create(carDataAvailable);
    await carRepositoryInMemory.create(carDataNotAvailable);

    const availableCars = await listAvailableCarUseCase.execute({
      category_id: '111',
    });

    expect(availableCars.length).toBe(1);
    expect(availableCars[0].available).toBe(true);
    expect(availableCars[0].category_id).toBe('111');
  });

  it('should be able to list only available cars with name filter', async () => {
    const carDataAvailable = {
      name: 'Available Car 1',
      description: 'Available Car 1',
      daily_rate: 100,
      license_plate: 'ABC-1111',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    const carDataNotAvailable = {
      name: 'Available Car 2',
      description: 'Available Car 2',
      daily_rate: 100,
      license_plate: 'ABC-2222',
      fine_amount: 60,
      brand: 'Description',
      category_id: 'category',
    };

    await carRepositoryInMemory.create(carDataAvailable);
    await carRepositoryInMemory.create(carDataNotAvailable);

    const availableCars = await listAvailableCarUseCase.execute({
      name: 'Available Car 1',
    });

    expect(availableCars.length).toBe(1);
    expect(availableCars[0].available).toBe(true);
    expect(availableCars[0].name).toBe('Available Car 1');
  });
});
