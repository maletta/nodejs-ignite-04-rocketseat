import { ICreateCarDTO } from '@cars/dtos/ICreateCarDTO';
import { Car } from '@cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  private cars: Car[] = [];

  public async create(data: ICreateCarDTO): Promise<Car> {
    const {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    } = data;
    const car = new Car();

    Object.assign(car, {
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    this.cars.push(car);

    return car;
  }

  public async findByLicensePlate(license_plate: string): Promise<Car[]> {
    const foundCars = this.cars.filter(
      (car) => car.license_plate === license_plate
    );
    return foundCars;
  }
}

export { CarsRepositoryInMemory };
