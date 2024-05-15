import { UserCreateViewModel } from "./User/Create/UserCreateViewModel";

export class UserCreateSubject {
  private viewModel: UserCreateViewModel | undefined;
  public static userCreateViewModelUpdated?: (
    viewModel: UserCreateViewModel
  ) => void;

  public get userCreateViewModel() {
    return this.viewModel!;
  }

  public set userCreateViewModel(viewModel: UserCreateViewModel) {
    this.viewModel = viewModel;
    if (UserCreateSubject.userCreateViewModelUpdated)
      UserCreateSubject.userCreateViewModelUpdated(viewModel);
  }
}
