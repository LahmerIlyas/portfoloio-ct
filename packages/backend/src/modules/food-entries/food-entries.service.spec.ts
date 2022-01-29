import { Test, TestingModule } from '@nestjs/testing';
import { FoodEntriesService } from './food-entries.service';

describe('FoodEntriesService', () => {
  let service: FoodEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodEntriesService],
    }).compile();

    service = module.get<FoodEntriesService>(FoodEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
