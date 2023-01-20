import { Role } from "./enums/role";

export interface User {
    id?: number;
    name: string;
    role: Role;
    email: string;
    password: string;
}