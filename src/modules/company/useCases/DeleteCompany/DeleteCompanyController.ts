import { Request, Response } from "express";
import { DeleteCompanyService } from "./services/DeleteCompanyUseCase";

export class DeleteCompanyController {
	constructor(
		private deleteCompanyUseCase: DeleteCompanyService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params

		try {
			await this.deleteCompanyUseCase.execute(id)

			return response.status(201).send()
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error'
			})
		}
	}
}