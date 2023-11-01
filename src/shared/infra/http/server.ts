import 'reflect-metadata';
import '@shared/container';
import 'express-async-errors'; // lib para tratar erros
import '@database/data-source';

import express from 'express';

import { router } from '@shared/infra/http/routes/index';

import { errorMiddleware } from './middleware/errorMiddleware';

const server = express();

server.use(express.json());
server.use(router);
server.use(errorMiddleware);

server.listen(3333, () => {
  console.log('listen on port ', 3333);
});
