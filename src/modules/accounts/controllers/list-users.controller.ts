import { inject } from 'tsyringe';
import { success } from '../../../shared/helpers';
import {
  BaseController,
  HttpResponse,
} from '../../../shared/protocols';
import { ListUsers } from '../use-cases/users.interface';

export class ListUserController implements BaseController {
  constructor(
    @inject('listUsersUseCase') private readonly listUsersUseCase: ListUsers
  ) {}

  async handle(): Promise<HttpResponse> {
    const result = await this.listUsersUseCase.execute();
    return success(result);
  }
}
