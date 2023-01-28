import { left, right } from '@src/shared/errors/either';
import { AppError } from '@src/shared/util/app-error';
import { httpStatus } from '@src/shared/util/http-status-code';
import { inject, injectable } from 'tsyringe';
import { UserRepository } from '../repositories/user-repository.interface';
import { GetUser, ResponseCustom } from './interfaces/get-user.interface';

@injectable()
export class GetUserByIdUseCase implements GetUser {
  constructor(
    @inject('UserRepository') private readonly usersRepository: UserRepository
  ) {}
  async execute(id: number): Promise<ResponseCustom> {
    const result = await this.usersRepository.findById(id);

    if (!result) {
      return left(
        new AppError('Usuário não foi encontrado', httpStatus.NOT_FOUND)
      );
    }
    
    return right({
      user: result,
    });
  }
}
