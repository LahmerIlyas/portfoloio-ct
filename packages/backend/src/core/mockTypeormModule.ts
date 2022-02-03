import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from './Configuration';

export function mockTypeormModule() {
  return TypeOrmModule.forRoot({
    entities: Configuration.database.entities,
    type: 'sqlite',
    database: ':memory:',
    dropSchema: true,
    logging: false,
    synchronize: true,
  });
}
