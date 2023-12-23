import { CreateCarController } from '@cars/useCases/createCar/CreateCarController';
import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';

const carsRoutes = Router();

const createCarsController = new CreateCarController();

carsRoutes.use(ensureAuthenticated);

carsRoutes.post('/', createCarsController.handle);

export { carsRoutes };
