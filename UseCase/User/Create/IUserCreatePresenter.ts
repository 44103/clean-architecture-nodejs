import { UserCreateOutputData } from "./UserCreateOutputData";

export interface IUserCreatePresenter {
  complete(outputData: UserCreateOutputData): void;
}
