import { Connection, Repository } from 'typeorm';

import { ProdutoEntity } from 'src/entity/produto.entity';
import { ProdutoService } from 'src/entity/produto.service';


export const ProdutoProviders = [
  {
    provide: 'Produto_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ProdutoEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];