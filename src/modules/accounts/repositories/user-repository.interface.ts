import { User } from "../entity/user.entity";

export interface IUserRepository {
    create(data: any): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    list(): Promise<User[]>;
    save(user: User): Promise<User>;
}