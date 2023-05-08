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
import { IRecordOfAny, IGENjwt, IToken } from "../../../src/Models/schemas";

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

  @Get("jwt-generate")
  async jwtGenerate(): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: {
          message:
            "send token to jwt-decorate with token in body with post method",
          token: "toke",
        },
      },
    };
  }

  @Post("jwt-decorate")
  async jwtDecorate(@Body() requestBody: IToken): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: {
          message: "token is ok",
        },
      },
    };
  }

  @Security("jwt", ["token"])
  @Get("jwt-check")
  async jwtCheck(@Header("jwt") jwt: string): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: {
          message: "token is ok",
        },
      },
    };
  }
  @Get("/redis/{key}")
  async getRedis(@Path() key: string): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: "redis data",
      },
    };
  }
  @Post("redis")
  async PostRedis(@Body() requestBody: IRecordOfAny): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: { key: "key" },
      },
    };
  }

  @Post("rabbitmq")
  async rabbitmq(@Body() requestBody: IRecordOfAny): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: "your data send",
      },
    };
  }
}
