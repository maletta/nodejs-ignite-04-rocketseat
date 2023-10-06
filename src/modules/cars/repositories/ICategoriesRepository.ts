import Category from '@cars-entities/Category';

// DTO => Data Tranfer Object camada para transferir de uma camada para outra
type ICreateCategoryDTO = Omit<Category, 'created_at'>;

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ description, name }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
