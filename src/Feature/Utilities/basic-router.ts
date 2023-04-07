import { Request, Response, Router, NextFunction } from "express";

export class BaseRouter {
  router: Router;
  controller: any;
  constructor(controller: any) {
    this.controller = new controller();
    this.router = Router();
  }

  init() {
    let urls = {
      get: "/",
      getById: "/id/:id",
      post: "/",
      put: "/",
      delete: "/",
    };

    this.router
      .route(urls.post)
      .post((req: Request, res: Response, next: NextFunction) => {
        this.add(req, res, next);
      });

    this.router
      .route(urls.put)
      .put((req: Request, res: Response, next: NextFunction) => {
        this.update(req, res, next);
      });

    this.router
      .route(urls.delete)
      .delete((req: Request, res: Response, next: NextFunction) => {
        this.delete(req, res, next);
      });

    this.router
      .route(urls.get)
      .get((req: Request, res: Response, next: NextFunction) => {
        this.findAll(req, res, next);
      });

    this.router
      .route(urls.getById)
      .get((req: Request, res: Response, next: NextFunction) => {
        this.findOne(req, res, next);
      });
  }
  private add(req: Request, res: Response, next: NextFunction) {
    this.controller.add(req, res, next);
  }
  private update(req: Request, res: Response, next: NextFunction) {
    this.controller.update(req, res, next);
  }
  private delete(req: Request, res: Response, next: NextFunction) {
    this.controller.delete(req, res, next);
  }
  private findOne(req: Request, res: Response, next: NextFunction) {
    this.controller.findOne(req, res, next);
  }
  private findAll(req: Request, res: Response, next: NextFunction) {
    this.controller.findAll(req, res, next);
  }
}