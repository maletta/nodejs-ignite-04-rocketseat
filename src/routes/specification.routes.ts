import { createSpecificationController } from '@cars-useCases/createSpecification';
import { Router } from 'express';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  response.status(201).json();
});

export { specificationsRoutes };
