import { UserModel } from "./user-model";
import { IUser } from "../schemas";
import { genRandomString, encription } from "../../Features/Utilities";
export class UserManager {
  private userModel: UserModel = new UserModel();
  create = async (props: IUser) => {
    const salt = genRandomString();
    const hashPass = encription(props.password, salt);
    try {
      const result = await this.userModel.create({
        ...props,
        password: hashPass,
        salt,
      });
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
