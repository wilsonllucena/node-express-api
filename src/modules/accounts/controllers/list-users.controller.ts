import { success } from '../../../shared/helpers';
import {
  BaseController,
  HttpResponse,
} from '../../../shared/protocols';
import { ListUsers } from '../usecases/users.interface';

export class ListUserController extends BaseController {

  constructor(private listUsersUseCase: ListUsers) {
    super();
  }

  async handle(): Promise<HttpResponse> {
    const result = await this.listUsersUseCase.execute();

    return success(
      { data: result }
    );
  }
}
