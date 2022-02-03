import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AccessTokenSerializer {
  @Expose()
  @ApiProperty()
  access_token: string;
}
