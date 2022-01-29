import 'dotenv/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { clientDatabaseConfiguration } from '@toptal-calories-counter/database';

const isProduction = process.env.NODE_ENV === 'production';

export const Configuration = {
  bcryptSaltRounds: 10,
  port: parseInt(process.env.PORT, 10) || 3000,
  database: clientDatabaseConfiguration as TypeOrmModuleOptions,
  isProduction,
  jwt: {
    secret: process.env.JWT_SECRET_KEY || 'testsecret',
    signOptions: { expiresIn: '1d' },
  },
  redis: process.env.REDIS_URI || 'redis://localhost:6379',
};
