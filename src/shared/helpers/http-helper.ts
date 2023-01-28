import { ServerError } from '../errors';
import { HttpResponse } from '../protocols/http';

export const badRequest = (error: any, statusCode = 400): HttpResponse => ({
  statusCode,
  body: error,
});

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export const success = (data?: any, statusCode: number = 200): HttpResponse => ({
  statusCode,
  body: data,
});
