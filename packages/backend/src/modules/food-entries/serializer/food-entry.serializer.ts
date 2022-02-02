import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

@Exclude()
export class FoodEntrySerializer {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  food_name: string;

  @Expose()
  @ApiProperty()
  taken_at: string;

  @Expose()
  @ApiProperty()
  price: string;

  @Expose()
  @ApiProperty()
  calories_count: string;
}

@Exclude()
export class GetManyFoodEntriesSerializer {
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
  @Type(() => FoodEntrySerializer)
  @ApiProperty({ type: () => FoodEntrySerializer })
  data: FoodEntrySerializer[];
}
