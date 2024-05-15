import { UserCreateViewModel } from "./User/Create/UserCreateViewModel";
import { UserCreateSubject } from "./UserCreateSubject";

export class ConsoleView {
  public update(viewModel: UserCreateViewModel) {
    console.log(`id: ${viewModel.userId}, created: ${viewModel.createdDate}`);
  }

  public constructor() {
    UserCreateSubject.userCreateViewModelUpdated = this.update;
  }

  public dispose() {
    UserCreateSubject.userCreateViewModelUpdated = undefined;
  }
}
