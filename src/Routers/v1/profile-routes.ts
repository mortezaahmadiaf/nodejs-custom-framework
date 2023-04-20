import { BaseRoutes } from "../../Features/Utilities";
import { ProfileController } from "../../Controllers/v1";
// import { NextFunction, Response, Request } from "express";
import { authJwt } from "../../Features/Middlewares";
import { AccessPolicy } from "../../Features/Policies";
class ProfileRoute extends BaseRoutes {
  constructor() {
    super(ProfileController);
    this.init();
  }

  init() {
    super.init();
  }
}

export const ProfileRouter = new ProfileRoute().router;
