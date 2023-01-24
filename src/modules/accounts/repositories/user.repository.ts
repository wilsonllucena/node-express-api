import { User } from "../entity/user.entity";
import { IUserRepository } from "./user-repository.interface";

export default class UserRepository implements IUserRepository {
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
        const user = new User(1, 'John Doe', 'ADMIN', 'john.doe@gmail.com', '123456');

        return new Promise((resolve) => resolve([user]) as any);
    }
    save(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }

}