

import { IPersonRepository } from "modules/persons/repositories/IPersonRepository";


interface IRequest {
  person_id: string ;
}

class DeletePersonUseCase {
  constructor(private personRepository: IPersonRepository) {}

  async execute({person_id }: IRequest): Promise<void> {
    const person = await this.personRepository.findById(person_id);
    
    if (!person){
      throw new Error("User not exist !");
    }
    this.personRepository.delete(person_id);
  }
}

export { DeletePersonUseCase };
