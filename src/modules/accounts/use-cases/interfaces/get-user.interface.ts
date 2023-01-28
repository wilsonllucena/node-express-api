import { Either } from "@src/shared/errors/either";

type UserResponse = {
  user: any;
};

type ResponseCustom = Either<Error, UserResponse>;

type GetUser = {
  execute(id: number): Promise<ResponseCustom>;
}

export { GetUser, ResponseCustom };
