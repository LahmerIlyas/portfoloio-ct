import { Module } from '@nestjs/common';
import { FoodEntriesService } from './food-entries.service';
import { FoodEntriesController } from './food-entries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, FoodEntryEntity])],
  providers: [FoodEntriesService],
  controllers: [FoodEntriesController]
})
export class FoodEntriesModule {}
