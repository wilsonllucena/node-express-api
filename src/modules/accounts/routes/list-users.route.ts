import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { Router } from 'express';
import { ListUserController } from '../controllers/list-users.controller';

export default (router: Router): void => {
    const controller = new ListUserController();
  router.get('/users', adapterRoute(controller));
};
