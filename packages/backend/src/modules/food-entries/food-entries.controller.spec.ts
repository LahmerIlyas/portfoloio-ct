import { Test, TestingModule } from '@nestjs/testing';
import { FoodEntriesController } from './food-entries.controller';

describe('FoodEntriesController', () => {
  let controller: FoodEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodEntriesController],
    }).compile();

    controller = module.get<FoodEntriesController>(FoodEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
