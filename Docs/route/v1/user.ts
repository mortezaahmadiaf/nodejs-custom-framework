import { IUser, IUpdateUser, IUserI } from "../../../src/Models/schemas";
import {
  Body,
  Controller,
  Get,
  Path,
  Delete,
  Put,
  Post,
  Query,
  Patch,
  Route,
  SuccessResponse,
  Security,
  Response,
  Header,
} from "tsoa";

@Route("user")
export class UserManager extends Controller {
  @Get("/")
  async getAll(): Promise<Array<IUserI> | null> {
    return [{ id: "", username: "" }];
  }

  @Get("id/{id}")
  async getById(id: string): Promise<IUserI> {
    return { id: "", username: "" };
  }

  @Post("/")
  async create(): Promise<IUserI> {
    return { id: "", username: "" };
  }
  // props: IUpdateUser
  @Put("/")
  async update(): Promise<IUserI> {
    return { id: "", username: "" };
  }
  // id: string
  @Delete("/")
  async delete(): Promise<string> {
    return "ok";
  }

  @Patch("/")
  async patch(): Promise<any> {}
}
