import { Request, Response } from "express";
import { SignInService } from "./services/SignInUserUseCase";

export class SignInUserController {
	constructor(
		private signInUseCase: SignInService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body

		try {
			const user = await this.signInUseCase.execute({
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