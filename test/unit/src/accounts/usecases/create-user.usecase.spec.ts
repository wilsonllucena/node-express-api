import sinon from 'sinon';
import { userMock } from '@test/unit/mocks/user.mock';
import { UserDTO } from '@src/modules/accounts/dtos/user.dto';
import userRepositoryMock from '../mocks/user-repository.mock';
import { CreateUserUseCase } from '@src/modules/accounts/usecases/create-user.usecase';
import { AppError } from '@src/shared/util/app-error';

describe('CreateUsersUseCase', () => {
  let sandbox = {} as sinon.SinonSandbox;
  let userRepository = userRepositoryMock;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const sut = new CreateUserUseCase(userRepository);

  describe('execute', () => {
    test('should create a new user', async () => {
      const user = userMock;
      jest.spyOn(userRepository, 'create').mockResolvedValue(user);
      const result = await sut.execute(user);

      expect(userRepository.create).toHaveBeenCalledWith(user);
      expect(result).toEqual(user);
    });

    test('should throw an AppError if error occrus', async () => {
      const user = userMock;
      sandbox
        .stub(userRepository, 'create')
        .rejects(new AppError('Something went wrong'));
  
      expect.assertions(1);
      try {
        await sut.execute(user);
      } catch (error) {
        expect(error).toEqual(new AppError('Something went wrong'));
      }
    });
  });
});
