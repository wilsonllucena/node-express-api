import { User } from "../models/user.model";
import { IUserRepository } from "../repositories/user-repository.interface";

export class ListUsersUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}