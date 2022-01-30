import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@toptal-calories-counter/database';
import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class UsersService {

  @InjectRepository(UserEntity)
  protected userRepository: Repository<UserEntity>

  @Inject(JwtService)
  jwtService: JwtService;

  @Inject(Logger)
  private readonly logger: LoggerService
  
  public generateToken(id: number) {
    const access_token = this.jwtService.sign({ id });
    return {
      access_token
    };
  }

  public async createUser(input: RegisterDto) {
    this.logger.log('createUser', input);
    const entity = await this.userRepository.save(input);
    return await this.generateToken(entity.id);
  }
}