import { httpStatus } from '@src/shared/util/http-status-code';
import { inject } from 'tsyringe';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { CreateUser } from '../use-cases/interfaces/create-user.interface';

export class CreateUserController implements BaseController {
  constructor(
    @inject('CreateUser') private readonly createUserUseCase: CreateUser
  ) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const response = await this.createUserUseCase.execute(data.body);
    if (response.isLeft()) {
      return badRequest(response.value, httpStatus.CONFLICT);
    }
    return success(response.value, httpStatus.CREATED);
  }
}
