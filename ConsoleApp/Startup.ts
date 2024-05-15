import { container } from "tsyringe";
import { InMemoryUserRepository } from "../Infrastructure/Users/InMemoryUserRepository";
import { UserCreatePresenter } from "./User/Create/UserCreatePresenter";
import { UserCreateInteractor } from "../Domain/Application/User/UserCreateInteractor";
import { UserController } from "./User/UserController";

export class Startup {
  public static run() {
    this.setupDebug();
  }

  public static setupDebug() {
    container.register("IUserRepository", { useClass: InMemoryUserRepository });
    container.register("IUserCreatePresenter", {
      useClass: UserCreatePresenter,
    });
    container.register("IUserCreateUseCase", {
      useClass: UserCreateInteractor,
    });
    container.register("UserController", { useClass: UserController });
  }
}
