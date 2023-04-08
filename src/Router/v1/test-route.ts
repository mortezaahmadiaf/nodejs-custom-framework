import { BaseRouter } from "../../Feature/Utilities";
import { TestController } from "../../Controller/v1";
class TestRoutes extends BaseRouter {
  constructor() {
    super(TestController);
    this.init();
  }

  init() {
    super.init();
  }
}

export const TestRouter = new TestRoutes().router;
