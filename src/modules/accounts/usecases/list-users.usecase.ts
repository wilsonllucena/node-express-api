import { UserDTO } from "../dtos/user.dto";
import { IUserRepository } from "../repositories/user-repository.interface";
import { ListUsers } from "./users.interface";

export class ListUsersUseCase implements ListUsers {
  constructor(private usersRepository: IUserRepository) {}

  async execute(): Promise<UserDTO[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}