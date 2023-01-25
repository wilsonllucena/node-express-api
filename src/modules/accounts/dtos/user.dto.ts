type Role = 'ADMIN' | 'CUSTOMER' | 'USER_CUSTOMER' | 'USER';
export interface UserDTO  {
  id?: number;
  email: string;
  name?: string | null;
  document?: string | null;
  password: string;
  role: Role | null;
  createdAt: Date;
  updatedAt: Date;
};
