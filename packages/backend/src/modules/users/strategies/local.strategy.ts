import { UserEntity } from '@toptal-calories-counter/database';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  @InjectRepository(UserEntity)
  userRepository: Repository<UserEntity>;

  constructor() {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<any> {
    // We get the user
    const user = await this.userRepository.findOneOrFail({ where: { email } });

    // We hash the two passwords and compare them
    const isPasswordMatching = await bcrypt.compare(
      password,
      user.hashed_password,
    );

    if (!isPasswordMatching) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
