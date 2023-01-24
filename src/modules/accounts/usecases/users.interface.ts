import { User } from "../entity/user.entity";

export interface ListUsers {
    execute(): Promise<User[]>;
}