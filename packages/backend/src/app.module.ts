import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from './core/Configuration';
import { FoodEntriesModule } from './modules/food-entries/food-entries.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [() => Configuration],
    }),
    TypeOrmModule.forRoot(Configuration.database),
    UsersModule,
    FoodEntriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
