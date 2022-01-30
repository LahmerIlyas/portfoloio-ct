import { LocalAuthGuard } from './../../guards/local.auth-guard';
import { Logger, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@toptal-calories-counter/database';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Configuration } from 'src/core';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [
    PassportModule,
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register(Configuration.jwt),
  ],
  providers: [UsersService, LocalStrategy, JwtStrategy, Logger],
  controllers: [UsersController]
})
export class UsersModule {}
