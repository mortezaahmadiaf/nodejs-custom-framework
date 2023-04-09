import { BaseRouter } from "../../Feature/Utilities";
import { TestController } from "../../Controller/v1";
import { NextFunction, Response, Request } from "express";
class TestRoutes extends BaseRouter {
  constructor() {
    super(TestController);
    this.init();
  }

  init() {
    super.init();

    this.router
      .route("jwt-generate")
      .post((req: Request, res: Response, next: NextFunction) => {
        this.generateJWT(req, res, next);
      });
    this.router
      .route("jwt-decorate")
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
