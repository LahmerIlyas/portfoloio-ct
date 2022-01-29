import {
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity as Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export abstract class BaseEntity extends Entity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @CreateDateColumn({ type: 'timestamp with time zone', name: 'created_at' })
  public created_at: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone', name: 'updated_at' })
  public updated_at: Date;
}