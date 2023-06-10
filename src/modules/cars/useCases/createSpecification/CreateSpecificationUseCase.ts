import { ISpecificationRepository } from '@cars-repositories/ISpecificationRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  public execute({ name, description }: IRequest): void {
    const specificaionAlreadyExists = this.specificationRepository.findByName(
      name
    );

    if (specificaionAlreadyExists) {
      throw Error('Specification already exists');
    }

    this.specificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
