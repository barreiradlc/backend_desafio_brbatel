import { User } from "../entities/User";
import { ISignUpRequestDTO } from "../useCases/SignUpUser/ISignUpUserDTO";

export interface IUserRepository {
	signUp(data: ISignUpRequestDTO): Promise<User>;
	findByEmail(email: string): Promise<User>;
}