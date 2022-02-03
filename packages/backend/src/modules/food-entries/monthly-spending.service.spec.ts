import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlySpending } from '@toptal-calories-counter/database';
import { mockTypeormModule } from '../../core/mockTypeormModule';
import { MonthlySpendingService } from './monthly-spending.service';

describe('MonthlySpendingService', () => {
  let service: MonthlySpendingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        mockTypeormModule(),
        TypeOrmModule.forFeature([MonthlySpending]),
      ],
      providers: [MonthlySpendingService],
    }).compile();

    service = module.get<MonthlySpendingService>(MonthlySpendingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
