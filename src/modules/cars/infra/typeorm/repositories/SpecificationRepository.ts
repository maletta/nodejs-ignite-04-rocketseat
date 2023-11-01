import Specification from '@cars/infra/typeorm/entities/Specification';
import { AppDataSource } from '@database/data-source';
import { Repository } from 'typeorm';

import {
  ISpecificationDTO,
  ISpecificationRepository,
} from '../../../repositories/ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  public constructor() {
    console.log('construtor Specification Repository');
    this.repository = AppDataSource.getRepository(Specification);
  }

  public async create({ description, name }: ISpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  public async list(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  public async findByName(name: string): Promise<Specification> {
    const specifications = this.repository.findOne({
      where: {
        name,
      },
    });

    return specifications;
  }
}

export { SpecificationRepository };