import { UserCreateInputData } from "./UserCreateInputData";

export interface IUserCreateUseCase {
  handle(inputdata: UserCreateInputData): void;
}
