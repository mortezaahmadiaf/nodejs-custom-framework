import { Response, Request, NextFunction } from "express";
import {
  jwtDecorator,
  jwtGenerator,
  ResponseHandler,
} from "../../Feature/Utilities";
export class TestController {
  add(req: Request, response: Response, next: NextFunction) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Post Api" },
    });
  }
  update(req: Request, response: Response, next: NextFunction) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Put Api" },
    });
  }
  delete(req: Request, response: Response, next: NextFunction) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Delete Api" },
    });
  }
  findOne(req: Request, response: Response, next: NextFunction) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Get By Id Api" },
    });
  }
  findAll(req: Request, response: Response, next: NextFunction) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Get All Api" },
    });
  }
  patch(req: Request, response: Response, next: NextFunction) {
    ResponseHandler(response, {
      statusCode: "OK",
      payload: { data: "Test Patch Api" },
    });
  }
  generateJWT(req: Request, response: Response, next: NextFunction) {
    const token = jwtGenerator({ message: "hello world!" });

    ResponseHandler(response, {
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
  decorateJWT(req: Request, response: Response, next: NextFunction) {
    const data = jwtDecorator(req.body.token);
    ResponseHandler(response, {
      statusCode: "OK",
      payload: {
        data,
      },
    });
  }
}
