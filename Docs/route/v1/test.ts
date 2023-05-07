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
interface IGENjwt {
  statusCode: string;
  payload?: {
    data?:
      | any
      | {
          token?: string;
          message?: string;
        };
  };
}
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
  // @Get("jwt")
  // public async jwt(): Promise<{ token: string }> {
  //   return { token: "token" };
  // }
  // @Security("jwt", ["token"])
  // @Get("check-jwt")
  // public async checkJwt(
  //   @Header("jwt") authorization: string
  // ): Promise<{ info: string }> {
  //   return { info: "token" };
  // }
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
  async jwtDecorate(): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: {
          message: "token is ok",
        },
      },
    };
  }

  @Get("jwt-check")
  async jwtCheck(): Promise<IGENjwt> {
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
  async getRedis(): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: "redis data",
      },
    };
  }
  @Post("redis")
  async PostRedis(): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: { key: "key" },
      },
    };
  }

  @Post("rabbitmq")
  async rabbitmq(): Promise<IGENjwt> {
    return {
      statusCode: "OK",
      payload: {
        data: "your data send",
      },
    };
  }
}
