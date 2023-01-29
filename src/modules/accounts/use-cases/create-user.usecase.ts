import { left, right } from '@src/shared/errors/either';
import { AppError } from '@src/shared/util/app-error';
import { httpStatus } from '@src/shared/util/http-status-code';
import { inject, injectable } from 'tsyringe';
import { UserInputDTO } from '../dtos/user.dto';
import { UserRepository } from '../repositories/user-repository.interface';
import { CreateUser, ResponseCustom } from './interfaces/create-user.interface';

@injectable()
export class CreateUserUseCase implements CreateUser {
  constructor(
    @inject('UserRepository') private readonly usersRepository: UserRepository
  ) {}
  async execute(user: UserInputDTO): Promise<ResponseCustom> {
    const userExists = await this.usersRepository.findByEmail(user.email);

    const documentExists =
      user?.document &&
      (await this.usersRepository.findByDocument(user?.document));

    if (documentExists){
      return left(new AppError('Documento já cadastrado', httpStatus.CONFLICT));
    }

    if (userExists) {
      return left(new AppError('Email já cadastrado', httpStatus.CONFLICT));
    }

    const result = await this.usersRepository.create(user);

    return right({
      id: result.id,
    });
  }
}
