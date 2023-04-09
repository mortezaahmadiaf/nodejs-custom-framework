import { Response, Request, NextFunction } from "express";
import { jwtDecorator, jwtGenerator } from "../../Feature/Utilities";
export class TestController {
  add(req: Request, response: Response, next: NextFunction) {
    response.send("test post ");
  }
  update(req: Request, response: Response, next: NextFunction) {
    response.send("test put ");
  }
  delete(req: Request, response: Response, next: NextFunction) {
    response.send("test delete ");
  }
  findOne(req: Request, response: Response, next: NextFunction) {
    response.send("test get ");
  }
  findAll(req: Request, response: Response, next: NextFunction) {
    response.send("test getAll ");
  }
  patch(req: Request, response: Response, next: NextFunction) {
    response.send("test patch ");
  }
  generateJWT(req: Request, response: Response, next: NextFunction) {
    response.send("test patch ");
  }
  decorateJWT(req: Request, response: Response, next: NextFunction) {
    response.send("test patch ");
  }
}
