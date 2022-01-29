import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodEntryEntity, UserEntity } from '@toptal-calories-counter/database';
import { UsersService } from './users.service';
import { newDb } from 'pg-mem';
import { Connection } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let connection: Connection;

  beforeAll(async () => {
    const db = newDb({
       autoCreateForeignKeyIndices: true,
   });
    db.public.registerFunction({
      implementation: () => 'test',
      name: 'current_database',
    });
    connection = await db.adapters.createTypeormConnection({
        type: 'postgres',
        entities: [UserEntity, FoodEntryEntity]
    });
    await connection.synchronize();

  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([UserEntity])],
      providers: [UsersService],
    })
      .overrideProvider(Connection)
      .useValue(connection)
      .compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
