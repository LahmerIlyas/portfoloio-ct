import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class MonthlySpendingSerializer {
  @Expose()
  @ApiProperty()
  user_id: number;

  @Expose()
  @ApiProperty()
  month: string;

  @Expose()
  @ApiProperty()
  spending: number;
}

@Exclude()
export class GetManyMonthlySpendingSerializer {
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
  @Type(() => MonthlySpendingSerializer)
  @ApiProperty({ type: () => MonthlySpendingSerializer })
  data: MonthlySpendingSerializer[];
}
