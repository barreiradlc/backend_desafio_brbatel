import { Request, Response } from "express";
import { UpdateCompanyService } from "./services/UpdateCompanyUseCase";

export class UpdateCompanyController {
	constructor(
		private updateCompanyUseCase: UpdateCompanyService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { id } = request.params
		const { 
			name,
			cnpj,
			anual_earnings,
			about } = request.body
			
		try {

			const company = await this.updateCompanyUseCase.execute({
				id,
				name,
				cnpj,
				anual_earnings,
				about
			})

			return response.json(company)
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error'
			})
		}
	}
}