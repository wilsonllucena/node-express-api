import {UserDTO, UserInputDTO} from "../dtos/user.dto";

export interface UserRepository {
  create(data: any): Promise<UserDTO>;
  findByEmail(email: string): Promise<UserDTO | null>;
  findByDocument(document: string): Promise<UserDTO | null>;
  findById(id: number): Promise<UserDTO | null>;
  list(): Promise<UserDTO[]>;
  update(id: number, user: UserInputDTO): Promise<UserDTO>;
}