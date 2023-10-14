import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';
import { swaggerRoutes } from './swagger.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);
router.use('/api-docs', swaggerRoutes);
router.get('/date', (req, res) => {
  console.log(new Date());
  res.status(200).send();
});

export { router };
