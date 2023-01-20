import { ListUserController } from '@src/modules/accounts/controllers/list-users.controller';
import sinon from 'sinon';

describe('UserController', () => {
  let sandbox = {} as sinon.SinonSandbox;
  const sut = new ListUserController();

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('index', () => {
    test('should index return list data ', async () => {
      const httpResponse = await sut.handle();
      const expected = { data: [] };
      expect(httpResponse.statusCode).toBe(200);
      expect(httpResponse.body).toEqual(expected);
    });
  });
});
