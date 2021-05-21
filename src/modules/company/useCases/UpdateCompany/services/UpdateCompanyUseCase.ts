import { ICompaniesRepository } from "@modules/company/repositories/ICompanyRepository"
import { IUpdateCompanyRequestDTO } from "../UpdateCompanyDTO"

export class UpdateCompanyService {
	constructor(
		private companiesRepository: ICompaniesRepository
	) {

	}

	async execute(data: IUpdateCompanyRequestDTO) {
		const companyAlreadyExists = await this.companiesRepository.findById(data.id)

		if (!companyAlreadyExists) {
			throw new Error("Company don't exists.")
		}

		const company = await this.companiesRepository.save(data)		

		return company
	}
}