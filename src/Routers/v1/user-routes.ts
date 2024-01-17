import { BaseRoutes } from "../../Features/Utilities";
import { UserController } from "../../Controllers";
import { authJwt, validationMw } from "../../Features/Middlewares";
import {
  UserUpdateValidator,
  UserValidator,
  IdValidator,
} from "../..//Features/Validations";
import { AccessPolicy, ValidationPolicy } from "../../Features/Policies";
class UserRoute extends BaseRoutes {
  constructor() {
    super(UserController);
    this.init();
  }

  init() {
    const accessPolicy: AccessPolicy = new AccessPolicy();
    accessPolicy.post = authJwt;
    accessPolicy.put = authJwt;
    accessPolicy.get = authJwt;
    accessPolicy.getById = authJwt;
    accessPolicy.delete = authJwt;
    accessPolicy.patch = authJwt;
    const validationPolicy: ValidationPolicy = new ValidationPolicy();
    validationPolicy.post = validationMw(UserValidator);
    validationPolicy.put = validationMw(UserUpdateValidator);
    validationPolicy.delete = validationMw(IdValidator);
    super.init(accessPolicy, validationPolicy);
  }
}

export const UserRouter = new UserRoute().router;
