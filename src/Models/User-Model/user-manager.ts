import { UserModel } from "./user-model";
import { IUser, IUpdateUser, IUserI } from "../schemas";
import { genRandomString, encription } from "../../Features/Utilities";

export class UserManager {
  private userModel: UserModel = new UserModel();

  create = async (props: IUser): Promise<IUserI> => {
    try {
      const salt = genRandomString();
      const hashPass = encription(props.password, salt);
      const result = await this.userModel.create({
        ...props,
        password: hashPass,
        salt,
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  update = async (props: IUpdateUser): Promise<IUserI | undefined> => {
    try {
      const salt = genRandomString();
      const hashPass = encription(props.password, salt);

      const result = await this.userModel.update({
        ...props,
        password: hashPass,
        salt,
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  delete = async (id: string): Promise<number> => {
    try {
      const result = await this.userModel.delete(id);
      return result;
    } catch (error) {
      throw error;
    }
  };

  getById = async (id: string): Promise<IUserI | null> => {
    try {
      const result = await this.userModel.getById(id);
      return result;
    } catch (error) {
      throw error;
    }
  };

  getAll = async (): Promise<Array<IUserI> | null> => {
    try {
      const result = await this.userModel.getAll();
      return result;
    } catch (error) {
      throw error;
    }
  };

  patch = async (): Promise<any> => {};
}
