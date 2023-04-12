import { Profile, IProfile } from "./profile-schema";
import { QueryError } from "@sequelize/core";

export class ProfileModel {
  private profile = Profile;
  create = async (props: IProfile) => {
    try {
      const result = await this.profile.create(props);
      return result;
    } catch (error: any) {
      throw error?.errors ?? error; // return error;
    }
  };
  update = async (props: IProfile) => {
    try {
      const result = await this.profile.update(props, {
        where: { id: props.UserId },
      });
      return result;
    } catch (error: any) {
      throw error?.errors ?? error; // return error;
    }
  };
  delete = async (id: string) => {
    try {
      const result = await this.profile.destroy({ where: { id } });
      return result;
    } catch (error: any) {
      throw error?.errors ?? error; // return error;
    }
  };
  getById = async () => {
    try {
      return;
    } catch (error: any) {
      throw error?.errors ?? error; // return error;
    }
  };
  getAll = async () => {
    try {
      return;
    } catch (error: any) {
      throw error?.errors ?? error; // return error;
    }
  };
  patch = async () => {
    try {
      return;
    } catch (error: any) {
      throw error?.errors ?? error; // return error;
    }
  };
}
