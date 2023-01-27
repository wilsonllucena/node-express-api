import { UserDTO } from "../../dtos/user.dto";

export interface CreateUser {
  execute(user: UserDTO): Promise<UserDTO>;
}
