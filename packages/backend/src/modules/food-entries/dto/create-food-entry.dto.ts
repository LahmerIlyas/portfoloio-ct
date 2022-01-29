import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsString, MinLength, IsDateString, IsNumber, IsPositive } from "class-validator";

@Exclude()
export class CreateFoodEntryDto {
    @Expose()
    @IsString()
    @MinLength(1)
    @ApiProperty()
    food_name: string;

    @Expose()
    @IsDateString()
    @ApiProperty()
    taken_at: string;

    @Expose()
    @IsNumber()
    @IsPositive()
    @ApiProperty()
    calories_count: number;

    @Expose()
    @IsNumber()
    @ApiProperty()
    user_id: number;
}