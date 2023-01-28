import { ListUsers } from '@src/modules/accounts/use-cases/interfaces/list-users.interface';

const ListUsersUseCaseMock: ListUsers = {
  execute: jest.fn(),
};

export default ListUsersUseCaseMock;
