import { BaseRoutes } from "../../Features/Utilities";
import { UserController } from "../../Controllers";
import { authJwt, validationMw } from "app/Features/Middlewares";
import {
  UserUpdateValidator,
  UserValidator,
  IdValidator,
} from "app/Features/Validations";
import { AccessPolicy, ValidationPolicy } from "app/Features/Policies";
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
