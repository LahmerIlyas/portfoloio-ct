import { SerializerInterceptor } from './../../interceptors/serializer.interceptor';
import { JwtAuthGuard } from './../../guards/jwt.auth-guard';
import { LoginDto } from './dto/login.dto';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from '../../guards/local.auth-guard';
import { AccessTokenSerializer } from './serializer/access-token.serializer';
import { UserProfileSerializer } from './serializer/user-profile.serializer';
import { ApiBearerAuth, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { User } from '../../decorators/user.decorator';

@Controller('/')
export class UsersController {
  @Inject(UsersService)
  public userService: UsersService;

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(new SerializerInterceptor(AccessTokenSerializer))
  @ApiOkResponse({
    description: 'Return user access token.',
    type: AccessTokenSerializer,
  })
  @ApiOperation({ operationId: 'login' })
  @HttpCode(200)
  public async login(
    @Body() input: LoginDto,
    @Req() request,
  ): Promise<AccessTokenSerializer> {
    return this.userService.generateToken(request.user.id);
  }

  @Post('register')
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(new SerializerInterceptor(AccessTokenSerializer))
  @ApiOkResponse({
    description: 'Return user access token.',
    type: AccessTokenSerializer,
  })
  @ApiOperation({ operationId: 'register' })
  public async register(
    @Body() input: RegisterDto,
  ): Promise<AccessTokenSerializer> {
    return await this.userService.createUser(input);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(new SerializerInterceptor(UserProfileSerializer))
  @ApiOkResponse({
    description: 'Get user profile.',
    type: UserProfileSerializer,
  })
  @ApiBearerAuth()
  @ApiOperation({ operationId: 'me' })
  public async getUserProfile(@User() user): Promise<UserProfileSerializer> {
    return user;
  }
}
