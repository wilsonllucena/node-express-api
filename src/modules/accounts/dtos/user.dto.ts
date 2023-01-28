type Role = 'ADMIN' | 'CUSTOMER' | 'USER_CUSTOMER' | 'USER';
 interface UserDTO  {
  id: number;
  email: string;
  name: string | null;
  document?: string | null;
  password: string;
  role?: Role | null;
  createdAt: Date;
  updatedAt: Date;
};

 export interface UserInputDTO {
  name: string;
  email: string;
  document?: string;
  password?: string;
  role?: Role;
};

export { UserDTO };
