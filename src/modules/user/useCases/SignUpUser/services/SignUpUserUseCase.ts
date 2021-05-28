import { hash } from "bcryptjs";
import { IUserRepository } from "@modules/user/repositories/IUserRepository"
import { ISignUpRequestDTO } from "../ISignUpUserDTO"

export class SignUpService {
	constructor(
		private usersRepository: IUserRepository
	) {

	}

	async execute(data: ISignUpRequestDTO) {
		const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

		if (userAlreadyExists) {
			throw new Error('User already exists.')
		}

		const hashedPassword = data.password && await hash(String(data.password), 8)

		const user = await this.usersRepository.signUp({
			...data,
			password: hashedPassword
		})		

		return user
	}
}