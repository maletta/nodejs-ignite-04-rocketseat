import Category from '@cars-entities/Category';
import { AppDataSource } from '@src/database/data-source';
import { Repository } from 'typeorm';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../ICategoriesRepository';

// Sigleton - uma única instância na aplicação
// sempre se perguntar se é preciso ter apenas uma instância ou não

class CategoriesRepository implements ICategoriesRepository {
  private static INSTANCE: CategoriesRepository;
  private repository: Repository<Category>;

  // não é possível mais dar new fora desta classe
  public constructor() {
    console.log('construtor Category Repository');
    this.repository = AppDataSource.getRepository(Category);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  public async create({
    name,
    description,
  }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
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
