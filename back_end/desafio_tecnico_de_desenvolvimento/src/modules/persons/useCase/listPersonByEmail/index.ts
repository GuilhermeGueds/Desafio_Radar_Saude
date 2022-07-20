import { PersonRepository } from "../../repositories/implementation/PersonRepository";
import { ListPersonByEmailController } from "./listPersonByEmailController";
import { ListPersonByEmailUseCase } from "./listPersonByEmailUseCase";



export default(): ListPersonByEmailController => {
    const personRepository = new PersonRepository;
    const listPersonbyEmailUseCase = new ListPersonByEmailUseCase(personRepository);
    const listPersonByEmailController = new ListPersonByEmailController(listPersonbyEmailUseCase);

    return listPersonByEmailController;

};
