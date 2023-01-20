import { User } from '../../../../../src/modules/accounts/models/user.model';
import { ListUsersUseCase } from "../../../../../src/modules/accounts/usecases/list-users.usecase";
import sinon from "sinon";
// @ts-ignore
import UsersRepository  from '../../../../../src/modules/accounts/repositories/user.repository';

describe('ListUsersUseCase', () => {
      let sandbox = {} as sinon.SinonSandbox;
      const usersRepository = new UsersRepository();
      const sut = new ListUsersUseCase(usersRepository);

      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });
    describe('ListUsers', () => {
        test('should return a list of users', async () => {
            const users: User[] = [{
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                role: 'ADMIN',
                password: '123456',
            }];
            sandbox.stub(usersRepository, 'list').resolves(users);
            const result = await sut.execute();
            expect(result).toEqual(users);
        });
    });
});