import { Module } from '@nestjs/common';

import { ClienteProviders } from 'src/providers/cliente.providers';
import { ClienteService } from 'src/entity/cliente.service';
import { DatabaseModule } from './database.module';


@Module({
  imports: [DatabaseModule],
  providers: [
    ...ClienteProviders 
    ,
    ClienteService,
  ],
})
export class ProdutoModule {}