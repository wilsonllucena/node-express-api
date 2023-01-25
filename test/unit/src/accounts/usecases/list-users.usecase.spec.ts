import { ListUsersUseCase } from '@src/modules/accounts/usecases/list-users.usecase';
import sinon from 'sinon';
// @ts-ignore
import UsersRepository from '@src/modules/accounts/repositories/user.repository';
import {
  Context,
  createMockContext,
  MockContext,
} from '@test/unit/mocks/prisma.mock';
import { userMock } from '@test/unit/mocks/user.mock';
import { UserDTO } from '@src/modules/accounts/dtos/user.dto';

describe('ListUsersUseCase', () => {
  let sandbox = {} as sinon.SinonSandbox;
  let fakePrismaContext = {} as unknown as Context;
  let usersRepository = {} as UsersRepository;

  beforeEach(() => {
    fakePrismaContext = createMockContext();
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  let prismaContext = fakePrismaContext;
  
  usersRepository = new UsersRepository(prismaContext.prisma);
  const sut = new ListUsersUseCase(usersRepository);

  describe('ListUsers', () => {
    test('should return a list of users', async () => {
      const users = [userMock] as UserDTO[];

      sandbox.stub(usersRepository, 'list').resolves(users);
      const result = await sut.execute();
      expect(result).toEqual(users);
    });
  });
});
