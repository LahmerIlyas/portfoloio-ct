import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { clientDatabaseConfiguration } from '@portfolio-calories-counter/database';
import * as winston from 'winston';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';

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

export const winstonConfig = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike('portfolio Calories Tracker', {
          prettyPrint: true,
        }),
      ),
    }),
  ],
});
