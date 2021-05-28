
import { PostgresUserRepository } from "@modules/user/repositories/implementations/PostgresUserRepository";
import { SignUpService } from "./services/SignUpUserUseCase";
import { SignUpUserController } from "./SignUpUserController";

const postgresUserRepository = new PostgresUserRepository()

const signUpUserUseCase = new SignUpService(
	postgresUserRepository,	
)

const signUpUserController = new SignUpUserController(
	signUpUserUseCase
)

export { signUpUserUseCase, signUpUserController }