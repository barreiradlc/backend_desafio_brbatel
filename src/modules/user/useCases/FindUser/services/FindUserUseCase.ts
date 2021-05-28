import { IUserRepository } from "@modules/user/repositories/IUserRepository"
import { classToClass } from "class-transformer"

export class FindUserService {
	constructor(
		private usersRepository: IUserRepository
	) {

	}

	async execute(email: string) {
		const user = await this.usersRepository.findByEmail(email)
		return classToClass(user)
	}
}