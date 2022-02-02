import { seedDB } from './seed/index';
import {MigrationInterface, QueryRunner} from "typeorm";

export class seed1643834790257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await seedDB(queryRunner.connection);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
