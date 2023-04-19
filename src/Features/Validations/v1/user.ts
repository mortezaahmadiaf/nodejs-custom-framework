import { IsUUID, Length } from "class-validator";
import { Validation } from "../../Utilities";
import { IUser, IUpdateUser } from "../../../Models/schemas";
class UserValidator implements IUser {
  @Length(10, 20)
  username!: string;

  @Length(4, 20)
  password!: string;
}

class UserUpdateValidator implements IUpdateUser {
  @Length(10, 20)
  username!: string;

  @Length(4, 20)
  password!: string;

  @IsUUID("4")
  id!: string;
}

export class UserValidation extends Validation {
  constructor() {
    super();
  }
  async create(props: IUser) {
    try {
      const user = new UserValidator();
      user.password = props.password;
      user.username = props.username;
      const res = await this.validate(user);
      return res;
    } catch (error) {
      throw error;
    }
  }

  async update(props: IUpdateUser) {
    try {
      const user = new UserUpdateValidator();
      user.password = props.password;
      user.username = props.username;
      user.id = props.id;
      const res = await this.validate(user);
      return res;
    } catch (error) {
      throw error;
    }
  }
}
