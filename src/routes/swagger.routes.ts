import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../swagger.json';

const swaggerRoutes = Router();

swaggerRoutes.use('/', swaggerUi.serve);
swaggerRoutes.get('/', swaggerUi.setup(swaggerFile));

export { swaggerRoutes };
