import { adapterRoute } from '../../../shared/adapters/express-adapter';
import { Router } from 'express';
import { ListUserController } from '../controllers/list-users.controller';
import { ListUsersUseCase } from '../usecases/list-users.usecase';
import UserPrismaRepository from '../repositories/user.prisma.repository';
import { PrismaClient } from '@prisma/client';

export default (router: Router): void => {
  const userRepository = new UserPrismaRepository();
  const listUsers = new ListUsersUseCase(userRepository);
  const controller = new ListUserController(listUsers);
  router.get('/users', adapterRoute(controller));
};
