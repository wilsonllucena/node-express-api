import { Prisma } from '@prisma/client';
import PrismaService from '@src/shared/database/prismaClient';
import { injectable } from 'tsyringe';
import { UserDTO } from '../dtos/user.dto';
import { UserRepository } from './user-repository.interface';


@injectable()
export class UserPrismaRepository implements UserRepository {
  private prismaService = PrismaService;

  async create(data: UserDTO): Promise<UserDTO> {
    try {
      return await this.prismaService.user.create({ data });
    } catch (err: any) {
      if (err.code === 'P2002') {
        if (err.meta.target.includes('email')) {
          throw new Error('Email já cadastrado');
        }
        if (err.meta.target.includes('document')) {
          throw new Error('Documento já cadastrado');
        }
      }
      return err;
    }
  }
  
  async findByEmail(email: string): Promise<UserDTO | null> {
    return await this.prismaService.user.findUnique({ where: { email } });
  }

  async findByDocument(document: string): Promise<UserDTO | null> {
    return await this.prismaService.user.findUnique({ where: { document } });
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

  async update(id: number, user: UserDTO): Promise<UserDTO> {
    return await this.prismaService.user.update({ where: { id }, data: user });
  }
}
