import { InMemoryCategoriesRepository } from '../../repositories/in-memory/InMemoryCategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: InMemoryCategoriesRepository;

describe('Create Categoy', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new InMemoryCategoriesRepository();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category description Test',
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    console.log(categoryCreated);

    expect(categoryCreated).toHaveProperty('id');
  });
});
