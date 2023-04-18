import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from "class-validator";

export class UserValidator implements IUser {
  @Length(10, 20)
  username!: string;

  @Length(10, 20)
  password!: string;
}

interface IUser {
  username: string;
  password: string;
}
