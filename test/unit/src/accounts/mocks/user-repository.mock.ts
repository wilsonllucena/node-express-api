import 'reflect-metadata';
import { UserRepository } from '@src/modules/accounts/repositories/user-repository.interface';

const userRepositoryMock: UserRepository = {
  create: jest.fn(),
  list: jest.fn(),
  findById: jest.fn(),
  findByEmail: jest.fn(),
  findByDocument: jest.fn(),
  update: jest.fn(),
};

export default userRepositoryMock;
