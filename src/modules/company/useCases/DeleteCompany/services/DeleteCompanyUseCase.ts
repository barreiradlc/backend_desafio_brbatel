import { ICompaniesRepository } from "@modules/company/repositories/ICompanyRepository"

export class DeleteCompanyService {
	constructor(
		private companiesRepository: ICompaniesRepository
	) {

	}

	async execute(id: string) {
		const companyAlreadyExists = await this.companiesRepository.findById(id)

		if (!companyAlreadyExists) {
			throw new Error("Company don't exists.")
		}

		const company = await this.companiesRepository.delete(id)		

		return company
	}
}