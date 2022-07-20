import { Response, Request } from "express";

import { CreatePersonUseCase } from "./CreatePersonUseCase";

class CreatePersonController {
  constructor(private createPersonUseCase: CreatePersonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, name, birthDate, gender, phone } = request.body;

    try{
      const newPerson = await this.createPersonUseCase.execute({email, name, birthDate, gender, phone});
      
      return response.status(201).json(newPerson);
    }catch (err){
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreatePersonController };
