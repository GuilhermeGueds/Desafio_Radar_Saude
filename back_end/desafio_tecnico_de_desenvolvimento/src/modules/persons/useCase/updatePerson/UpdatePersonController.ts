import { Request, Response } from "express";
import { UpdatePersonUseCase } from "./UpdatePersonUseCase";




class UpdatePersonController {
  constructor(private updatePersonUseCase: UpdatePersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {person_id} = request.params;
    const {name, email, birthDate, gender, phone} = request.body;
    try{
      const person = await this.updatePersonUseCase.execute({person_id,name,email,birthDate, gender, phone});
      
      return response.json(person);
    }catch (err){
      
        return response.status(404).json("User not Exists !");
    }
    
  }
}

export { UpdatePersonController };