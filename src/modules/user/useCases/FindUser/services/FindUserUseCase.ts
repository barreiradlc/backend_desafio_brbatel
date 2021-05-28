import { IUserRepository } from "@modules/user/repositories/IUserRepository"

export class FindUserService {
	constructor(
		private usersRepository: IUserRepository
	) {

	}

	async execute(email: string) {
		const user = await this.usersRepository.findByEmail(email)
		return user
	}
}