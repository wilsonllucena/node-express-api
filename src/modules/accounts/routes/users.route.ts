import { Router } from 'express';
import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { makeCreateUserController, makeGetUserController, makeListUserController, makeUpdateUserController } from '../factory/user.factory';

export default (router: Router): void => {
  router.get('/users', adapterRoute(makeListUserController()));
  router.post('/user', adapterRoute(makeCreateUserController()));
  router.patch('/user/:id', adapterRoute(makeUpdateUserController()));
  router.get('/user/:id', adapterRoute(makeGetUserController()));
};
