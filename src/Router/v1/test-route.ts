import { BaseRouter } from "../../Feature/Utilities";
import { TestController } from "../../Controller/v1";
import { NextFunction, Response, Request } from "express";
import { authJwt } from "../../Feature/Middleware";
import { AccessPolicy } from "../../Feature/Policy";
class TestRoutes extends BaseRouter {
  constructor() {
    super(TestController);
    this.init();
  }

  init() {
    let accessPolicy = new AccessPolicy();
    super.init(accessPolicy);
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

    this.router
      .route("/jwt-check")
      .get(authJwt, (req: Request, res: Response, next: NextFunction) => {
        this.checkJWT(req, res, next);
      });
  }

  private generateJWT = (req: Request, res: Response, next: NextFunction) => {
    this.controller.generateJWT(req, res, next);
  };
  private decorateJWT = (req: Request, res: Response, next: NextFunction) => {
    this.controller.decorateJWT(req, res, next);
  };

  private checkJWT = (req: Request, res: Response, next: NextFunction) => {
    this.controller.checkJWT(req, res, next);
  };
}

export const TestRouter = new TestRoutes().router;
