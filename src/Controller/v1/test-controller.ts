import { Response, Request, NextFunction } from "express";
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
}
