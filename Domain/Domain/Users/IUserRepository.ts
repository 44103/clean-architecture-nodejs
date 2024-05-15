import { User } from "./User";

export interface IUserRepository {
  save(user: User): void;
  findByUserName(name: string): User | undefined;
  findAll(): User[];
}
