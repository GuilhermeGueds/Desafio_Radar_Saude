import { Person } from "../../entities/Person";
import { IPersonRepository } from "../../repositories/IPersonRepository";


interface IRequest {
  name: string;
  email: string;
  birthDate: string
  gender: string;
  phone: string

}

class CreatePersonUseCase {
  constructor(private usersRepository: IPersonRepository) {}

  async execute({ email, name, birthDate, gender, phone }: IRequest): Promise<Person> {
    
    const personAlredyExists = await this.usersRepository.findByEmail(email);

    if (personAlredyExists){
      throw new Error("User alredy exist");
      
    }
      const person = await this.usersRepository.create({name, email, birthDate,gender,phone});
     
      return person;
      
  }
}

export { CreatePersonUseCase };
