import { Configuration } from '../../core';
import { JwtModule } from '@nestjs/jwt';
import { Logger, Module } from '@nestjs/common';
import { FoodEntriesService } from './food-entries.service';
import { FoodEntriesController } from './food-entries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FoodEntryEntity,
  UserEntity,
  MonthlySpending,
  DailyCalories,
} from '@toptal-calories-counter/database';
import { DailyCaloriesService } from './daily-calories.service';
import { MonthlySpendingService } from './monthly-spending.service';

@Module({
  imports: [
    JwtModule.register(Configuration.jwt),
    TypeOrmModule.forFeature([
      UserEntity,
      FoodEntryEntity,
      MonthlySpending,
      DailyCalories,
    ]),
  ],
  providers: [
    FoodEntriesService,
    Logger,
    DailyCaloriesService,
    MonthlySpendingService,
  ],
  controllers: [FoodEntriesController],
})
export class FoodEntriesModule {}
