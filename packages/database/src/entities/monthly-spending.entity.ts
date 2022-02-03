import { FoodEntryEntity } from './food-entry.entity';
import { Connection, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (connection: Connection) =>
    connection
      .createQueryBuilder()
      .select(`to_char(taken_at,'YYYY-MM')`, 'month')
      .addSelect('entry.user_id', 'user_id')
      .addSelect('sum(entry.price)', 'spending')
      .from(FoodEntryEntity, 'entry')
      .groupBy(`to_char(taken_at,'YYYY-MM')`)
      .addGroupBy('entry.user_id')
      .orderBy(`to_char(taken_at,'YYYY-MM')`, 'DESC'),
})
export class MonthlySpending {
  @ViewColumn()
  user_id: number;

  @ViewColumn()
  month: string;

  @ViewColumn()
  spending: Date;
}
