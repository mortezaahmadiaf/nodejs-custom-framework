import { Response, Request, NextFunction } from "express";
import {
  jwtDecorator,
  jwtGenerator,
  BasicController,
  genRandomString,
  RabbitMQSend,
} from "../../Features/Utilities";
export class TestController extends BasicController {
  add(req: Request, response: Response, next: NextFunction) {
    this.Response(response, {
      statusCode: "OK",
      payload: { data: "Test Post Api" },
    });
  }
  update(req: Request, response: Response, next: NextFunction) {
    this.Response(response, {
      statusCode: "OK",
      payload: { data: "Test Put Api" },
    });
  }
  delete(req: Request, response: Response, next: NextFunction) {
    this.Response(response, {
      statusCode: "OK",
      payload: { data: "Test Delete Api" },
    });
  }
  findOne(req: Request, response: Response, next: NextFunction) {
    this.Response(response, {
      statusCode: "OK",
      payload: { data: "Test Get By Id Api" },
    });
  }
  async findAll(req: Request, response: Response, next: NextFunction) {
    this.Response(response, {
      statusCode: "OK",
      payload: { data: "Test Get All Api" },
    });
  }
  patch(req: Request, response: Response, next: NextFunction) {
    this.Response(response, {
      statusCode: "OK",
      payload: { data: "Test Patch Api" },
    });
  }
  generateJWT(req: Request, response: Response, next: NextFunction) {
    const token = jwtGenerator({ message: "hello world!" });

    this.Response(response, {
      statusCode: "OK",
      payload: {
        data: {
          token,
          message:
            "send token to jwt-decorate with token in body with post method",
        },
      },
    });
  }
  async decorateJWT(req: Request, response: Response, next: NextFunction) {
    try {
      const data = await jwtDecorator(req.body.token);
      this.Response(response, {
        statusCode: "OK",
        payload: {
          data,
        },
      });
    } catch (errors) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors },
      });
    }
  }
  checkJwt(req: Request, response: Response, next: NextFunction) {
    this.Response(response, {
      statusCode: "OK",
      payload: {
        message: "JWT is Ok",
      },
    });
  }

  async redisGetItem(req: Request, response: Response, next: NextFunction) {
    const { key } = req.params;
    try {
      const value = await this.redisGet(key);
      this.Response(response, { statusCode: "OK", payload: { data: value } });
    } catch (error) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors: error },
      });
    }
  }
  async redisSetItem(req: Request, response: Response, next: NextFunction) {
    const props = req.body;
    try {
      const key = genRandomString();
      await this.redisSet(key, props);
      this.Response(response, { statusCode: "OK", payload: { data: { key } } });
    } catch (error) {
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors: error },
      });
    }
  }

  async rabbitmq(req: Request, response: Response, next: NextFunction) {
    const props = req.body;
    const rabbit = new RabbitMQSend();
    try {
      const res = await rabbit.sendTest(JSON.stringify(props));
      this.Response(response, { statusCode: "OK", payload: { data: res } });
    } catch (error) {
      console.log(error);
      this.Response(response, {
        statusCode: "BadRequest",
        error: { errors: error },
      });
    }
  }
}
