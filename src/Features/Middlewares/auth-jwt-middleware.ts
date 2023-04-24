import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ResponseHandler, jwtDecorator } from "../Utilities";
// a middleware to check jsonwebtoken
export const authJwt = async (
  request: any,
  response: Response,
  Next: NextFunction
) => {
  // take jwt from request hesder
  const jwtToken = request.header("jwt");
  // if token not exist
  if (!jwtToken)
    // send access denied
    return ResponseHandler(response, {
      statusCode: "Unauthorized",
      error: { errorMessage: "Unauthorized User" },
    });
  else
    try {
      // check decript jwt by JWT_TOKEN_SECURE_STRING
      const verified = await jwtDecorator(jwtToken);
      //if   decript jwt by JWT_TOKEN_SECURE_STRING dont have problem add userId to request header
      request.validJWT = verified;
      // call next
      Next();
    } catch (error) {
      //if   decript jwt by JWT_TOKEN_SECURE_STRING have problem send invalid user to client
      ResponseHandler(response, {
        statusCode: "Unauthorized",
        error: { errorMessage: "Unauthorized User", error },
      });
    }
};
