import { v4 as uuid } from "uuid";

export class User {
  public readonly id: string;
  public readonly name: string;

  public constructor(name: string);
  public constructor(name: string, id?: string);

  public constructor(name: string, id?: string) {
    this.id = id ?? uuid();
    this.name = name;
  }
}
