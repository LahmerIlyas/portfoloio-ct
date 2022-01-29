import { Exclude, Expose } from "class-transformer";

@Exclude()
export class AccessTokenSerializer{
    @Expose()
    access_token: string;
}