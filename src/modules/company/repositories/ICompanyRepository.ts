import { Company } from "../entities/Company";
import { ICreateCompanyRequestDTO } from "../useCases/CreateCompany/CreateCompanyDTO";


export interface ICompaniesRepository {
	findByCNPJ(cnpj: string): Promise<Company>;
	save(company: Company): Promise<void>;
	create(company: ICreateCompanyRequestDTO): Promise<Company>;
}