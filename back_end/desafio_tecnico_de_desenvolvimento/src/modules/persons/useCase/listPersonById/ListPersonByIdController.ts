import { Request, Response } from "express";
import { ListPersonUseCase } from "./ListPersonByIdUseCase";



class ListPersonController {
  constructor(private listPersonUseCase: ListPersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {person_id} = request.params;
   
    try{
      const person = await this.listPersonUseCase.execute({person_id});
      
      return response.json(person);
    }catch (err){
      
        return response.status(404).json("User not Exists !");
    }
    
  }
}

export { ListPersonController };
