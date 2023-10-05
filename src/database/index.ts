import { createConnection } from 'typeorm';

// "createConnection" está deprecated, trocar essa função por DataSource

createConnection()
  .then(() => {
    console.log('CONECTADO NO BANCO DE DADOS COM SUCESSO');
  })
  .catch((err) => {
    console.log('ERRO AO CONECTAR NO BANCO');
    console.log(err);
  });
