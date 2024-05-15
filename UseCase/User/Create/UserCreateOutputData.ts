export class UserCreateOutputData {
  public constructor(
    public readonly userId: string,
    public readonly created: Date
  ) {}
}
