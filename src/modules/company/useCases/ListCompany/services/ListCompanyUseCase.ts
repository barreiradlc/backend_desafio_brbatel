import { ICompaniesRepository } from "@modules/company/repositories/ICompanyRepository"
import { IListCompanyRequestDTO } from "../IListCompanyDTO"

export class ListCompanyService {
	constructor(
		private companiesRepository: ICompaniesRepository
	) {

	}

	async execute(data: IListCompanyRequestDTO) {
		let companies = await this.companiesRepository.find(data)
		return companies
	}
}