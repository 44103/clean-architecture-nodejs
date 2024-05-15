import { IUserRepository } from "../../Domain/Domain/Users/IUserRepository";
import { User } from "../../Domain/Domain/Users/User";

export class InMemoryUserRepository implements IUserRepository {
  private readonly data: Map<string, User> = new Map<string, User>();

  private cloneUser(user: User) {
    return new User(user.name, user.id);
  }

  save(user: User) {
    this.data.set(user.id, this.cloneUser(user));
  }

  findByUserName(name: string): User | undefined {
    return [...this.data.values()].find((user) => user.name === name);
  }

  findAll(): User[] {
    return [...this.data.values()];
  }
}
