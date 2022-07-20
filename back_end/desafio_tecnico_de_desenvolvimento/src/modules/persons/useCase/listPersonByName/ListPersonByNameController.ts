import { Request, Response } from "express";
import { ListPersonByNameUseCase } from "./ListPersonByNameUseCase";




class ListPersonByNameController {
  constructor(private listPersonByNameUseCase: ListPersonByNameUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {person_name} = request.params;
   
    try{
      const person = await this.listPersonByNameUseCase.execute({person_name});
      
      return response.json(person);
    }catch (err){
      
        return response.status(404).json("User not Exists !");
    }
    
  }
}

export { ListPersonByNameController };