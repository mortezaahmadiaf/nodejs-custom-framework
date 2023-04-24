import {
  IError,
  IPayload,
  IResponse,
  IResponseHandler,
  ResponseHandler,
} from "./respose-handler";
import { Response } from "express";

export class BasicController {
  Response = (res: Response, props: IResponseHandler) =>
    ResponseHandler(res, props);
}
