import { User, ISaltUser } from "./user-schema";

export class UserModel {
  user = User;
  create = async (props: ISaltUser) => {
    try {
      const result = await this.user.create(props);
      return result;
    } catch (error) {
      throw new Error(error as any); // return error;
    }
  };
  update = async () => {};
  delete = async () => {};
  getById = async () => {};
  getAll = async () => {};
  patch = async () => {};
}
