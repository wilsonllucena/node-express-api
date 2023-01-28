import { inject } from 'tsyringe';
import { httpStatus } from '@src/shared/util/http-status-code';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { DeleteUser } from '../use-cases/interfaces/delete-user.interface';

export class DeleteUserController implements BaseController {
  constructor(
    @inject('DeleteUser') private readonly deleteUserUseCase: DeleteUser
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { params } = request;
    const { id } = params;
    const response = await this.deleteUserUseCase.execute(Number(id));

    if (response.isLeft()) {
      return badRequest(response.value);
    }
    return success(response.value, httpStatus.NO_CONTENT);
  }
}
