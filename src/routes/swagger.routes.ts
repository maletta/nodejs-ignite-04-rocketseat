import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../swagger.json';

const swaggerRoutes = Router();

const swaggerOptions: swaggerUi.SwaggerOptions = {
  docExpansion: 'list', // none | list | full expande todas as rotas por padrão
};

swaggerRoutes.use('/', swaggerUi.serve);
swaggerRoutes.get(
  '/',
  swaggerUi.setup(swaggerFile, {
    swaggerOptions,
  })
);

export { swaggerRoutes };
