import { PrismaClient } from '@prisma/client';
import { container } from 'tsyringe';
import { UserDTO } from '../dtos/user.dto';
import { UserRepository } from './user-repository.interface';

export default class UserPrismaRepository implements UserRepository {
  private prismaService = container.resolve(PrismaClient);

  async findByEmail(email: string): Promise<UserDTO | null> {
    return await this.prismaService.user.findUnique({ where: { email } });
  }
  async findById(id: number): Promise<UserDTO | null> {
    return await this.prismaService.user.findFirst({
      where: { id },
    });
  }

  async list(): Promise<UserDTO[]> {
    return await this.prismaService.user.findMany();
  }

  async create(data: UserDTO): Promise<UserDTO> {
    return await this.prismaService.user.create({ data });
  }

  async update(id: number, user: UserDTO): Promise<UserDTO> {
    return await this.prismaService.user.update({ where: { id }, data: user });
  }
}
