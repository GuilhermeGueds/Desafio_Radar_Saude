import { PersonRepository } from "../../repositories/implementation/PersonRepository";
import { ListPersonController } from "./ListPersonByIdController";
import { ListPersonUseCase } from "./ListPersonByIdUseCase";



export default(): ListPersonController => {
    const personRepository = new PersonRepository;
    const listPersonUseCase = new ListPersonUseCase(personRepository);
    const listPersonByIdController = new ListPersonController(listPersonUseCase);

    return listPersonByIdController;

};

   

