import { BaseRoutes } from "../../Features/Utilities";
import { UserController } from "../../Controllers";
class UserRoute extends BaseRoutes {
  constructor() {
    super(UserController);
    this.init();
  }

  init() {
    super.init();
  }
}

export const UserRouter = new UserRoute().router;
