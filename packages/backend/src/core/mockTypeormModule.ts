import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from './Configuration';

export function mockTypeormModule() {
  return TypeOrmModule.forRoot({
    entities: Configuration.database.entities,
    type: 'sqlite',
    //name: 'rea',
    keepConnectionAlive: true,
    database: ':memory:',
    dropSchema: true,
    logging: false,
    synchronize: true,
  });
}
