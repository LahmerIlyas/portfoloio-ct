import { Configuration } from 'src/core';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { FoodEntriesService } from './food-entries.service';
import { FoodEntriesController } from './food-entries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';

@Module({
  imports: [
    JwtModule.register(Configuration.jwt),
    TypeOrmModule.forFeature([UserEntity, FoodEntryEntity])
  ],
  providers: [FoodEntriesService],
  controllers: [FoodEntriesController]
})
export class FoodEntriesModule {}
