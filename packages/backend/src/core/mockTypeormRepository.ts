import { getRepositoryToken } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { Connection } from 'typeorm';


export const mockTypeormRepository = (entity: EntityClassOrSchema, connection: Connection) => {
    return {
        provide: getRepositoryToken(entity),
        useValue: connection.getRepository(entity),
    }
}