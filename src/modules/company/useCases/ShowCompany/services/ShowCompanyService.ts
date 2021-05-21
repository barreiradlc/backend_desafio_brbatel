import { ICompaniesRepository } from "@modules/company/repositories/ICompanyRepository"

export class ShowCompanyService {
	constructor(
		private companiesRepository: ICompaniesRepository
	) {

	}

	async execute(id: string) {
		const company = await this.companiesRepository.findById(id)
		return company
	}
}