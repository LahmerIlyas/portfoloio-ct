import { UserEntity, FoodEntryEntity } from './../../entities';
import { Connection, Repository } from 'typeorm';
import { users } from './users';
import * as bcrypt from 'bcrypt';

export const seedDB = async (connection: Connection) => { 
    const usersRepository = connection.getRepository<UserEntity>('UserEntity');
    const foodEntriesRepository = connection.getRepository<FoodEntryEntity>('FoodEntryEntity');
    for (const user of users) {
        const { entries, ...data } = user;
        const entity = await usersRepository.save(data);
        await foodEntriesRepository.save((entries || []).map(entry => ({ ...entry, user_id: entity.id })));
    }
}
