
export interface HttpResponse   {
  statusCode: number;
  body?: any;
}

export interface HttpRequest {
  query?: any;
  params?: any;
  body?: any;
}
