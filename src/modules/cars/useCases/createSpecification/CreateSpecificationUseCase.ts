import { ISpecificationRepository } from '@cars-repositories/ISpecificationRepository';
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
      throw Error('Specification already exists');
    }

    this.specificationRepository.create({ description, name });
  }
}

export { CreateSpecificationUseCase };
