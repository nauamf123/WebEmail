import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { ProdutoProviders } from 'src/providers/produto.providers';
import { ProdutoService } from 'src/entity/produto.service';


@Module({
  imports: [DatabaseModule],
  providers: [
    ...ProdutoProviders 
    ,
    ProdutoService,
  ],
})
export class ProdutoModule {}