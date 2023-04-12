import { ProfileModel } from "./profile-model";
import { IProfile } from "../schemas";
export class ProfileManager {
  private profileModel: ProfileModel = new ProfileModel();
  create = (props: IProfile) => {
    return this.profileModel.create(props);
  };
  update = (props: IProfile) => {
    return this.profileModel.update(props);
  };
  delete = (id: string) => {
    return this.profileModel.delete(id);
  };
  getById = (id: string) => {
    return this.profileModel.getById();
  };
  getAll = () => {
    return this.profileModel.getAll();
  };
  patch = () => {
    return this.profileModel.patch();
  };
}
