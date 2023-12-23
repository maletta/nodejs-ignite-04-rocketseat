import { ICreateCarDTO } from '@cars/dtos/ICreateCarDTO';
import { ICarsRepository } from '@cars/repositories/ICarsRepository';
import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/typeorm/data-source';

import { Car } from '../entities/Car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  public constructor() {
    this.repository = AppDataSource.getRepository(Car);
  }

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

    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    }); // cria a referência da entidade Car

    console.log('*(********* new car', car);

    const createdCar = await this.repository.save(car); // salva a entidade car

    return createdCar;
  }

  public async findByLicensePlate(license_plate: string): Promise<Car[]> {
    const foundCars = await this.repository.find({
      where: {
        license_plate,
      },
    });

    return foundCars;
  }
}

export { CarsRepository };
