import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

export enum UserRole {
  USER = "user",
  ADMIN = "admin",
  SUPER_ADMIN = "super_admin"
}

@Entity('user')
export class UserEntity extends BaseEntity {

  @Column('varchar', { nullable: true, length: 30, name: 'first_name' })
  first_name: string;

  @Column('varchar', { nullable: true, length: 30, name: 'last_name' })
  last_name: string;

  @Column('varchar', { nullable: false, length: 30, name: 'email' })
  email: string;

  @Column('text', { nullable: false, name: 'hashed_password' })
  hashed_password: string;

  @Column('numeric', { default: 2100, name: 'user_calories_limit' })
  user_calories_limit: number;

  @Column('numeric', { default: 1000, name: 'user_monthly_spend_limit' })
  user_monthly_spend_limit: number;

  @Column({ type: "enum",enum: UserRole, default: UserRole.USER })
  role: UserRole;

}