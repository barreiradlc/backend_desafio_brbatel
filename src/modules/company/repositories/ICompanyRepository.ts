import { Company } from "../entities/Company";
import { ICreateCompanyRequestDTO } from "../useCases/CreateCompany/CreateCompanyDTO";
import { IUpdateCompanyRequestDTO } from "../useCases/UpdateCompany/UpdateCompanyDTO";


export interface ICompaniesRepository {
	findById(id: string): Promise<Company>;
	delete(id: string): Promise<void>;
	findByCNPJ(cnpj: string): Promise<Company>;
	save(company: IUpdateCompanyRequestDTO): Promise<Company>;
	create(company: ICreateCompanyRequestDTO): Promise<Company>;
}