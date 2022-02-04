import { MigrationInterface, QueryRunner } from 'typeorm';
import { seedDB } from './seed';

export class seed1643882625882 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await seedDB(queryRunner.connection);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
