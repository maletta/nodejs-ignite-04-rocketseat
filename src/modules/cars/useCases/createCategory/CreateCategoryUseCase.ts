import { ICategoriesRepository } from '@cars-repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

/**
 * [] definitir o tipo de retorno
 * [] alterar o retorno de erro
 * [] acessar o repositorio
 * [] retornar algo
 */
class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
