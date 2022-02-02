import { FoodEntryEntity } from './food-entry.entity';
import { Connection, ViewColumn, ViewEntity } from 'typeorm';
import { BaseEntity } from './base.entity';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select(`to_char(taken_at,'MM-YYYY')`, 'month')
      .addSelect('max(entry.user_id)', 'user_id')
      .addSelect('sum(entry.calories_count)', 'spending')
      .from(FoodEntryEntity, 'entry')
      .groupBy(`to_char(taken_at,'MM-YYYY')`)
      .orderBy(`to_char(taken_at,'MM-YYYY')`, 'DESC'),
})
export class MonthlySpending extends BaseEntity {
  @ViewColumn()
  user_id: number;

  @ViewColumn()
  month: String;

  @ViewColumn()
  spending: Date;
}
