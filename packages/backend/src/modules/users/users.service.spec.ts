import { Test, TestingModule } from '@nestjs/testing';
import { UserEntity } from '@toptal-calories-counter/database';
import { UsersService } from './users.service';
import { Connection, Repository } from 'typeorm';
import { Configuration, mockDatabaseConnection, mockTypeormRepository } from '../../core';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { Logger } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

describe('UsersService', () => {
  let service: UsersService;
  let jwtService: JwtService;
  let connection: Connection;
  let userRepository: Repository<UserEntity>;

  beforeAll(async () => {
    connection = await mockDatabaseConnection();
    userRepository = connection.getRepository<UserEntity>('UserEntity');
  })

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
          PassportModule,
          JwtModule.register(Configuration.jwt),
      ],
      providers: [
        UsersService,
        mockTypeormRepository(UserEntity, connection),
        LocalStrategy, JwtStrategy, Logger
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should create a valid jwt token for the provided user id', async () => {
    const { access_token } = await service.generateToken(1);
    expect(jwtService.decode(access_token)['id']).toBe(1);
  })

  describe('create user', () => {
    let user: UserEntity;

    const userPayload = {
      email: 'test@gmail.com',
      password: '123456',
    } as RegisterDto;

    beforeAll(async () => {
      const { access_token } = await service.createUser(userPayload);
      const id = jwtService.decode(access_token)['id'] as number;
      user = await userRepository.findOne(id);
    })

    it('should successfully create a user on the database', async () => {
      expect(user.email).toBe(userPayload.email);
    })

    it('password hash should match', async () => {
      const is_matched = bcrypt.compareSync(userPayload.password, user.hashed_password);
      expect(is_matched).toBe(true);    
    })
  });

});
