import { Response, Request, NextFunction } from "express";
import {
  BasicController,
  genRandomString,
  createDir,
} from "../../Features/Utilities";

import * as fs from "fs";

export class FileController extends BasicController {
  async file(req: Request, response: Response, next: NextFunction) {
    try {
      const { filename }: any = req.file;
      this.Response(response, {
        statusCode: "OK",
        payload: { filename },
      });
    } catch (errors) {}
  }

  async files(req: Request, response: Response, next: NextFunction) {
    try {
      let files: any = req.files;
      let filesname: any = files.map((file: any) => file.filename);
      this.Response(response, {
        statusCode: "OK",
        payload: { filesname },
      });
    } catch (errors) {}
  }

  async base64(request: Request, response: Response, next: NextFunction) {
    let fileName = `${genRandomString(16)}.png`;
    try {
      createDir("./files");
      const path = `./files/${fileName}`;
      const imagedate = request.body.file;
      const base64Date = imagedate.replace(/^data:([A-Za-z-+/]+);base64,/, "");
      fs.writeFileSync(path, base64Date, { encoding: "base64" });
      this.Response(response, {
        statusCode: "OK",
        payload: { fileName },
      });
    } catch (error) {
      this.Response(response, {
        statusCode: "InternalServerError",
        error: { errors: error },
      });
    }
  }
}
