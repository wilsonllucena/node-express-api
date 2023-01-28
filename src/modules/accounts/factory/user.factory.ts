import 'reflect-metadata';
import { BaseController } from '@src/shared/protocols';
import { ListUserController } from '../controllers/list-users.controller';
import { container } from 'tsyringe';
import { ListUsersUseCase } from '../use-cases/list-users.usecase';
import { CreateUserUseCase } from '../use-cases/create-user.usecase';
import { CreateUserController } from '../controllers/create-user.controller';
import { UpdateUserUseCase } from '../use-cases/update-user.usecase';
import { UpdateUserController } from '../controllers/update-user.controller';
import { GetUserByIdUseCase } from '../use-cases/get-user.usecase';
import { GetUserController } from '../controllers/get-user.controller';
import { DeleteUserByIdUseCase } from '../use-cases/delete-user.usecase';
import { DeleteUserController } from '../controllers/delete-user.controller';

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

export const makeUpdateUserController = (): BaseController => {
  const updateUserUseCase = container.resolve(UpdateUserUseCase);
  const controller = new UpdateUserController(updateUserUseCase);
  return controller;
};

export const makeGetUserController = (): BaseController => {
  const getUserUseCase = container.resolve(GetUserByIdUseCase);
  const controller = new GetUserController(getUserUseCase);
  return controller;
};

export const makeDeleteUserController = (): BaseController => {
  const deleteUserUseCase = container.resolve(DeleteUserByIdUseCase);
  const controller = new DeleteUserController(deleteUserUseCase);
  return controller;
};