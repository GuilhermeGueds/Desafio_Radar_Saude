import { Person } from "modules/persons/entities/Person";
import { IPersonRepository } from "modules/persons/repositories/IPersonRepository";


interface IRequest {
    person_id: string ;
    name?: string;
    email?: string;
    birthDate?: string
    gender?: string;
    phone?: string
}

class UpdatePersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute({person_id,name,email,birthDate,gender,phone }: IRequest): Promise<Person> {
    const person = await this.personRepository.findById(person_id);
    
    if (!person){
      throw new Error("User not exist !");
    }
    
    const person2 = await this.personRepository.update(person_id,{name,email,birthDate,gender,phone})
    
    return person2;
  }
}

export { UpdatePersonUseCase };
