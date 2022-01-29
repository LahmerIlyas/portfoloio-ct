import { Exclude, Expose } from "class-transformer";

@Exclude()
export class UserProfileSerializer {
    @Expose()
    id: number;

    @Expose()
    first_name: string;

    @Expose()
    last_name: string;

    @Expose()
    email: string;

    @Expose()
    user_calories_limit: number;

    @Expose()
    user_monthly_spend_limit: number;
}