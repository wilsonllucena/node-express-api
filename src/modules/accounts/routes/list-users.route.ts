import { Router } from 'express';
import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { makeCreateUserController, makeListUserController } from '../factory/user.factory';

export default (router: Router): void => {
  router.get('/users', adapterRoute(makeListUserController()));
  router.post('/user', adapterRoute(makeCreateUserController()));
};
