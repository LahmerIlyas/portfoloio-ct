import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class DailyCalorieSerializer {
  @Expose()
  @ApiProperty()
  user_id: number;

  @Expose()
  @ApiProperty()
  date: string;

  @Expose()
  @ApiProperty()
  calories_count: number;
}

@Exclude()
export class GetManyDailyCalorieSerializer {
  @Expose()
  @ApiProperty()
  count: number;

  @Expose()
  @ApiProperty()
  total: number;

  @Expose()
  @ApiProperty()
  page: number;

  @Expose()
  @ApiProperty()
  pageCount: number;

  @Expose()
  @Type(() => DailyCalorieSerializer)
  @ApiProperty({ type: () => DailyCalorieSerializer })
  data: DailyCalorieSerializer[];
}
