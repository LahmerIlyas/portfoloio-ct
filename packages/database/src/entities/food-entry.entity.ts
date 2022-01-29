import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('food_entry')
export class FoodEntryEntity extends BaseEntity {
  @Column('text', { nullable: false, name: 'food_name' })
  food_name: string;

  @Column('timestamp with time zone', { nullable: false, name: 'taken_at' })
  taken_at: string;

  @Column('numeric', { nullable: false, name: 'calories_count' })
  calories_count: number;

}