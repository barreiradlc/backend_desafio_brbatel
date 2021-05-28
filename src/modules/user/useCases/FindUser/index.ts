
import { PostgresUserRepository } from "@modules/user/repositories/implementations/PostgresUserRepository";
import { FindUserController } from "./FindUserController";
import { FindUserService } from "./services/FindUserUseCase";

const postgresUserRepository = new PostgresUserRepository()

const findUserUseCase = new FindUserService(
	postgresUserRepository,
)

const findUserController = new FindUserController(
	findUserUseCase
)

export { findUserUseCase, findUserController }