import { User } from "../entities/User";
import { ISignInRequestDTO } from "../useCases/SignInUser/ISignInUserDTO";
import { ISignUpRequestDTO } from "../useCases/SignUpUser/ISignUpUserDTO";

export interface IUserRepository {
	create(data: ISignUpRequestDTO): Promise<User>;
	findByEmail(email: string): Promise<User>;
}