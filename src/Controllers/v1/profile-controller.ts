import { Response, Request, NextFunction } from "express";
import { BasicController } from "../../Features/Utilities";
import { ProfileManager } from "../../Models";
import { IProfile, IUpdateProfile } from "../../Models/schemas";
export class ProfileController extends BasicController {
  private profileManager: ProfileManager = new ProfileManager();

  async add(req: Request, response: Response, next: NextFunction) {
    const data: IProfile = req.body;
    try {
      const res = await this.profileManager.create(data);
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
    const data: IUpdateProfile = req.body;

    try {
      const res = await this.profileManager.update(data);
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
    const id: string = req.body.id;
    try {
      const res = await this.profileManager.delete(id);
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
    const id: string = req.params.id;

    try {
      const res = await this.profileManager.getById(id);
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
      const res = await this.profileManager.getAll();
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
      const res = await this.profileManager.patch();
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
