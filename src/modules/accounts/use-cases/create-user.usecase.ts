import { left, right } from '@src/shared/errors/either';
import { AppError } from '@src/shared/util/app-error';
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

    if (user?.document) {
      const documentExists = await this.usersRepository.findByDocument(
        user?.document
      );

      if (documentExists)
        return left(new AppError('Documento já cadastrado', 400));
    }
    if (userExists) {
      return left(new AppError('Email já cadastrado', 400));
    }

    const result = await this.usersRepository.create(user);

    return right({
      id: result.id,
    });
  }
}
