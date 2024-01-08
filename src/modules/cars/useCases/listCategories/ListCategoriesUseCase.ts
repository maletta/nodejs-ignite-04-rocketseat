import Category from '@cars/infra/typeorm/entities/Category';
import { ICategoriesRepository } from '@cars/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoriesUseCase {
  /**
   *
   * @param categoriesRepository inversion dependency injection
   *
   * receive a implementation of ICategoriesRepository, that is a implementation of any Database
   * ListCategoriesUseCase dont need to know wich implementation it is because any implementation
   * will have the same methods
   */
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}
  public async execute(): Promise<Category[]> {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
