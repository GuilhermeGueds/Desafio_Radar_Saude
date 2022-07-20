import { Router } from "express";
import deletePersonController from "../modules/persons/useCase/deletePerson";
import  createPersonController  from "../modules/persons/useCase/createPerson";
import  listPersonByIdController  from "../modules/persons/useCase/listPersonById";
import updatePersonController from "../modules/persons/useCase/updatePerson"
import listPersonByNameController  from "../modules/persons/useCase/listPersonByName";
import listPersonByEmailController from"../modules/persons/useCase/listPersonByEmail";



const personsRoutes = Router();

personsRoutes.post("/", (request, response) =>
  createPersonController().handle(request, response)
);

personsRoutes.get("/:person_id", (request, response) =>
  listPersonByIdController().handle(request, response)
  );

  personsRoutes.get("/byName/:person_name", (request, response) =>
  listPersonByNameController().handle(request, response)
  );

  personsRoutes.get("/byEmail/:person_email", (request, response) =>
  listPersonByEmailController().handle(request, response)
  );

  personsRoutes.delete("/:person_id", (request, response) =>
  deletePersonController().handle(request, response)
  );

  personsRoutes.put("/:person_id", (request, response) =>
  updatePersonController().handle(request, response)
  );


export { personsRoutes };
