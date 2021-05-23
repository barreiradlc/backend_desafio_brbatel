import { Request, Response } from "express";
import { ListCompanyService } from "./services/ListCompanyUseCase";

export class ListCompanyController {
	constructor(
		private listCompanyUseCase: ListCompanyService,
	) { }

	async handle(request: Request, response: Response): Promise<Response> {
		const { query, page, take } = request.query

		try {

			const companies = await this.listCompanyUseCase.execute({
				query,
				page,
				take
			})

			return response.json(companies)
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error'
			})
		}
	}
}