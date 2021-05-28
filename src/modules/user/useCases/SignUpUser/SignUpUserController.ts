import { Request, Response } from "express";
import { SignUpService } from "./services/SignUpUserUseCase";

export class SignUpUserController {
	constructor(
		private signUpUseCase: SignUpService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name,
			username,
			email,
			password } = request.body

		try {
			const user = await this.signUpUseCase.execute({
				name,
				username,
				email,
				password
			})

			return response.json(user)
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error'
			})
		}
	}
}