import { CreateCarController } from '@cars/useCases/createCar/CreateCarController';
import { ListAvailableCarsController } from '@cars/useCases/listAvailableCars/ListAvailableCarsController';
import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';

import { ensureAdmin } from '../middleware/ensureAdmin';

const carsRoutes = Router();

const createCarsController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle,
);

carsRoutes.get('/available', listAvailableCarsController.handle);

export { carsRoutes };
