import { Either } from "@src/shared/errors/either";
import {UserInputDTO} from "../../dtos/user.dto";

type UserResponse = {
  id: number;
};

type ResponseCustom = Either<Error, UserResponse>;

type UpdateUser = {
  execute(id: number, user: UserInputDTO): Promise<ResponseCustom>;
}

export { UpdateUser, ResponseCustom };
