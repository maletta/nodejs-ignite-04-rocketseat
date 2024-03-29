import { ICarsRepository } from '@cars/repositories/ICarsRepository';
import { inject } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
  ) {}

  public async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    //
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car doesn't exists!");
    }
  }
}

export { CreateCarSpecificationUseCase };
