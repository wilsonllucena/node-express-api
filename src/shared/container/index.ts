import 'reflect-metadata';
import { container } from 'tsyringe';
import { PrismaClient } from '@prisma/client';
import { ListUsersUseCase } from '@src/modules/accounts/usecases/list-users.usecase';
import { ListUsers } from '@src/modules/accounts/usecases/users.interface';
import { UserPrismaRepository } from '@src/modules/accounts/repositories/user.prisma.repository';
import { UserRepository } from '@src/modules/accounts/repositories/user-repository.interface';

container.registerSingleton<PrismaClient>('PrismaClient', PrismaClient);
container.registerSingleton<ListUsers>('ListUsersUseCase', ListUsersUseCase);
container.registerSingleton<UserRepository>(
  'UserRepository',
  UserPrismaRepository
);
