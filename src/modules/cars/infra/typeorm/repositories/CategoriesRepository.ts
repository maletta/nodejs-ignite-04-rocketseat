import Category from '@cars/infra/typeorm/entities/Category';
import { Repository } from 'typeorm';

import { AppDataSource } from '@shared/infra/typeorm/data-source';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../../repositories/ICategoriesRepository';

// Sigleton - uma única instância na aplicação
// sempre se perguntar se é preciso ter apenas uma instância ou não

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  public constructor() {
    console.log('construtor Category Repository');
    this.repository = AppDataSource.getRepository(Category);
  }

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  public async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  public async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({
      where: {
        name,
      },
    });
    return category;
  }
}

export { CategoriesRepository };
