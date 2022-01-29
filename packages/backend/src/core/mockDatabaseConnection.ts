import { UserEntity, FoodEntryEntity } from "@toptal-calories-counter/database";
import { newDb } from "pg-mem";
import { Connection } from 'typeorm';

export const mockDatabaseConnection = async (): Promise<Connection> => {
    const db = newDb({
       autoCreateForeignKeyIndices: true,
   });
    db.public.registerFunction({
      implementation: () => 'test',
      name: 'current_database',
    });
    const connection = await db.adapters.createTypeormConnection({
        type: 'postgres',
        entities: [UserEntity, FoodEntryEntity]
    });
    await connection.synchronize();
    return connection;
}