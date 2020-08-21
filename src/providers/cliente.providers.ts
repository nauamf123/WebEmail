import { Connection, Repository } from 'typeorm';
import { ClienteEntity } from '../entity/cliente.entity';
import { ClienteService } from 'src/entity/cliente.service';


export const ClienteProviders = [
  {
    provide: 'Cliente_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ClienteEntity),
    inject: ['DATABASE_CONNECTION'],
  },
];