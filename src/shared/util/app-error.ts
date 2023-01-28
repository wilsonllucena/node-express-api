class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 401) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };
