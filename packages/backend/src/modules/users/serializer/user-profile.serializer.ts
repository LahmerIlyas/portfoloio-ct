import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserProfileSerializer {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  first_name: string;

  @Expose()
  @ApiProperty()
  last_name: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  user_calories_limit: number;

  @Expose()
  @ApiProperty()
  user_monthly_spend_limit: number;
}
