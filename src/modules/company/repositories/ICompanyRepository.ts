import { Company } from "../entities/Company";
import { ICreateCompanyRequestDTO } from "../useCases/CreateCompany/CreateCompanyDTO";
import { IListCompanyRequestDTO } from "../useCases/ListCompany/IListCompanyDTO";
import { IUpdateCompanyRequestDTO } from "../useCases/UpdateCompany/UpdateCompanyDTO";


export interface ICompaniesRepository {
	findById(id: string): Promise<Company>;
	find(data: IListCompanyRequestDTO): Promise<Company[]>;
	delete(id: string): Promise<void>;
	findByCNPJ(cnpj: string): Promise<Company>;
	save(company: IUpdateCompanyRequestDTO): Promise<Company>;
	update(id: string, company: IUpdateCompanyRequestDTO): Promise<Company>;
	create(company: ICreateCompanyRequestDTO): Promise<Company>;
}