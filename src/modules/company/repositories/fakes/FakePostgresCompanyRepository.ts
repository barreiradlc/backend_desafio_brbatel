import User from "@entities/User";

import { ICreateUserRequestDTO } from "@modules/user/useCases/CreateUser/CreateUserDTO";
import { ObjectID } from "mongodb";

import { IUsersRepository } from "../IUsersRepository";

class FakeMongoUsersRepository implements IUsersRepository {
	private users: User[] = []

	async findByEmail(email: string): Promise<User> {
		const findUser = this.users.find(u => u.email === email)
		return findUser
	}

	async save(user: User): Promise<void> {

	}
	
  async create(user: ICreateUserRequestDTO): Promise<User> {
		const newUser = new User()
		Object.assign(newUser, { id: new ObjectID(), ...user  })

		this.users.push(newUser)

		return newUser
	}
}


export { FakeMongoUsersRepository }