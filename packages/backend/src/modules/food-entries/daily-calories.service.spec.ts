import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyCalories } from '@toptal-calories-counter/database';
import { mockTypeormModule } from '../../core/mockTypeormModule';
import { DailyCaloriesService } from './daily-calories.service';

describe('DailyCaloriesService', () => {
  let service: DailyCaloriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [mockTypeormModule(), TypeOrmModule.forFeature([DailyCalories])],
      providers: [DailyCaloriesService],
    }).compile();

    service = module.get<DailyCaloriesService>(DailyCaloriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
