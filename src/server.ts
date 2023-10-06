import express from 'express';
import 'reflect-metadata';
import './database/data-source';

import { router } from './routes';

const server = express();

server.use(express.json());
server.use(router);

server.listen(3333, () => {
  console.log('listen on port ', 3333);
});
