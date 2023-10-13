import { ICategoriesRepository } from '@cars-repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';

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

@injectable()
class CreateCategoryUseCase {
  // eslint-disable-next-line prettier/prettier

  constructor(
    @inject('CategoriesRepository') // injeta o singleton especificado
    private categoriesRepository: ICategoriesRepository
  ) {}

  public async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
