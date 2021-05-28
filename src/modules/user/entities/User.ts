import { BaseEntity } from "../../shared/entities/BaseEntity";
import { Column, Entity } from "typeorm";

@Entity('users')
class User extends BaseEntity {

  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

}


export { User }