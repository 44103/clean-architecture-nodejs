import { inject, injectable } from "tsyringe";
import { IUserCreateUseCase } from "../../UseCase/User/Create/IUserCreateUseCase";
import { UserCreateInputData } from "../../UseCase/User/Create/UserCreateInputData";

@injectable()
export class UserController {
  private readonly userCreateUseCase: IUserCreateUseCase;

  constructor(
    @inject("IUserCreateUseCase") userCreateUseCase: IUserCreateUseCase
  ) {
    this.userCreateUseCase = userCreateUseCase;
  }

  public createUser(userName: string) {
    const inputData = new UserCreateInputData(userName);
    this.userCreateUseCase.handle(inputData);
  }
}
