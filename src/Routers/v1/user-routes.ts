import { BaseRouter } from "../../Features/Utilities";
import { UserController } from "../../Controllers/v1";
// import { NextFunction, Response, Request } from "express";
import { authJwt } from "../../Features/Middlewares";
import { AccessPolicy } from "../../Features/Policies";
class UserRoute extends BaseRouter {
  constructor() {
    super(UserController);
    this.init();
  }

  init() {
    let accessPolicy = new AccessPolicy();
    accessPolicy;
    super.init(accessPolicy);
  }
}

export const UserRouter = new UserRoute().router;
