import { ICompaniesRepository } from "@modules/company/repositories/ICompanyRepository"
import { IUpdateCompanyRequestDTO } from "../UpdateCompanyDTO"

export class UpdateCompanyService {
	constructor(
		private companiesRepository: ICompaniesRepository
	) {

	}

	async execute(data: IUpdateCompanyRequestDTO) {
		let companyFound = await this.companiesRepository.findById(data.id)

		if (!companyFound) {
			throw new Error("Company don't exists.")
		}

		const updatedCompany = await this.companiesRepository.update(data.id, data)		

		return updatedCompany
	}
}