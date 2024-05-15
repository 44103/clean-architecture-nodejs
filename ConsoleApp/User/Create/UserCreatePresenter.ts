import { inject, injectable } from "tsyringe";
import { IUserCreatePresenter } from "../../../UseCase/User/Create/IUserCreatePresenter";
import { UserCreateOutputData } from "../../../UseCase/User/Create/UserCreateOutputData";
import { UserCreateSubject } from "../../UserCreateSubject";
import { UserCreateViewModel } from "./UserCreateViewModel";

@injectable()
export class UserCreatePresenter implements IUserCreatePresenter {
  private readonly subject: UserCreateSubject;

  constructor(@inject("UserCreateSubject") subject: UserCreateSubject) {
    this.subject = subject;
  }

  complete(outputData: UserCreateOutputData) {
    const userId = outputData.userId;
    const createdDate = outputData.created;
    const createdDateText = createdDate.toLocaleDateString();
    const model = new UserCreateViewModel(userId, createdDateText);
    this.subject.userCreateViewModel = model;
  }
}
