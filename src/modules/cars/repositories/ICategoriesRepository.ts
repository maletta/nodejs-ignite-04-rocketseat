import Category from '@cars-entities/Category';

// DTO => Data Tranfer Object camada para transferir de uma camada para outra
type ICreateCategoryDTO = Omit<Category, 'created_at'>;

interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ description, name }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
