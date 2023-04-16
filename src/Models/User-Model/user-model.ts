import { User, ISaltUser } from "./user-schema";
import { Profile } from "../Profile-Model/profile-schema";
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
  getById = async (id: string) => {
    console.log(id);
    try {
      const result = await this.user.findOne({
        where: { id },
        // include: [{ model: Profile }],
      });
      console.log({ id, result });
      return result;
    } catch (error) {
      throw new Error(error as any); // return error;
    }
  };
  getAll = async () => {};
  patch = async () => {};
}
