import {
  Body,
  Controller,
  Get,
  Path,
  Delete,
  Put,
  Post,
  Query,
  Route,
  SuccessResponse,
  Security,
  Response,
  Header,
} from "tsoa";

@Route("test")
export class Test extends Controller {
  @Get("/")
  public async getTest(): Promise<{ test: string }> {
    return { test: "findAll" };
  }
  @Get("id/{id}")
  public async getById(id: string): Promise<{ test: string }> {
    return { test: "findOne" };
  }

  @Post("/")
  public async testPost(): Promise<{ test: string }> {
    return { test: "add" };
  }
  @Put("/")
  public async testUpdate(): Promise<{ test: string }> {
    return { test: "update" };
  }
  @Delete("/")
  public async testdelete(): Promise<{ test: string }> {
    return { test: "delete" };
  }
  @Get("jwt")
  public async jwt(): Promise<{ token: string }> {
    return { token: "token" };
  }
  @Security("jwt", ["token"])
  @Get("check-jwt")
  public async checkJwt(
    @Header("jwt") authorization: string
  ): Promise<{ info: string }> {
    return { info: "token" };
  }
}
