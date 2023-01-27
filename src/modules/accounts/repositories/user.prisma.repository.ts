import { PrismaClient } from '@prisma/client';
import PrismaService from '@src/shared/database/prismaClient';
import { container, inject, injectable } from 'tsyringe';
import { UserDTO } from '../dtos/user.dto';
import { UserRepository } from './user-repository.interface';

@injectable()
export class UserPrismaRepository implements UserRepository {

  private prismaService = PrismaService;

  async findByEmail(email: string): Promise<UserDTO | null> {
    return await this.prismaService.user.findUnique({ where: { email } });
  }
  async findById(id: number): Promise<UserDTO | null> {
    return await this.prismaService.user.findFirst({
      where: { id },
    });
  }

  async list(): Promise<any> {
    return await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        document: true,
        password: false,
        role: true,
        createdAt: true,
      },
    });
  }

  async create(data: UserDTO): Promise<UserDTO> {
    return await this.prismaService.user.create({ data });
  }

  async update(id: number, user: UserDTO): Promise<UserDTO> {
    return await this.prismaService.user.update({ where: { id }, data: user });
  }
}
