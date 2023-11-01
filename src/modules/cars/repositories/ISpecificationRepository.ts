import Specification from '@cars/infra/typeorm/entities/Specification';

type ISpecificationDTO = Omit<Specification, 'created_at'>;

interface ISpecificationRepository {
  findByName(name: string): Promise<Specification>;
  list(): Promise<Specification[]>;
  create({ description, name }: ISpecificationDTO): Promise<void>;
}

export { ISpecificationDTO, ISpecificationRepository };
