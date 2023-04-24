import { Request, Response, Router, NextFunction } from "express";
import { AccessPolicy, ValidationPolicy } from "../Policies";

export class BaseRoutes {
  router: Router;
  controller: any;

  constructor(controller: any) {
    this.controller = new controller();
    this.router = Router();

    this.init();
  }

  init(
    accessPolicy: AccessPolicy = new AccessPolicy(),
    validationPolicy: ValidationPolicy = new ValidationPolicy()
  ) {
    let urls = {
      get: "/",
      getById: "/id/:id",
      post: "/",
      put: "/",
      delete: "/",
      patch: "/",
    };

    this.router
      .route(urls.post)
      .post(
        accessPolicy.post,
        validationPolicy.post,
        (req: Request, res: Response, next: NextFunction) => {
          this.add(req, res, next);
        }
      );

    this.router.route(urls.put).put(
      accessPolicy.put,
      validationPolicy.put,

      (req: Request, res: Response, next: NextFunction) => {
        this.update(req, res, next);
      }
    );

    this.router
      .route(urls.delete)
      .delete(
        accessPolicy.delete,
        validationPolicy.delete,
        (req: Request, res: Response, next: NextFunction) => {
          this.delete(req, res, next);
        }
      );

    this.router.route(urls.get).get(
      accessPolicy.get,
      validationPolicy.get,

      (req: Request, res: Response, next: NextFunction) => {
        this.findAll(req, res, next);
      }
    );

    this.router.route(urls.getById).get(
      accessPolicy.getById,
      validationPolicy.getById,

      (req: Request, res: Response, next: NextFunction) => {
        this.findOne(req, res, next);
      }
    );

    this.router.route(urls.patch).patch(
      accessPolicy.patch,
      validationPolicy.patch,

      (req: Request, res: Response, next: NextFunction) => {
        this.patch(req, res, next);
      }
    );
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
  private patch(req: Request, res: Response, next: NextFunction) {
    this.controller.patch(req, res, next);
  }
}
