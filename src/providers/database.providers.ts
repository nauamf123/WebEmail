import { createConnection } from 'typeorm';
import { ClienteEntity } from '../entity/cliente.entity';
import { ProdutoEntity } from '../entity/produto.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 63074,
      username: 'nauam',
      password: '7887',
      database: 'WebService',
      entities: [
         ClienteEntity
        ,
         ProdutoEntity
      ],

      synchronize: true,
      logging: true,
    }),
  },
];