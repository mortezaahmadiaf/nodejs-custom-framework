import { BaseRouter } from "../../Features/Utilities";
import { TestController } from "../../Controllers/v1";
import { NextFunction, Response, Request } from "express";
import { authJwt } from "../../Features/Middlewares";
import { AccessPolicy } from "../../Features/Policies";
class TestRoutes extends BaseRouter {
  constructor() {
    super(TestController);
    this.accessPolicy.get = authJwt;
    this.init();
  }

  init() {
    super.init();
    this.router
      .route("/jwt-generate")
      .get((req: Request, res: Response, next: NextFunction) => {
        this.generateJWT(req, res, next);
      });
    this.router
      .route("/jwt-decorate")
      .post((req: Request, res: Response, next: NextFunction) => {
        this.decorateJWT(req, res, next);
      });
  }

  private generateJWT = (req: Request, res: Response, next: NextFunction) => {
    this.controller.generateJWT(req, res, next);
  };
  private decorateJWT = (req: Request, res: Response, next: NextFunction) => {
    this.controller.decorateJWT(req, res, next);
  };
}

export const TestRouter = new TestRoutes().router;
