import { Person } from "../entities/Person";

interface ICreatePersonDTO {
  name: string;
  email: string;
  birthDate: string
  gender: string;
  phone: string

}

interface IUpdatePersonDTO {
  name?: string;
  email?: string;
  birthDate?: string
  gender?: string;
  phone?: string
}

interface IPersonRepository {
  create({ name, email,birthDate,gender,phone }: ICreatePersonDTO): Promise<Person>;
  findByName(name: string): Promise<Person[]> ;
  findByEmail(email: string): Promise<Person> ;
  findById(id: string): Promise<Person>
  list(): Promise<Person[]>;
  update(id:string,{name, email,birthDate,gender,phone}: IUpdatePersonDTO):Promise<Person>;
  delete(name:string):Promise<void>;
 
}

export { IPersonRepository, ICreatePersonDTO, IUpdatePersonDTO };
