import sinon from 'sinon';
import { ListUserController } from '@src/modules/accounts/controllers/list-users.controller';
import UserRepository from '@src/modules/accounts/repositories/user.repository';
import { ListUsersUseCase } from '@src/modules/accounts/usecases/list-users.usecase';
import { UserDTO } from '@src/modules/accounts/dtos/user.dto';
import { userMock } from '@test/unit/mocks/user.mock';
import { Context, createMockContext } from '@test/unit/mocks/prisma.mock';

describe('UserController', () => {
  let sandbox = {} as sinon.SinonSandbox;
  let fakePrismaContext = {} as unknown as Context;

  beforeEach(() => {
    fakePrismaContext = createMockContext();
    sandbox = sinon.createSandbox();
  });

  let prismaContext = fakePrismaContext;

  const userRepository = new UserRepository(prismaContext.prisma);
  const listUsersUseCase = new ListUsersUseCase(userRepository);
  const sut = new ListUserController(listUsersUseCase);
  afterEach(() => {
    sandbox.restore();
  });

  describe('index', () => {
    test('should index return list data ', async () => {
      const users = [userMock] as UserDTO[];

      jest.spyOn(listUsersUseCase, 'execute').mockResolvedValueOnce(users);
      const httpResponse = await sut.handle();

      const expected = users;
      expect(httpResponse.statusCode).toBe(200);
      expect(httpResponse.body.data).toEqual(expected);
    });

    test('should index return empty array ', async () => {
      jest.spyOn(listUsersUseCase, 'execute').mockResolvedValueOnce([]);
      const httpResponse = await sut.handle();

      const expected = [] as UserDTO[];
      expect(httpResponse.statusCode).toBe(200);
      expect(httpResponse.body.data).toEqual(expected);
    });
  });
});
