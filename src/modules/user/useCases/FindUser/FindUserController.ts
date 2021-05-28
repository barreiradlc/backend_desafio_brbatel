import { Request, Response } from "express";
import { FindUserService } from "./services/FindUserUseCase";

export class FindUserController {
	constructor(
		private findUserUseCase: FindUserService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body

		try {
			const user = await this.findUserUseCase.execute(email)

			return response.json(user)
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error'
			})
		}
	}
}