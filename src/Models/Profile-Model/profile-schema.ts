import { Mysql } from "../../Feature/DB-Connections";
import { DataTypes } from "@sequelize/core";
import { Profile } from "./profile-model";

Profile.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "users-profile",
    sequelize: Mysql, // passing the `sequelize` instance is required
  }
);
Profile.sync({ alter: true }).then(() =>
  console.log("users-profile table created")
);
export { Profile };
