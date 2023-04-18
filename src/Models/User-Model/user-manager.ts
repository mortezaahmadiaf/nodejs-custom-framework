import { UserModel } from "./user-model";
import { IUser, IUpdateUser } from "../schemas";
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
  update = async (props: IUpdateUser) => {
    try {
      const result = await this.userModel.update(props);
      return result;
    } catch (error) {
      throw new Error(error as any); // return error;
    }
  };
  delete = async (id: string) => {
    try {
      const result = await this.userModel.delete(id);
      return result;
    } catch (error) {
      throw new Error(error as any); // return error;
    }
  };
  getById = async (id: string) => {
    try {
      const result = await this.userModel.getById(id);
      return result;
    } catch (error) {
      throw new Error(error as any); // return error;
    }
  };
  getAll = async () => {
    try {
      const result = await this.userModel.getAll();
      return result;
    } catch (error) {
      throw new Error(error as any); // return error;
    }
  };
  patch = async () => {};
}
