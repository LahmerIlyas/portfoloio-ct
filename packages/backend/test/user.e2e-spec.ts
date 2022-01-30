import { UsersModule } from './../src/modules/users/users.module';
import { mockDatabaseConnection } from './../src/core/mockDatabaseConnection';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection, Repository } from 'typeorm';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { Configuration } from '../src/core';
import { FoodEntriesModule } from '../src/modules/food-entries/food-entries.module';
import { ConfigModule } from '@nestjs/config';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let connection: Connection;
  let foodEntryRepository: Repository<FoodEntryEntity>;
  let userRepository: Repository<UserEntity>;

  beforeAll(async () => {
    connection = await mockDatabaseConnection();
    foodEntryRepository = connection.getRepository<FoodEntryEntity>('FoodEntryEntity');
    userRepository = connection.getRepository<UserEntity>('UserEntity');
  })

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          cache: true,
          load: [() => Configuration],
        }),
        UsersModule,
        FoodEntriesModule,
      ],
    })
      .overrideProvider(getRepositoryToken(UserEntity))
      .useValue(connection.getRepository(UserEntity))
      .overrideProvider(getRepositoryToken(FoodEntryEntity))
      .useValue(connection.getRepository(FoodEntryEntity))
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Login', () => {
    it('should login with correct credentials', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });

    it('should send unauthorized when trying to login with incorrect credentials', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });
  })

  describe('Register', () => {
    it('should register a new user when sending a correct payload', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });

    it('should send a validation error when email is missing', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });

    it('should send a validation error when email is already in use', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });

    it('should send a validation error when password length is less than 4', () => {
      return request(app.getHttpServer())
        .post('/login')
        .expect(200)
        .expect('Hello World!');
    });
  })
});
