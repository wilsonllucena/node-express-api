import { Either } from "@src/shared/errors/either";
import {UserInputDTO} from "../../dtos/user.dto";

type UserResponse = {
  id: number;
};

type ResponseCustom = Either<Error, UserResponse>;

type CreateUser = {
  execute(user: UserInputDTO): Promise<ResponseCustom>;
}

export { CreateUser, ResponseCustom };
