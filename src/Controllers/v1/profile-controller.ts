import { Response, Request, NextFunction } from "express";
import { ResponseHandler } from "../../Features/Utilities";
import { ProfileManager } from "../../Models";
import { IProfile } from "../../Models/schemas";
export class ProfileController {
  private profileManager: ProfileManager = new ProfileManager();

  async add(req: Request, response: Response, next: NextFunction) {
    const data: IProfile = req.body;
    try {
      const res = await this.profileManager.create(data);
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
    const data: IProfile = req.body;

    try {
      const res = await this.profileManager.update(data);
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async delete(req: Request, response: Response, next: NextFunction) {
    const id: string = req.body.id;
    try {
      const res = await this.profileManager.delete(id);
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async findOne(req: Request, response: Response, next: NextFunction) {
    const id: string = req.params.id;

    try {
      const res = await this.profileManager.getById(id);
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async findAll(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.profileManager.getAll();
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
  async patch(req: Request, response: Response, next: NextFunction) {
    try {
      const res = await this.profileManager.patch();
      ResponseHandler(response, {
        statusCode: "OK",
        payload: { data: res },
      });
    } catch (error) {}
  }
}
