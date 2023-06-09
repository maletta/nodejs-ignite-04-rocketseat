import Specification from '@cars-models/Specification';

import {
  ISpecificationDTO,
  ISpecificationRepository,
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];
  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  create({ description, name }: ISpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      description,
      name,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (item) => item.name === name
    );

    return specification;
  }
}

export { SpecificationRepository };
