import { ListUsers } from '@src/modules/accounts/usecases/users.interface';

const ListUsersUseCaseMock: ListUsers = {
  execute: jest.fn(),
};

export default ListUsersUseCaseMock;
