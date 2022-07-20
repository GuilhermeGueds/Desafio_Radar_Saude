
import { Person } from "modules/persons/entities/Person";
import { IPersonRepository } from "modules/persons/repositories/IPersonRepository";


interface IRequest {
  person_email: string ;
}

class ListPersonByEmailUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute({person_email }: IRequest): Promise<Person> {
    const person = await this.personRepository.findByEmail(person_email);
    
    if (!person){
      throw new Error("User not exist !");
    }
    return person;
  }
}

export { ListPersonByEmailUseCase };
