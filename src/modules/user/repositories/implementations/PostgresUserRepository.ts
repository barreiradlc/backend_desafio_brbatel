import { EntityRepository, getRepository, Repository } from "typeorm"
import {  IUserRepository } from "../IUserRepository"
import { User } from "@modules/user/entities/User"
import { ISignUpRequestDTO } from "@modules/user/useCases/SignUpUser/ISignUpUserDTO"

@EntityRepository(User)
export class PostgresUserRepository implements IUserRepository{
	private ormRepository: Repository<User>

	constructor(){
		this.ormRepository = getRepository(User)
	}
	

  async signUp({
		name,
		username,
		email,
		password
	}: ISignUpRequestDTO): Promise<User> {
		const user = await this.ormRepository.create({
			name,
			username,
			email,
			password
		})
		
		return user
	}

	async findByEmail(
		email: string
	): Promise<User> {
		const user = this.ormRepository.findOne({ email })
		return user
	}

}