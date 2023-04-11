import { Mysql } from "../../Feature/DB-Connections";
import { DataTypes } from "@sequelize/core";
import { User } from "./user-model";

User.init(
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
    tableName: "users",
    sequelize: Mysql, // passing the `sequelize` instance is required
  }
);
User.sync({ alter: true }).then(() => console.log("User table created"));
export { User };
