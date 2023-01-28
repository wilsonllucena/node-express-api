import { Request } from 'express';
import { inject } from 'tsyringe';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { UpdateUser } from '../use-cases/interfaces/update-user.interface';

export class UpdateUserController implements BaseController {
  constructor(
    @inject('UpadateUser') private readonly updateUserUseCase: UpdateUser
  ) {}

  async handle(data: HttpRequest): Promise<HttpResponse> {
    const response = await this.updateUserUseCase.execute(data.body.id, data.body);
    if (response.isLeft()) {
      return badRequest(response.value, 400);
    }
    return success();
  }
}
