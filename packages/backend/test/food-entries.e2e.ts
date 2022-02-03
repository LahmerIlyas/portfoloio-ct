import { UsersModule } from './../src/modules/users/users.module';
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

describe('FoodEntries (e2e)', () => {
  let app: INestApplication;
  let foodEntryRepository: Repository<FoodEntryEntity>;
  let userRepository: Repository<UserEntity>;
  let dailyCaloriesRepository: Repository<DailyCalories>;
  let mpnthlySpendingRepository: Repository<MonthlySpending>;

  beforeEach(async () => {
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
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get(getRepositoryToken(UserEntity));
    foodEntryRepository = moduleFixture.get(
      getRepositoryToken(FoodEntryEntity),
    );
    dailyCaloriesRepository = moduleFixture.get(
      getRepositoryToken(DailyCalories),
    );
    mpnthlySpendingRepository = moduleFixture.get(
      getRepositoryToken(MonthlySpending),
    );
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .post('/login')
      .expect(200)
      .expect('Hello World!');
  });

  describe('Create Food entry', () => {
    it('should be successfully created', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });
    it('should be assigned to the logged in user', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });
  });

  describe('Get food entries', () => {
    it('should return the logged in user entires', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });
  });
});
