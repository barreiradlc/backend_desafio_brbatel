import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IUserRepository } from "@modules/user/repositories/IUserRepository"
import { ISignInRequestDTO } from "../ISignInUserDTO";
import AuthConfig from "@config/AuthConfig";

export class SignInService {
	constructor(
		private usersRepository: IUserRepository
	) {

	}

	async execute({ email, password }: ISignInRequestDTO) {
		const user = await this.usersRepository.findByEmail(email)

		if (!user) {
			throw new Error('User not found.')
		}

		const passwordMatched = await compare(password, user.password) 

		if(!passwordMatched){
				throw new Error("Incorrect email/password combination")
		}

		const { secret, expiresIn } = AuthConfig.jwt

		const token = sign({}, secret, {
				subject: String(user.id),
				expiresIn
		})

		return {
				...user,
				token
		};
	}
}