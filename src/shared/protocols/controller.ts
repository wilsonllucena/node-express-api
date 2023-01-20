import { Request, Response } from 'express';
import { HttpRequest, HttpResponse } from './http';

export abstract class BaseController {
  protected abstract handle(httpRequest?: HttpRequest): Promise<HttpResponse>;
}
