import { CreateSpecificationController } from '@cars/useCases/createSpecification/CreateSpecificationController';
import { Router } from 'express';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post('/', createSpecificationController.handle);

specificationsRoutes.get('/', (request, response) => {
  response.status(201).json();
});

export { specificationsRoutes };
