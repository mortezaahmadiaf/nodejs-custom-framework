import { validateOrReject, IsUUID } from "class-validator";
import { Interface } from "readline";
class IdValidator implements IId {
  @IsUUID("4")
  id!: string;
}

interface IId {
  id: string;
}
export class Validation {
  async idValidator(id: string) {
    try {
      const validate = new IdValidator();
      validate.id = id;
      await this.validate(validate);
    } catch (error) {
      throw error;
    }
  }

  async validate(props: any) {
    try {
      await validateOrReject(props);
    } catch (errors) {
      throw errors;
    }
  }
}
