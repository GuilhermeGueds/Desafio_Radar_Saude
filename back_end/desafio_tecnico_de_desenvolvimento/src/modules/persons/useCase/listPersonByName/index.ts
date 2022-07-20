import { PersonRepository } from "../../repositories/implementation/PersonRepository";
import { ListPersonByNameController } from "./ListPersonByNameController";
import { ListPersonByNameUseCase } from "./ListPersonByNameUseCase";



export default(): ListPersonByNameController => {
    const personRepository = new PersonRepository;
    const listPersonbyNameUseCase = new ListPersonByNameUseCase(personRepository);
    const listPersonByNameController = new ListPersonByNameController(listPersonbyNameUseCase);

    return listPersonByNameController;

};
