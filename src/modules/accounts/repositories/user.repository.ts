import { User } from "../models/user.model";
import { IUserRepository } from "./user-repository.interface";

export default class UsersRepository implements IUserRepository {
    create(data: any): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findByEmail(email: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<User[]> {
        return {} as Promise<User[]>;
    }
    save(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}