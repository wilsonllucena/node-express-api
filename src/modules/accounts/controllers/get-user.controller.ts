import { inject } from 'tsyringe';
import { httpStatus } from '@src/shared/util/http-status-code';
import { badRequest, success } from '../../../shared/helpers';
import {
  BaseController,
  HttpRequest,
  HttpResponse,
} from '../../../shared/protocols';
import { GetUser } from '../use-cases/interfaces/get-user.interface';

export class GetUserController implements BaseController {
  constructor(@inject('GetUser') private readonly getUserUseCase: GetUser) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { params } = request;
    const { id } = params;
    const response = await this.getUserUseCase.execute(Number(id));

    if (response.isLeft()) {
      return badRequest(response.value);
    }
    return success(response.value, httpStatus.OK);
  }
}
