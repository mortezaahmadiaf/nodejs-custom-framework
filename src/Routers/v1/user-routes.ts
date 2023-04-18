import { BaseRouter } from "../../Features/Utilities";
import { UserController } from "../../Controllers/v1";
class UserRoute extends BaseRouter {
  constructor() {
    super(UserController);
    this.init();
  }

  init() {
    super.init();
  }
}

export const UserRouter = new UserRoute().router;
