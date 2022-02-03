import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
import { UniqueEmail } from '../../../decorators/unique-mail.decorator';

@Exclude()
export class RegisterDto {
  @Expose()
  @IsEmail()
  @UniqueEmail()
  @ApiProperty()
  email: string;

  @Expose()
  @IsString()
  @MinLength(4)
  @ApiProperty()
  password: string;

  @Expose()
  @ApiProperty()
  @IsOptional()
  first_name: string;

  @Expose()
  @ApiProperty()
  @IsOptional()
  last_name: string;
}
