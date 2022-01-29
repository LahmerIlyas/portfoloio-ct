import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { FoodEntryEntity } from '@toptal-calories-counter/database';

@Injectable()
export class FoodEntriesService extends TypeOrmCrudService<FoodEntryEntity> {
  constructor(@InjectRepository(FoodEntryEntity) repo) {
    super(repo);
  }
}
