import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  NonAttribute,
} from "@sequelize/core";
import { Model } from "@sequelize/core";

export class Profile extends Model<
  InferAttributes<Profile, {}>,
  InferCreationAttributes<Profile, {}>
> {
  // id can be undefined during creation when using `autoIncrement`
  declare id: CreationOptional<string>;
  declare name: string;
  declare preferredName: string | null; // for nullable fields

  // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;

  // Since TS cannot determine model association at compile time
  // we have to declare them here purely virtually
  // these will not exist until `Model.init` was called.

  // You can also pre-declare possible inclusions, these will only be populated if you
  // actively include a relation.
  // Note this is optional since it's only populated when explicitly requested in code

  // getters that are not attributes should be tagged using NonAttribute
  // to remove them from the model's Attribute Typings.
  get fullName(): NonAttribute<string> {
    return this.name;
  }
}
