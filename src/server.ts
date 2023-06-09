import { categoriesRoutes } from '@routes/categories.routes';
import { specificationsRoutes } from '@routes/specification.routes';
import express from 'express';

const server = express();

server.use(express.json());

server.use('/categories', categoriesRoutes);
server.use('/specifications', specificationsRoutes);

server.listen(3333, () => {
  console.log('listen on port ', 3333);
});
