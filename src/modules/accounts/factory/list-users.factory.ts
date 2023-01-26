import { BaseController } from "@src/shared/protocols";
import { ListUserController } from "../controllers/list-users.controller";
import {UserPrismaRepository} from "../repositories/user.prisma.repository";
import { ListUsersUseCase } from "../usecases/list-users.usecase";

export const makeListUserController = (): BaseController => {
  const userRepository = new UserPrismaRepository();
  const listUsers = new ListUsersUseCase(userRepository);
  const controller = new ListUserController(listUsers);
  return controller;
};
