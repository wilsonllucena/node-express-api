import 'reflect-metadata';
import { BaseController } from '@src/shared/protocols';
import { ListUserController } from '../controllers/list-users.controller';
import { container } from 'tsyringe';
import { ListUsersUseCase } from '../use-cases/list-users.usecase';
import { CreateUserUseCase } from '../use-cases/create-user.usecase';
import { CreateUserController } from '../controllers/create-user.controller';

export const makeListUserController = (): BaseController => {
  const listUsersUseCase = container.resolve(ListUsersUseCase);
  const controller = new ListUserController(listUsersUseCase);
  return controller;
};

export const makeCreateUserController = (): BaseController => {
  const createUserUseCase = container.resolve(CreateUserUseCase);
  const controller = new CreateUserController(createUserUseCase);
  return controller;
};