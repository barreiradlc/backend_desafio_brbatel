
import { PostgresUserRepository } from "@modules/user/repositories/implementations/PostgresUserRepository";
import { SignInService } from "./services/SignInUserUseCase";
import { SignInUserController } from "./SignInUserController";

const postgresUserRepository = new PostgresUserRepository()

const signInUserUseCase = new SignInService(
	postgresUserRepository,
)

const signInUserController = new SignInUserController(
	signInUserUseCase
)

export { signInUserUseCase, signInUserController }