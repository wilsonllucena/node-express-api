import { left, right } from '@src/shared/errors/either';
import { AppError } from '@src/shared/util/app-error';
import { httpStatus } from '@src/shared/util/http-status-code';
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
    const userExists = await this.usersRepository.findById(id);
    const emailExist = await this.usersRepository.findByEmail(user.email);

    const documentExist =
      user?.document &&
      (await this.usersRepository.findByDocument(user.document));

    if (!userExists) {
      return left(new AppError('Usuário não foi encontrado', httpStatus.NOT_FOUND));
    }

    if (documentExist && documentExist.id !== id) {
      return left(new AppError('Documento já está em uso', httpStatus.CONFLICT));
    }

    if (emailExist && emailExist.id !== id) {
      return left(new AppError('Email já está em uso', httpStatus.CONFLICT));
    }

    const result = await this.usersRepository.update(id, user);

    return right({
      id: result.id,
    });
  }
}
