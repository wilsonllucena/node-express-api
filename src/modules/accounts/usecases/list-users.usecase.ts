import { User } from "../entity/user.entity";
import { IUserRepository } from "../repositories/user-repository.interface";
import { ListUsers } from "./users.interface";

export class ListUsersUseCase implements ListUsers {
  constructor(private usersRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}