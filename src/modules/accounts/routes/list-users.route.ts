import { Router } from 'express';
import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { makeListUserController } from '../factory/list-users.factory';

export default (router: Router): void => {
  router.get('/users', adapterRoute(makeListUserController()));
};
