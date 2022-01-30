import { mockTypeormRepository } from './../../core/mockTypeormRepository';
import { Configuration } from '../../core';
import { mockDatabaseConnection } from './../../core/mockDatabaseConnection';
import { Test, TestingModule } from '@nestjs/testing';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { Connection, Repository } from 'typeorm';
import { FoodEntriesController } from './food-entries.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { FoodEntriesService } from './food-entries.service';
import { Logger } from '@nestjs/common';

describe('FoodEntriesController', () => {
  let controller: FoodEntriesController;
  let connection: Connection;
  let foodEntryRepository: Repository<FoodEntryEntity>;

  beforeAll(async () => {
    connection = await mockDatabaseConnection();
    foodEntryRepository = connection.getRepository<FoodEntryEntity>('FoodEntryEntity');
  })
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
          PassportModule,
          JwtModule.register(Configuration.jwt),
      ],
      providers: [
        FoodEntriesService,
        mockTypeormRepository(FoodEntryEntity, connection),
        mockTypeormRepository(UserEntity, connection),
        Logger
      ],
      controllers: [
        FoodEntriesController
      ],
    }).compile();

    controller = module.get<FoodEntriesController>(FoodEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
