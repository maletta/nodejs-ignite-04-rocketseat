import { SpecificationRepository } from '@cars-repositories/SpecificationRepository';
import { CreateSpecificationService } from '@cars-services/CreateSpecificationService';
import { Router } from 'express';

const specificationsRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository
  );

  createSpecificationService.execute({ name, description });
  response.status(201).json();
});

specificationsRoutes.get('/', (request, response) => {
  const all = specificationRepository.list();
  response.status(201).json(all);
});

export { specificationsRoutes };
