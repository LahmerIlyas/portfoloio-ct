import { FoodEntryEntity } from './food-entry.entity';
import { Connection, ViewColumn, ViewEntity } from 'typeorm';
import { BaseEntity } from './base.entity';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select(`TO_CHAR( entry.taken_at :: date, 'dd-mm-yyyy')`, 'date')
      .addSelect('max(entry.user_id)', 'user_id')
      .addSelect('sum(entry.calories_count)', 'calories_count')
      .from(FoodEntryEntity, 'entry')
      .groupBy('entry.taken_at::date')
      .orderBy('entry.taken_at::date', 'DESC'),
})
export class DailyCalories extends BaseEntity {
  @ViewColumn()
  user_id: number;

  @ViewColumn()
  date: Date;

  @ViewColumn()
  calories_count: Date;
}
