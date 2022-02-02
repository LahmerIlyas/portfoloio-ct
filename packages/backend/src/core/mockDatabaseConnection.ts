import {
  UserEntity,
  FoodEntryEntity,
  MonthlySpending,
  DailyCalories,
} from '@toptal-calories-counter/database';
import { DataType, newDb } from 'pg-mem';
import { Connection } from 'typeorm';

export const mockDatabaseConnection = async (): Promise<Connection> => {
  const db = newDb({
    autoCreateForeignKeyIndices: true,
  });
  db.public.registerFunction({
    implementation: () => 'test',
    name: 'current_database',
  });
  db.public.registerFunction({
    args: [DataType.date, DataType.text],
    implementation: (x, y) => x,
    name: 'to_char',
  });
  const connection = await db.adapters.createTypeormConnection({
    type: 'postgres',
    entities: [UserEntity, FoodEntryEntity, MonthlySpending, DailyCalories],
  });
  await connection.synchronize();
  return connection;
};
