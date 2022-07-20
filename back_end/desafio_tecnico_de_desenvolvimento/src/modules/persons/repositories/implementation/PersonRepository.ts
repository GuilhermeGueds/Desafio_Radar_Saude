import { getRepository, Repository } from "typeorm";
import { Person } from "../../entities/Person"
import { ICreatePersonDTO, IPersonRepository, IUpdatePersonDTO } from "../IPersonRepository";


class PersonRepository implements IPersonRepository {
  
  private repository: Repository<Person>;

   constructor() {
    this.repository = getRepository(Person);
  }

  async create({ name, email,birthDate,gender,phone }: ICreatePersonDTO): Promise<Person> {
    
    const person = this.repository.create({
      name,
      email,
      birthDate,
      gender,
      phone,
    });
      
    await this.repository.save(person);
    return person;
  }

  async findById(id: string): Promise<Person> {
    const person = await this.repository.findOne(id);
    return person;
  }

  async findByName(name: string): Promise<Person[]> {
    const person = await this.repository.find({name});
    return person;
  }

  async findByEmail(email: string): Promise<Person> {
    const person = await this.repository.findOne({email});
    return person;
  }


  async list(): Promise<Person[]> {
    const persons = await this.repository.find();
    return persons;
  }

  async delete(id: string): Promise<void> {   
    
    await this.repository.delete(id)
  
  }

  async update(id: string,{name, email,birthDate,gender,phone}:IUpdatePersonDTO): Promise<Person> {
    const person = await this.repository.findOne(id);

    person.name = name ? name : person.name;
    person.email = email ? email : person.email;
    person.birthDate = birthDate ? birthDate : person.birthDate; 
    person.gender = gender ? gender : person.gender
    person.phone = phone ? phone : person.phone;
    await this.repository.save(person);
    return person;
  }
}

export { PersonRepository };
