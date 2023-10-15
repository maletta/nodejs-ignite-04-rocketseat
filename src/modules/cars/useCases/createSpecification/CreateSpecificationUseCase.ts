import { ISpecificationRepository } from '@cars-repositories/ISpecificationRepository';
import { AppError } from '@src/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository') // injeta o singleton especificado
    private specificationRepository: ISpecificationRepository
  ) {}

  public async execute({ name, description }: IRequest): Promise<void> {
    const specificaionAlreadyExists =
      await this.specificationRepository.findByName(name);

    if (specificaionAlreadyExists) {
      throw new AppError('Specification already exists!');
    }

    await this.specificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
