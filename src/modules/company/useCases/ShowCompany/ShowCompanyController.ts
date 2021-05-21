import { Request, Response } from "express";
import { ShowCompanyService } from "./services/ShowCompanyService";

export class ShowCompanyController {
	constructor(
		private showCompanyUseCase: ShowCompanyService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params
		
		try {			
			await this.showCompanyUseCase.execute(id)

			return response.status(201).send()
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error'
			})
		}
	}
}