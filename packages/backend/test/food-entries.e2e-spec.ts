import { DailyCaloriesService } from './../src/modules/food-entries/daily-calories.service';
import { UsersModule } from '../src/modules/users/users.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import {
  FoodEntryEntity,
  UserEntity,
  DailyCalories,
  MonthlySpending,
} from '@toptal-calories-counter/database';
import { Configuration } from '../src/core';
import { FoodEntriesModule } from '../src/modules/food-entries/food-entries.module';
import { ConfigModule } from '@nestjs/config';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockTypeormModule } from '../src/core/mockTypeormModule';
import { UsersService } from '../src/modules/users/users.service';
import { MonthlySpendingService } from '../src/modules/food-entries/monthly-spending.service';

describe('FoodEntries (e2e)', () => {
  let app: INestApplication;
  let foodEntryRepository: Repository<FoodEntryEntity>;
  let userRepository: Repository<UserEntity>;
  let dailyCaloriesRepository: Repository<DailyCalories>;
  let monthlySpendingRepository: Repository<MonthlySpending>;
  let userService: UsersService;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          cache: true,
          load: [() => Configuration],
        }),
        mockTypeormModule(),
        UsersModule,
        FoodEntriesModule,
      ],
    })
      .overrideProvider(DailyCaloriesService)
      .useValue({
        getMany: jest.fn(),
      })
      .overrideProvider(MonthlySpendingService)
      .useValue({
        getMany: jest.fn(),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get(getRepositoryToken(UserEntity));
    userService = moduleFixture.get(UsersService);
    foodEntryRepository = moduleFixture.get(
      getRepositoryToken(FoodEntryEntity),
    );
    dailyCaloriesRepository = moduleFixture.get(
      getRepositoryToken(DailyCalories),
    );
    monthlySpendingRepository = moduleFixture.get(
      getRepositoryToken(MonthlySpending),
    );
    token = (
      await userService.createUser({
        email: 'test@gmail.com',
        password: '123456',
      })
    ).access_token;
  });

  describe('Create Food entry', () => {
    it('should be successfully created', () => {
      return request(app.getHttpServer())
        .post('/food-entries')
        .set('Authorization', `Bearer ${token}`)
        .send({
          food_name: 'test',
          taken_at: new Date().toISOString(),
          calories_count: 10,
          price: 100,
        })
        .expect(201);
    });
  });

  describe('Get food entries', () => {
    it('should return the logged in user entires', () => {
      return request(app.getHttpServer())
        .get('/food-entries')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    });
  });

  describe('Get daily calories', () => {
    it('should return the logged in user daily calories', () => {
      return request(app.getHttpServer())
        .get('/food-entries/daily-calories')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    });
  });

  describe('Get monthly spending', () => {
    it('should return the logged in user monthly spending', () => {
      return request(app.getHttpServer())
        .get('/food-entries/monthly-spending')
        .set('Authorization', `Bearer ${token}`)
        .expect(200);
    });
  });
});

export const mockRepository = jest.fn(() => ({
  metadata: {
    columns: [],
    relations: [],
  },
  options: {},
}));
