import { AppError } from "@src/shared/util/app-error";
import { inject, injectable } from "tsyringe";
import { UserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user-repository.interface";
import { CreateUser } from "./interfaces/create-user.interface";
import { ListUsers } from "./users.interface";

@injectable()
export class CreateUserUseCase implements CreateUser {
  constructor(@inject('UserRepository') private readonly usersRepository: UserRepository) {}
  async execute(user: UserDTO): Promise<UserDTO> {
    try {
      const result = await this.usersRepository.create(user);
      return result;
    } catch (error: any) {
      throw new AppError(error.message);
    }

    return await this.usersRepository.create(user);
  }
}