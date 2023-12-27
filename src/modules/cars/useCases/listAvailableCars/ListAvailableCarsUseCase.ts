import { Car } from '@cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@cars/repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  category_id: string;
  brand: string;
  name: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
  ) {}

  async execute({
    brand,
    category_id,
    name,
  }: Partial<IRequest>): Promise<Car[]> {
    const availableCars = await this.carsRepository.findAvailable(
      brand,
      category_id,
      name,
    );

    if (availableCars.length === 0) {
      throw new AppError('Dont find available cars!');
    }

    return availableCars;
  }
}

export { ListAvailableCarsUseCase };
