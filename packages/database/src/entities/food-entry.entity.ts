import { UserEntity } from './user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('food_entry')
export class FoodEntryEntity extends BaseEntity {
  @Column('text', { nullable: false, name: 'food_name' })
  food_name: string;

  @Column('timestamp with time zone', { nullable: false, name: 'taken_at' })
  taken_at: string;

  @Column('numeric', { nullable: false, name: 'calories_count' })
  calories_count: number;

  @Column('numeric', { nullable: false, name: 'price' })
  price: number;

  @ManyToOne(type => UserEntity, user => user.entries, { nullable: false, })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({name: 'user_id', nullable: false})
  user_id: number;

}