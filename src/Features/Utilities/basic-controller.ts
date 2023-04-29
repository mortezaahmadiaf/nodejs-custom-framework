import {
  IError,
  IPayload,
  IResponse,
  IResponseHandler,
  ResponseHandler,
} from "./respose-handler";
import { Response } from "express";
import { Redis } from "./redis";

export class BasicController extends Redis {
  Response = (res: Response, props: IResponseHandler) =>
    ResponseHandler(res, props);
}
