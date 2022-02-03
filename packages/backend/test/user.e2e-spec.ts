import { UsersService } from './../src/modules/users/users.service';
import { UsersModule } from './../src/modules/users/users.module';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Repository } from 'typeorm';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { Configuration } from '../src/core';
import { FoodEntriesModule } from '../src/modules/food-entries/food-entries.module';
import { ConfigModule } from '@nestjs/config';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockTypeormModule } from '../src/core/mockTypeormModule';
import * as bcrypt from 'bcrypt';

describe('UserController (e2e)', () => {
  let app: INestApplication;
  let foodEntryRepository: Repository<FoodEntryEntity>;
  let userRepository: Repository<UserEntity>;
  let userService: UsersService;

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
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
    foodEntryRepository = moduleFixture.get(
      getRepositoryToken(FoodEntryEntity),
    );
    userRepository = moduleFixture.get(getRepositoryToken(UserEntity));
    userService = moduleFixture.get(UsersService);
  });

  describe('Login', () => {
    beforeAll(async () => {
      await userRepository.save({
        email: 'ilyaslahmer93@gmail.com',
        hashed_password: bcrypt.hashSync('123456', 10),
      });
    });

    it('should login with correct credentials', async () => {
      return request(app.getHttpServer())
        .post('/login')
        .send({
          email: 'ilyaslahmer93@gmail.com',
          password: '123456',
        })
        .expect(200);
    });

    it('should send unauthorized when trying to login with incorrect credentials', () => {
      return request(app.getHttpServer())
        .post('/login')
        .send({
          email: 'ilyaslahmer93@gmail.com',
          password: 'wrong password',
        })
        .expect(401);
    });
  });

  describe('Register', () => {
    it('should register a new user when sending a correct payload', () => {
      return request(app.getHttpServer())
        .post('/register')
        .send({
          email: 'sidahmsed@gmail.com',
          password: '123456',
        })
        .expect(201);
    });
  });

  describe('User Profile', () => {
    it('should send the correct logged in user profile', async () => {
      const user = await userRepository.findOne({
        where: { email: 'ilyaslahmer93@gmail.com' },
      });
      const token = userService.generateToken(user.id);
      return request(app.getHttpServer())
        .get('/me')
        .set('Authorization', `Bearer ${token.access_token}`)
        .expect(200);
    });
  });
});
