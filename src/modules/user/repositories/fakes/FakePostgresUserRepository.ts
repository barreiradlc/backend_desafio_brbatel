import { EntityRepository } from "typeorm"
import {  IUserRepository } from "../IUserRepository"
import { User } from "@modules/user/entities/User"
import { ISignUpRequestDTO } from "@modules/user/useCases/SignUpUser/ISignUpUserDTO"

@EntityRepository(User)
export class FakePostgresUserRepository implements IUserRepository{
	private users: User[] = []	

  async signUp({
		name,
		username,
		email,
		password
	}: ISignUpRequestDTO): Promise<User> {
		const newUser = new User()

		Object.assign(newUser, {
			name,
			username,
			email,
			password
		})

		this.users.push(newUser)
		
		return newUser
	}

	async findByEmail(
		email: string
	): Promise<User> {
		const user = this.users.find(u => u.email === email )
		return user
	}

}