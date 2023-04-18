import { Request, Response, NextFunction } from "express";
export class ValidationPolicy {
  get = (request: Request, response: Response, nextFunction: NextFunction) => {
    nextFunction();
  };
  getById = (
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ) => {
    nextFunction();
  };
  post = (request: Request, response: Response, nextFunction: NextFunction) => {
    nextFunction();
  };
  put = (request: Request, response: Response, nextFunction: NextFunction) => {
    nextFunction();
  };
  delete = (
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ) => {
    nextFunction();
  };
  patch = (
    request: Request,
    response: Response,
    nextFunction: NextFunction
  ) => {
    nextFunction();
  };
}
