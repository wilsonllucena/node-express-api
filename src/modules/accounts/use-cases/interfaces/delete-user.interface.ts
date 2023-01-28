import { Either } from "@src/shared/errors/either";

type ResponseCustom = Either<Error, null>;

type DeleteUser = {
  execute(id: number): Promise<ResponseCustom>;
}

export { DeleteUser, ResponseCustom };
