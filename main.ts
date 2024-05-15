import "reflect-metadata";
import * as readline from "node:readline/promises";
import { container } from "tsyringe";
import { Startup } from "./ConsoleApp/Startup";
import { UserCreateSubject } from "./ConsoleApp/UserCreateSubject";
import { UserController } from "./ConsoleApp/User/UserController";
import { ConsoleView } from "./ConsoleApp/ConsoleView";

(async () => {
  Startup.run();

  container.registerSingleton("UserCreateSubject", UserCreateSubject);
  const _view = new ConsoleView();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.info("=============================");
  console.info("Welcome to Clean Architecture");
  console.info("=============================");
  console.info();
  console.info("Enter the name of the new user.");
  const userName = await rl.question("User Name: ");
  const controller = container.resolve(UserController);
  controller.createUser(userName);
  rl.close();
})();
