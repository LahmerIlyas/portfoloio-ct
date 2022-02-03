import { mockTypeormRepository } from './../../core/mockTypeormRepository';
import { Configuration } from '../../core';
import { mockDatabaseConnection } from './../../core/mockDatabaseConnection';
import { Test, TestingModule } from '@nestjs/testing';
import {
  DailyCalories,
  FoodEntryEntity,
  MonthlySpending,
  UserEntity,
} from '@toptal-calories-counter/database';
import { Connection, Repository } from 'typeorm';
import { FoodEntriesController } from './food-entries.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { FoodEntriesService } from './food-entries.service';
import { Logger } from '@nestjs/common';
import { mockTypeormModule } from '../../core/mockTypeormModule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlySpendingService } from './monthly-spending.service';
import { DailyCaloriesService } from './daily-calories.service';

describe('FoodEntriesController', () => {
  let controller: FoodEntriesController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        mockTypeormModule(),
        TypeOrmModule.forFeature([
          UserEntity,
          DailyCalories,
          MonthlySpending,
          FoodEntryEntity,
        ]),
        PassportModule,
        JwtModule.register(Configuration.jwt),
      ],
      providers: [
        FoodEntriesService,
        Logger,
        MonthlySpendingService,
        DailyCaloriesService,
      ],
      controllers: [FoodEntriesController],
    }).compile();

    controller = module.get<FoodEntriesController>(FoodEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
