import { Response, Request, NextFunction } from "express";
import { ResponseHandler } from "../../Features/Utilities";
import { UserManager } from "../../Models";
import { IUser } from "../../Models/schemas";
export class UserController {
  private userManager: UserManager = new UserManager();

  async add(req: Request, response: Response, next: NextFunction) {
    const data: IUser = req.body;
    try {
      const res = await this.userManager.create(data);
      ResponseHandler(response, {
        statusCode: "Created",
        payload: { data: res },
      });
    } catch (error) {
      ResponseHandler(response, {
        statusCode: "BadRequest",
        payload: { data: error },
      });
    }
  }
  async update(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.update();
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async delete(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.delete();
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async findOne(req: Request, response: Response, next: NextFunction) {
    const id = req.params.id;
    try {
      const res = await this.userManager.getById(id);
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async findAll(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.getAll();
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async patch(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.patch();
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
}
