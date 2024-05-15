import { inject, injectable } from "tsyringe";
import { IUserCreatePresenter } from "../../../UseCase/User/Create/IUserCreatePresenter";
import { IUserCreateUseCase } from "../../../UseCase/User/Create/IUserCreateUseCase";
import { UserCreateInputData } from "../../../UseCase/User/Create/UserCreateInputData";
import { UserCreateOutputData } from "../../../UseCase/User/Create/UserCreateOutputData";
import { IUserRepository } from "../../Domain/Users/IUserRepository";
import { User } from "../../Domain/Users/User";

@injectable()
export class UserCreateInteractor implements IUserCreateUseCase {
  private readonly userRepository: IUserRepository;
  private readonly presenter: IUserCreatePresenter;

  public constructor(
    @inject("IUserRepository") userRepository: IUserRepository,
    @inject("IUserCreatePresenter") presenter: IUserCreatePresenter
  ) {
    this.userRepository = userRepository;
    this.presenter = presenter;
  }

  public handle(inputdata: UserCreateInputData) {
    const userName = inputdata.userName;
    const duplicateUser = this.userRepository.findByUserName(userName);
    if (duplicateUser !== undefined) throw new Error("Duplicated");

    const user = new User(userName);
    this.userRepository.save(user);

    const outputData = new UserCreateOutputData(user.id, new Date());
    this.presenter.complete(outputData);
  }
}
