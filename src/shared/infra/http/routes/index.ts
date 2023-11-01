import { Router } from 'express';

import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specification.routes';
import { swaggerRoutes } from './swagger.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/api-docs', swaggerRoutes);
router.use(authenticateRoutes);
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationsRoutes);
router.use('/users', usersRoutes);

export { router };
