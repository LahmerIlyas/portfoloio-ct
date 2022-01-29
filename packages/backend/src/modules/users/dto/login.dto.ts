import { ApiProperty } from "@nestjs/swagger";
import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";


@Exclude()
export class LoginDto {
    @Expose()
    @IsEmail()
    @ApiProperty()
    email: string;

    @Expose()
    @IsString()
    @MinLength(4)
    @ApiProperty()
    password: string;
}