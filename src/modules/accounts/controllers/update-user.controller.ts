import { httpStatus } from '@src/shared/util/http-status-code';
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

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { params, body } = request;
    const { id } = params;
    const response = await this.updateUserUseCase.execute(
      Number(id),
      body
    );
    if (response.isLeft()) {
      return badRequest(response.value);
    }
    return success(response.value, httpStatus.OK);
  }
}
