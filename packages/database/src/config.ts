import 'dotenv/config'
import { ConnectionOptions } from 'typeorm';
import {FoodEntryEntity, UserEntity} from './entities';

const isProduction = process.env.NODE_ENV === 'production';

export const clientDatabaseConfiguration = {
    type: 'postgres',
    url: process.env.POSTGRES_URI || 'postgres://root:root@127.0.0.1:5432/root',
    entities: [FoodEntryEntity, UserEntity],
    synchronize: false,
    migrationsRun: false,
    logging: 'all',
    extra: {
      ssl: false,
    },
} as ConnectionOptions

export const DatabaseConfiguration = {
  ...clientDatabaseConfiguration,
  migrations: ['lib/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
  migrationsTransactionMode: 'each',
  logging: 'all',
  extra: {
    ssl: isProduction,
  },
  cli: {
    migrationsDir: 'src/migrations',
  },
}