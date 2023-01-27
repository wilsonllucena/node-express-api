import sinon from 'sinon';
import { userMock } from '@test/unit/mocks/user.mock';
import { UserDTO } from '@src/modules/accounts/dtos/user.dto';
import userRepositoryMock from '../mocks/user-repository.mock';
import { ListUsersUseCase } from '@src/modules/accounts/usecases/list-users.usecase';

describe('ListUsersUseCase', () => {
  let sandbox = {} as sinon.SinonSandbox;
  let usersRepository = userRepositoryMock;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

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
