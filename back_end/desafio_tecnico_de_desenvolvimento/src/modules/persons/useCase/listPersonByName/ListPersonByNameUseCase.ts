
import { Person } from "modules/persons/entities/Person";
import { IPersonRepository } from "modules/persons/repositories/IPersonRepository";


interface IRequest {
  person_name: string ;
}

class ListPersonByNameUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute({person_name }: IRequest): Promise<Person[]> {
    const person = await this.personRepository.findByName(person_name);
    
    if (!person){
      throw new Error("User not exist !");
    }
    return person;
  }
}

export { ListPersonByNameUseCase };
