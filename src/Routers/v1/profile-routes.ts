import { BaseRouter } from "../../Features/Utilities";
import { ProfileController } from "../../Controllers/v1";
// import { NextFunction, Response, Request } from "express";
import { authJwt } from "../../Features/Middlewares";
import { AccessPolicy } from "../../Features/Policies";
class ProfileRoute extends BaseRouter {
  constructor() {
    super(ProfileController);
    this.init();
  }

  init() {
    let accessPolicy = new AccessPolicy();
    accessPolicy.get = authJwt;
    super.init(accessPolicy);
  }
}

export const ProfileRouter = new ProfileRoute().router;
