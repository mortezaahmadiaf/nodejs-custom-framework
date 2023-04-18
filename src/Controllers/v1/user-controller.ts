import { Response, Request, NextFunction } from "express";
import { BasicController } from "../../Features/Utilities";
import { UserManager } from "../../Models";
import { IUser } from "../../Models/schemas";
export class UserController extends BasicController {
  private userManager: UserManager = new UserManager();

  async add(req: Request, response: Response, next: NextFunction) {
    const data: IUser = req.body;
    try {
      const res = await this.userManager.create(data);
      this.Response(response, {
        statusCode: "Created",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async update(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.update();
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async delete(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.delete();
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async findOne(req: Request, response: Response, next: NextFunction) {
    const id = req.params.id;
    try {
      const res = await this.userManager.getById(id);
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async findAll(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.getAll();
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  async patch(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.userManager.patch();
      this.Response(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
}
