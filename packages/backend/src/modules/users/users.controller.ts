import { JwtAuthGuard } from './../../guards/jwt.auth-guard';
import { LoginDto } from './dto/login.dto';
import { Body, Controller, Get, Inject, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { LocalAuthGuard } from 'src/guards/local.auth-guard';

@Controller('users')
export class UsersController {
    @Inject(UsersService)
    public userService: UsersService;

    @Post('login')
    @UseGuards(LocalAuthGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    public async login(@Body() input: LoginDto) {
        return this.userService.generateToken(0);
    }

    @Post('register')
    @UsePipes(new ValidationPipe({ transform: true }))
    public async register(@Body() input: RegisterDto) {
        return await this.userService.createUser(input);
    }

    @Get('me')
    @UseGuards(JwtAuthGuard)
    public async getUserProfile() {

    }
}