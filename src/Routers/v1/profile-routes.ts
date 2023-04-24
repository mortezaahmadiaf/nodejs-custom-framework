import { BaseRoutes } from "../../Features/Utilities";
import { ProfileController } from "../../Controllers";

class ProfileRoute extends BaseRoutes {
  constructor() {
    super(ProfileController);
    this.init();
  }

  init() {
    super.init();
  }
}

export const ProfileRouter = new ProfileRoute().router;
