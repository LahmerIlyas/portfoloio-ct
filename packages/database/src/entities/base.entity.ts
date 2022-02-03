import {
  DbAwareUpdateDateColumn,
  DbAwareCreateDateColumn,
} from '../decorators';
import { BaseEntity as Entity, PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity extends Entity {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @DbAwareCreateDateColumn({
    type: 'timestamp with time zone',
    name: 'created_at',
  })
  public created_at: Date;

  @DbAwareUpdateDateColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
  })
  public updated_at: Date;
}
