import sinon from 'sinon';
import { userInputMock, userMock } from '@test/unit/mocks/user.mock';
import userRepositoryMock from '../mocks/user-repository.mock';
import { CreateUserUseCase } from '@src/modules/accounts/use-cases/create-user.usecase';
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
      const user = {
        name: 'name_user',
        email: 'valid@email.com',
        password: 'password',
      };
      jest.spyOn(userRepository, 'create').mockResolvedValue(userMock);

      const result = await sut.execute(user);

      expect(result.isRight).toBeTruthy();
      expect(result.value).toEqual({ id: userMock.id });
    });

    test('returns an error if the user already exists', async () => {
     
      jest.spyOn(userRepository, 'findByDocument').mockResolvedValueOnce({
        ...userMock,
        document: userInputMock.document,
      });

      const result = await sut.execute(userInputMock);

      expect(result.isLeft).toBeTruthy();
      expect(result.value).toEqual(
        new AppError('Documento já cadastrado', 400)
      );
    });

    test('returns an error if the email already exists', async () => {
    
     jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce({
       ...userMock,
       email: "difer@email.com",
     });

      const result = await sut.execute(userInputMock);

      expect(result.isLeft).toBeTruthy();
      expect(result.value).toEqual(new AppError('Email já cadastrado', 400));
    });
  });
});
