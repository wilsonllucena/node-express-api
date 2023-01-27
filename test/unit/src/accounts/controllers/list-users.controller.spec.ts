import 'reflect-metadata';
import sinon from 'sinon';
import { ListUserController } from '@src/modules/accounts/controllers/list-users.controller';
import { UserDTO } from '@src/modules/accounts/dtos/user.dto';
import { userMock } from '@test/unit/mocks/user.mock';
import ListUsersUseCaseMock from '../mocks/list-users-usecase.mock';

describe('UserController', () => {
  let sandbox = {} as sinon.SinonSandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  const listUsersUseCase = ListUsersUseCaseMock;
  const sut = new ListUserController(listUsersUseCase);
  afterEach(() => {
    sandbox.restore();
    jest.clearAllMocks();
  });

  describe('index', () => {
    test('should index return list data ', async () => {
      const users = [userMock] as UserDTO[];
      const listUserUseCaseSpy = jest
        .spyOn(listUsersUseCase, 'execute')
        .mockResolvedValue(users);
      const httpResponse = await sut.handle();
      const expected = users;
      expect(httpResponse.statusCode).toBe(200);
      expect(listUserUseCaseSpy).toHaveBeenCalled();
      expect(httpResponse.body).toEqual(expected);
    });

    test('should index return empty array ', async () => {
      const listUserUseCaseSpy = jest
        .spyOn(listUsersUseCase, 'execute')
        .mockResolvedValue([]);
      const httpResponse = await sut.handle();
      expect(httpResponse.statusCode).toBe(200);
      expect(listUserUseCaseSpy).toHaveBeenCalled();
      expect(httpResponse.body).toEqual([]);
    });
  });
});
