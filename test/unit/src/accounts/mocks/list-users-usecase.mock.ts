import { ListUsers } from '@src/modules/accounts/use-cases/users.interface';

const ListUsersUseCaseMock: ListUsers = {
  execute: jest.fn(),
};

export default ListUsersUseCaseMock;
