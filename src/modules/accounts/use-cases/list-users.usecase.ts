import { inject, injectable } from "tsyringe";
import { UserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user-repository.interface";
import { ListUsers } from "./interfaces/list-users.interface";

@injectable()
export class ListUsersUseCase implements ListUsers {
  constructor(@inject('UserRepository') private readonly usersRepository: UserRepository) {}
  async execute(): Promise<UserDTO[]> {
    const users = await this.usersRepository.list();
    return users;
  }
}