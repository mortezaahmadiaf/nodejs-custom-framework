import chalk from "chalk";
import { Request, Response, NextFunction } from "express";
export const logger = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.info(
    `\n Request ===> Method: ${request.method} ___ Route: ${request.originalUrl} \n `
  );
  const start = new Date().getTime();
  response.on("finish", () => {
    const elepsTime = new Date().getTime() - start;
    console.info(
      `\n Response ===> Method: ${request.method} ___ Route: ${
        request.originalUrl
      } ___ Status Code: ${
        response.statusCode >= 200 && response.statusCode < 300
          ? chalk.green(response.statusCode)
          : chalk.red(response.statusCode)
      } ___ Request Time: ${elepsTime}ms \n`
    );
  });
  next();
};
