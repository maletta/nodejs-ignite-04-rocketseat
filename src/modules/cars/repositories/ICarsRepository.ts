import { ICreateCarDTO } from '@cars/dtos/ICreateCarDTO';
import { Car } from '@cars/infra/typeorm/entities/Car';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car[]>;
}

export { ICarsRepository };
