import { UserEntity, UserRole } from './../../entities/user.entity';
export const users = [
    {
        email: 'ilyaslahmer93@gmail.com',
        first_name: 'lahmer',
        last_name: 'ilyas',
        role: UserRole.USER,
        hashed_password: 'teafefeafead',
        entries: [
            {
                calories_count: 100,
                food_name: 'salade',
                taken_at: new Date().toISOString(),
            },
        ]
    },
    {
        email: 'admin@gmail.com',
        first_name: 'admin',
        last_name: 'admin',
        role: UserRole.ADMIN,
        hashed_password: 'teafefeafead'
    },
    {
        email: 'super_admin@gmail.com',
        first_name: 'super_admin',
        last_name: 'super_admin',
        role: UserRole.SUPER_ADMIN,
        hashed_password: 'teafefeafead'
    },
] as UserEntity[];