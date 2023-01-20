
export interface User {
    id?: number;
    name: string;
    role: 'ADMIN' | 'CUSTOMER' | 'USER_CUSTOMER' | 'USER';
    email: string;
    password?: string;
}