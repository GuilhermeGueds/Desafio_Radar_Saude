import { v4 as uuidV4 } from "uuid";
import {Column, Entity, PrimaryColumn} from "typeorm"


@Entity("person")
class Person {
  
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthDate: string

  @Column()
  gender: string;

  @Column()
  phone: string


  

  constructor() {
    if (!this.id) {
      this.id =   uuidV4();
     
    }
  }
}

export { Person };