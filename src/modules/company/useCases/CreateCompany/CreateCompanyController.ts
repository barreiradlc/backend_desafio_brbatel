import { Request, Response } from "express";
import { CreateCompanyService } from "./services/CreateCompanyUseCase";

export class CreateCompanyController {
	constructor(
		private createCompanyUseCase: CreateCompanyService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name,
			cnpj,
			anual_earnings,
			about } = request.body

		try {
			const company = await this.createCompanyUseCase.execute({
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