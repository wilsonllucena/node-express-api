import 'reflect-metadata';
import { container } from 'tsyringe';
import { PrismaClient } from '@prisma/client';
import { ListUsersUseCase } from '@src/modules/accounts/use-cases/list-users.usecase';
import { ListUsers } from '@src/modules/accounts/use-cases/users.interface';
import { UserPrismaRepository } from '@src/modules/accounts/repositories/user.prisma.repository';
import { UserRepository } from '@src/modules/accounts/repositories/user-repository.interface';
import { CreateUser } from '@src/modules/accounts/use-cases/interfaces/create-user.interface';
import { CreateUserUseCase } from '@src/modules/accounts/use-cases/create-user.usecase';

// Prisma
container.registerSingleton<PrismaClient>('PrismaClient', PrismaClient);

// Repository
container.registerSingleton<UserRepository>(
  'UserRepository',
  UserPrismaRepository
);

// UseCase 
container.registerSingleton<ListUsers>('ListUsersUseCase', ListUsersUseCase);
container.registerSingleton<CreateUser>('CreateUSer', CreateUserUseCase);
