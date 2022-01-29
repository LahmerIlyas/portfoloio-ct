import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '@toptal-calories-counter/database';
import { ExecutionContext, Inject, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt } from 'passport-jwt';
import { Repository } from 'typeorm';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private logger = new Logger(JwtAuthGuard.name);

  @InjectRepository(UserEntity)
  private userRepository: Repository<UserEntity>

    @Inject(JwtService)
    jwtService: JwtService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    try{
      const accessToken = ExtractJwt.fromAuthHeaderAsBearerToken()(request);
      if (!accessToken)
        throw new UnauthorizedException('Access token is not set');

      // get the user id
      const verifyResult = await this.jwtService.verify(accessToken);
      console.log(verifyResult)
      const result = await this.jwtService.decode(accessToken);
      // inject the user into the request
      request.user = await this.userRepository.findOneOrFail(result['id']);
    } catch (error) {
      console.log(error)
      this.logger.error(error.message);
      return false;
    }
      return true;
  }
}
