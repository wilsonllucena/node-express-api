import { UserDTO } from "@src/modules/accounts/dtos/user.dto";

export const userMock = {
  id: 1,
  name: 'name_user',
  email: 'email@email.com',
  password: 'password',
  document: '123456789',
  role: 'ADMIN',
  createdAt: new Date(),
  updatedAt: new Date(),
} as UserDTO;