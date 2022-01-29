import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from '@toptal-calories-counter/database';
import { UsersService } from './users.service';
import { Connection, Repository } from 'typeorm';
import { mockDatabaseConnection, mockTypeormRepository } from '../../core';

describe('UsersService', () => {
  let service: UsersService;
  let connection: Connection;
  let userRepository: Repository<UserEntity>;

  beforeAll(async () => {
    connection = await mockDatabaseConnection();
    userRepository = connection.getRepository<UserEntity>('UserEntity');
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        mockTypeormRepository(UserEntity, connection)
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a jwt token when user credentials are correct', async () => {

  })

  it('should send an error when user tries to authenticate with invalid credentials', async () => {
    
  })

});
