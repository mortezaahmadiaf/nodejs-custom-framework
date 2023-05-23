import { BaseRoutes } from "../../Features/Utilities";
import { FileController } from "../../Controllers";
import { Request, Response, NextFunction } from "express";
import { multer_file, multer_files } from "../../Features/Middlewares";

class FileRouts extends BaseRoutes {
  constructor() {
    super(FileController);
    this.init();
  }

  init() {
    this.router
      .route("/file")
      .post(
        multer_file,
        (request: Request, response: Response, next: NextFunction) => {
          this.file(request, response, next);
        }
      );
    this.router
      .route("/files")
      .post(
        multer_files,
        (request: Request, response: Response, next: NextFunction) => {
          this.files(request, response, next);
        }
      );
    this.router
      .route("/base64")
      .post((request: Request, response: Response, next: NextFunction) => {
        this.base64(request, response, next);
      });
  }
  private file(request: Request, response: Response, next: NextFunction) {
    this.controller.file(request, response, next);
  }
  private files(request: Request, response: Response, next: NextFunction) {
    this.controller.files(request, response, next);
  }
  private base64(request: Request, response: Response, next: NextFunction) {
    this.controller.base64(request, response, next);
  }
}

export const FileRouter = new FileRouts().router;
