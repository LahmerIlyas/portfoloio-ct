import { UserEntity, UserRole } from './../../entities/user.entity';
import * as bcrypt from 'bcrypt';


function generateRandomHistory() {
    const entries = [];

    for (let i = 1; i <= 30; i++){
        entries.push({
                calories_count: 100,
                food_name: 'salade',
                taken_at: `2022-01-${i} 06:00:01+00`,
        })
    }
    console.log(entries)
    return entries;
}

export const users = [
    {
        email: 'ilyaslahmer93@gmail.com',
        first_name: 'lahmer',
        last_name: 'ilyas',
        role: UserRole.USER,
        hashed_password: bcrypt.hashSync('123456', 10),
        entries: generateRandomHistory()
    },
    {
        email: 'admin@gmail.com',
        first_name: 'admin',
        last_name: 'admin',
        role: UserRole.ADMIN,
        hashed_password: bcrypt.hashSync('123456', 10)
    },
    {
        email: 'super_admin@gmail.com',
        first_name: 'super_admin',
        last_name: 'super_admin',
        role: UserRole.SUPER_ADMIN,
        hashed_password: bcrypt.hashSync('123456', 10)
    },
] as UserEntity[];