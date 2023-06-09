import Specification from '@cars-models/Specification';

type ISpecificationDTO = Omit<Specification, 'created_at'>;

interface ISpecificationRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({ description, name }: ISpecificationDTO): void;
}

export { ISpecificationDTO, ISpecificationRepository };
