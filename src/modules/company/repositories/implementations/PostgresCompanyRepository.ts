import { ICreateCompanyRequestDTO } from "@modules/company/useCases/CreateCompany/CreateCompanyDTO"
import { EntityRepository, getRepository, ILike, Like, Raw, Repository } from "typeorm"
import { ICompaniesRepository } from "../ICompanyRepository"
import { Company, IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { OPENSSL_VERSION_NUMBER } from "constants"
import { IListCompanyRequestDTO } from "@modules/company/useCases/ListCompany/IListCompanyDTO"

@EntityRepository(Company)
export class PostgresCompanyRepository implements ICompaniesRepository{
	private ormRepository: Repository<Company>
	
	constructor(){
		this.ormRepository = getRepository(Company)
	}

	async delete(id: string): Promise<void> {
		await this.ormRepository.delete(id)
	}

	async findById(id: string): Promise<Company> {
		const findCompany = this.ormRepository.findOne({
			where: { id }
		})
		return findCompany
	}
	
	async find({
		page,
		query,
		take = 10
	}: IListCompanyRequestDTO): Promise<Company[]> {

		console.log(page, take)
		console.log((page * take) - take)

		const findCompanies = await this.ormRepository.find({
			where: {
				name: ILike(`${query}%`)
			},
			take,
			skip: (page * take) - take				
		})

		return findCompanies
	}

	async findByCNPJ(cnpj: string): Promise<Company> {
		const findCompany = await this.ormRepository.findOne({
			where: { cnpj }
		})
		return findCompany
	}

	async save({
		about,
		anual_earnings,
		cnpj,
		name
	}: Company): Promise<Company> {

		const updatedCompany = await this.ormRepository.save({
			about,
			anual_earnings,
			cnpj,
			name	
		})		
		return updatedCompany
	}
	
	async update(
		id: string,{
		about,
		anual_earnings,
		cnpj,
		name
	}: Company): Promise<Company> {

		const updatedCompany = await this.ormRepository.save({
			id,
			about,
			anual_earnings,
			cnpj,
			name	
		})	

		return updatedCompany
	}

  async create({
		about,
		anual_earnings,
		cnpj,
		name
	}: ICreateCompanyRequestDTO): Promise<Company> {
	
		const newCompany = await this.ormRepository.create({ 
			about,
			anual_earnings: IANUAL_EARNINGS[anual_earnings],
			cnpj,
			name 
		})
		console.log({newCompany})

		await this.ormRepository.save(newCompany)

		return newCompany
	}
}