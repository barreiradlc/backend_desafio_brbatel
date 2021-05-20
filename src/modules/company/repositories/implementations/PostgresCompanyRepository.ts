import { Company } from "@modules/company/entities/Company"
import { ICreateCompanyRequestDTO } from "@modules/company/useCases/CreateCompany/CreateCompanyDTO"
import { ICompaniesRepository } from "../ICompanyRepository"


export class PostgresCompanyRepository implements ICompaniesRepository {
	private companies: Company[] = []

  constructor(){}

	async findByCNPJ(cnpj: string): Promise<Company> {
		const findCompany = this.companies.find(company => company.cnpj === cnpj)
		return findCompany
	}

	async save(company: Company): Promise<void> {}
	
  async create(company: ICreateCompanyRequestDTO): Promise<Company> {
		const newCompany = new Company()
		Object.assign(newCompany, company )

		this.companies.push(newCompany)

		return newCompany
	}
}