import { success } from '../../../shared/helpers';
import {
  BaseController,
  HttpResponse,
} from '../../../shared/protocols';

export class ListUserController extends BaseController {
  async handle(): Promise<HttpResponse> {
    return success(
      { data: [] }
    );
  }
}
