import { ListUserController } from '@src/modules/accounts/controllers/list-users.controller';
import UserRepository from '@src/modules/accounts/repositories/user.repository';
import { ListUsersUseCase } from '@src/modules/accounts/usecases/list-users.usecase';
import sinon from 'sinon';
import { User } from '@src/modules/accounts/entity/user.entity';

describe('UserController', () => {
  let sandbox = {} as sinon.SinonSandbox;
  const userRepository = new UserRepository();
  const listUsersUseCase = new ListUsersUseCase(userRepository);
  const sut = new ListUserController(listUsersUseCase);

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('index', () => {
    test('should index return list data ', async () => {
      const users = new User(
        1,
        'John Doe',
        'USER',
        'john.doe@gmail.com',
        '123456'
      );

      jest.spyOn(listUsersUseCase, 'execute').mockResolvedValueOnce([users]);
      const httpResponse = await sut.handle();

      const expected = [users]
      expect(httpResponse.statusCode).toBe(200);
      expect(httpResponse.body.data).toEqual(expected);
    });

    test('should index return empty array ', async () => {
      jest.spyOn(listUsersUseCase, 'execute').mockResolvedValueOnce([]);
      const httpResponse = await sut.handle();

      const expected = [] as User[];
      expect(httpResponse.statusCode).toBe(200);
      expect(httpResponse.body.data).toEqual(expected);
    });
  });
});
