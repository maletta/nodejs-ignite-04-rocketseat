import 'reflect-metadata';
import '@shared/container';
import 'express-async-errors'; // lib para tratar erros
import '@shared/infra/typeorm/data-source';

import express from 'express';

import { router } from '@shared/infra/http/routes/index';

import { errorMiddleware } from './middleware/errorMiddleware';

const server = express();

server.use(express.json());
server.use(router);
server.use(errorMiddleware); // deve ser o último middleware a ser importado, pois lida com erros anteriores

server.listen(3333, () => {
  console.log('listen on port ', 3333);
});
