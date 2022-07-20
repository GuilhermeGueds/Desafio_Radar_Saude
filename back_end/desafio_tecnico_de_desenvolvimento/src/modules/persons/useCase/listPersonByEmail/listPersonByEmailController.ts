import { Request, Response } from "express";
import { ListPersonByEmailUseCase } from "./listPersonByEmailUseCase";





class ListPersonByEmailController {
  constructor(private listPersonByEmailUseCase: ListPersonByEmailUseCase ){};

  async handle(request: Request, response: Response): Promise<Response> {
    const {person_email} = request.params;
   
    try{
      const person = await this.listPersonByEmailUseCase.execute({person_email});
      
      return response.json(person);
    }catch (err){
      
        return response.status(404).json("User not Exists !");
    }
    
  }
}

export { ListPersonByEmailController };