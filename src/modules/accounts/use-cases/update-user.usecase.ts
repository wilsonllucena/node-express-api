import { left, right } from '@src/shared/errors/either';
import { AppError } from '@src/shared/util/app-error';
import { inject, injectable } from 'tsyringe';
import { UserInputDTO } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user-repository.interface';
import { UpdateUser, ResponseCustom } from './interfaces/update-user.interface';

@injectable()
export class UpdateUserUseCase implements UpdateUser {
  constructor(
    @inject('UserRepository') private readonly usersRepository: UserRepository
  ) {}
  async execute(id: number, user: UserInputDTO): Promise<ResponseCustom> {
    const result = await this.usersRepository.update(id, user);

    return right({
      id: result.id,
    });
  }
}
