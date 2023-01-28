import { UserDTO } from "../../dtos/user.dto";

export interface ListUsers {
    execute(): Promise<UserDTO[]>;
}