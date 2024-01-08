import { Car } from '@cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@cars/repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
  ) {}

  async execute({
    name,
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
  }: IRequest): Promise<Car> {
    const carAlreadyExists =
      await this.carsRepository.findByLicensePlate(license_plate);

    if (carAlreadyExists.length > 0) {
      throw new AppError('Car already exists');
    }

    const createdCar = await this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    return createdCar;
  }
}

export { CreateCarUseCase };
