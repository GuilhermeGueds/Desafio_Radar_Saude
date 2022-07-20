
import { Person } from "modules/persons/entities/Person";
import { IPersonRepository } from "modules/persons/repositories/IPersonRepository";


interface IRequest {
  person_id: string ;
}

class ListPersonByIdUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute({person_id }: IRequest): Promise<Person> {
    const person = await this.personRepository.findById(person_id);
    
    if (!person){
      throw new Error("User not exist !");
    }
    return person;
  }
}

export { ListPersonByIdUseCase as ListPersonUseCase };
