import { ICompaniesRepository } from "@modules/company/repositories/ICompanyRepository"
import { ICreateCompanyRequestDTO } from "../CreateCompanyDTO"

export class CreateCompanyService {
	constructor(
		private companiesRepository: ICompaniesRepository
	) {

	}

	async execute(data: ICreateCompanyRequestDTO) {
		const companyAlreadyExists = await this.companiesRepository.findByCNPJ(data.cnpj)

		if (companyAlreadyExists) {
			throw new Error('Company already exists.')
		}

		const company = await this.companiesRepository.create(data)		

		return company
	}
}