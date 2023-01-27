import 'reflect-metadata';
import { BaseController } from '@src/shared/protocols';
import { ListUserController } from '../controllers/list-users.controller';
import { container } from 'tsyringe';
import { ListUsersUseCase } from '../usecases/list-users.usecase';

export const makeListUserController = (): BaseController => {
  const listUsersUseCase = container.resolve(ListUsersUseCase);
  const controller = new ListUserController(listUsersUseCase);
  return controller;
};
