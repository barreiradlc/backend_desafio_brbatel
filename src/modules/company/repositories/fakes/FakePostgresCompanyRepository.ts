import { Company } from "@modules/company/entities/Company"
import { ICreateCompanyRequestDTO } from "@modules/company/useCases/CreateCompany/CreateCompanyDTO"
import { ICompaniesRepository } from "../ICompanyRepository"


export class FakePostgresCompanyRepository implements ICompaniesRepository {
	private companies: Company[] = []

  constructor(){}

	async delete(id: string): Promise<void> {
		this.companies = this.companies.filter(c => c.id !== id)
		return
	}

	async findById(id: string): Promise<Company> {
		const findCompany = this.companies.find(company => company.id === id)
		return findCompany
	}

	async findByCNPJ(cnpj: string): Promise<Company> {
		const findCompany = this.companies.find(company => company.cnpj === cnpj)
		return findCompany
	}

	async save(company: Company): Promise<Company> {
		const newCompanies = this.companies.map((item: Company) => {
			if(company.id === item.id){
				return {
					...company,
					...item
				}
			}
			return item
		})
		this.companies = newCompanies
		return company
	}
	
  async create(company: ICreateCompanyRequestDTO): Promise<Company> {
		const newCompany = new Company()
		Object.assign(newCompany, company )

		this.companies.push(newCompany)

		return newCompany
	}
}