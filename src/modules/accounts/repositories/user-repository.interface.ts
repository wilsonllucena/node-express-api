import {UserDTO} from "../dtos/user.dto";

export interface IUserRepository {
  create(data: any): Promise<UserDTO>;
  findByEmail(email: string): Promise<UserDTO | null>;
  findById(id: number): Promise<UserDTO | null>;
  list(): Promise<UserDTO[]>;
  update(id: number, user: UserDTO): Promise<UserDTO>;
}