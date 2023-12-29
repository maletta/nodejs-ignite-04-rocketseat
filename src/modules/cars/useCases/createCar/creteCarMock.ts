import { ICreateCarDTO } from '@cars/dtos/ICreateCarDTO';

const mockCarData1: ICreateCarDTO = {
  name: 'Name Car 1',
  description: 'Description Car',
  daily_rate: 100,
  license_plate: 'ABC-1234',
  fine_amount: 60,
  brand: 'Description',
  category_id: 'af4eead2-d613-4305-9283-cf493087f111',
};

const mockCarData2: ICreateCarDTO = {
  name: 'Name Car 1',
  description: 'Description Car',
  daily_rate: 100,
  license_plate: 'ABC-1234',
  fine_amount: 60,
  brand: 'Description',
  category_id: 'af4eead2-d613-4305-9283-cf493087f222',
};

export { mockCarData1, mockCarData2 };
