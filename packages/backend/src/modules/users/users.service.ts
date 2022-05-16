import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@portfolio-calories-counter/database';
import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  @InjectRepository(UserEntity)
  protected userRepository: Repository<UserEntity>;

  @Inject(JwtService)
  jwtService: JwtService;

  @Inject(Logger)
  private readonly logger: LoggerService;

  public generateToken(id: number) {
    const access_token = this.jwtService.sign({ id });
    return {
      access_token,
    };
  }

  public async createUser(input: RegisterDto) {
    this.logger.log('createUser', input);
    const hashed_password = bcrypt.hashSync(input.password, 10);
    const entity = await this.userRepository.save({
      ...input,
      hashed_password,
    });
    return await this.generateToken(entity.id);
  }
}
