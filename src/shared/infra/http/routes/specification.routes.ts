import { CreateSpecificationController } from '@cars/useCases/createSpecification/CreateSpecificationController';
import { Router } from 'express';

import { ensureAdmin } from '../middleware/ensureAdmin';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

specificationsRoutes.get('/', (request, response) => {
  response.status(201).json();
});

export { specificationsRoutes };
