import { FoodEntryEntity } from './food-entry.entity';
import { Connection, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select(`TO_CHAR(entry.taken_at, 'yyyy-mm-dd')`, 'date')
      .addSelect('entry.user_id', 'user_id')
      .addSelect('sum(entry.calories_count)', 'calories_count')
      .from(FoodEntryEntity, 'entry')
      .groupBy(`TO_CHAR(entry.taken_at, 'yyyy-mm-dd')`)
      .addGroupBy('entry.user_id')
      .orderBy(`TO_CHAR(entry.taken_at, 'yyyy-mm-dd')`, 'DESC'),
})
export class DailyCalories {
  @ViewColumn()
  user_id: number;

  @ViewColumn()
  date: Date;

  @ViewColumn()
  calories_count: number;
}
