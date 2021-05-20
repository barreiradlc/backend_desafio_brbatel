import { Request, Response } from "express";
import { Service } from "./services/CreateCompanyUseCase";

export class CreateCompanyController {
	constructor(
		private createCompanyUseCase: Service,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { name,
			cnpj,
			anual_earnings,
			about } = request.body

		try {
			await this.createCompanyUseCase.execute({
				name,
				cnpj,
				anual_earnings,
				about
			})

			return response.status(201).send()
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error'
			})
		}
	}
}