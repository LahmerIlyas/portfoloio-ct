import { RegisterDto } from './dto/register.dto';
import { Configuration } from '../../core';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@toptal-calories-counter/database';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { Logger } from '@nestjs/common';
import { mockTypeormModule } from '../../core/mockTypeormModule';

describe('UsersController', () => {
  let controller: UsersController;
  let userRepository: Repository<UserEntity>;
  let jwtService: JwtService;

  const user1 = {
    email: 'user1@gmail.com',
    password: '123456',
  } as RegisterDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        mockTypeormModule(),
        TypeOrmModule.forFeature([UserEntity]),
        PassportModule,
        JwtModule.register(Configuration.jwt),
      ],
      controllers: [UsersController],
      providers: [UsersService, LocalStrategy, JwtStrategy, Logger],
    }).compile();
    controller = module.get<UsersController>(UsersController);
    jwtService = module.get<JwtService>(JwtService);
    userRepository = module.get(getRepositoryToken(UserEntity));
    await userRepository.delete({ id: MoreThanOrEqual(0) });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register successfully', async () => {
    const { access_token } = await controller.register(user1);
    const id = jwtService.decode(access_token)['id'];
    expect(id).toBeDefined();
  });
});
