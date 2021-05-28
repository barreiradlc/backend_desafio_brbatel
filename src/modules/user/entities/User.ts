import { BaseEntity } from "../../shared/entities/BaseEntity";
import { Column, Entity } from "typeorm";
import { Exclude } from "class-transformer";

@Entity('users')
class User extends BaseEntity {

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

}


export { User }