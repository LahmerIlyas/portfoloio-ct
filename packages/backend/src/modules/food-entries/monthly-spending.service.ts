import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { MonthlySpending } from '@toptal-calories-counter/database';

@Injectable()
export class MonthlySpendingService extends TypeOrmCrudService<MonthlySpending> {
  constructor(@InjectRepository(MonthlySpending) repo) {
    super(repo);
  }
}
