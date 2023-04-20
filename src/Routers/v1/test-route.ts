import { BaseRoutes } from "../../Features/Utilities";
import { TestController } from "../../Controllers/v1";
import { NextFunction, Response, Request } from "express";
import { authJwt } from "../../Features/Middlewares";

class TestRoutes extends BaseRoutes {
  constructor() {
    super(TestController);

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
    this.router
      .route("/jwt-check")
      .get(authJwt, (req: Request, res: Response, next: NextFunction) => {
        this.checkJwt(req, res, next);
      });
  }

  private generateJWT = (req: Request, res: Response, next: NextFunction) => {
    this.controller.generateJWT(req, res, next);
  };
  private checkJwt = (req: Request, res: Response, next: NextFunction) => {
    this.controller.checkJwt(req, res, next);
  };
  private decorateJWT = (req: Request, res: Response, next: NextFunction) => {
    this.controller.decorateJWT(req, res, next);
  };
}

export const TestRouter = new TestRoutes().router;
