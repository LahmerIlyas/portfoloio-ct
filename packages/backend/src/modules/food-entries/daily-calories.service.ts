import { DailyCalories } from '@toptal-calories-counter/database';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DailyCaloriesService extends TypeOrmCrudService<DailyCalories> {
  constructor(@InjectRepository(DailyCalories) repo) {
    super(repo);
  }
}
