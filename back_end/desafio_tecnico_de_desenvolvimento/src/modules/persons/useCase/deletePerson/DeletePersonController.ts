import { Request, Response } from "express";
import { DeletePersonUseCase } from "./DeletePersonUseCase";



class DeletePersonController {
  constructor(private deletePersonUseCase: DeletePersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {person_id} = request.params;
   
    try{
      const person = await this.deletePersonUseCase.execute({person_id});
      
      return response.json(person);
    }catch (err){
      
        return response.status(404).json("User not Exists !");
    }
    
  }
}

export { DeletePersonController };
