import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsString, MinLength, IsOptional } from "class-validator";


@Exclude()
export class RegisterDto {
    @Expose()
    @IsEmail()
    @ApiProperty()
    email: string;

    @Expose()
    @IsString()
    @MinLength(8)
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