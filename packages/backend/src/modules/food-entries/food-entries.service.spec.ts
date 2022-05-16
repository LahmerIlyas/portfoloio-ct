import { Test, TestingModule } from '@nestjs/testing';
import { FoodEntriesService } from './food-entries.service';
import { FoodEntryEntity } from '@portfolio-calories-counter/database';
import { Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mockTypeormModule } from '../../core/mockTypeormModule';

describe('FoodEntriesService', () => {
  let service: FoodEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        mockTypeormModule(),
        TypeOrmModule.forFeature([FoodEntryEntity]),
      ],
      providers: [FoodEntriesService, Logger],
    }).compile();
    service = module.get<FoodEntriesService>(FoodEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
