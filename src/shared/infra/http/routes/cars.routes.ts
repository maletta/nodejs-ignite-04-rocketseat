import { CreateCarController } from '@cars/useCases/createCar/CreateCarController';
import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';

import { ensureAdmin } from '../middleware/ensureAdmin';

const carsRoutes = Router();

const createCarsController = new CreateCarController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
);

export { carsRoutes };
