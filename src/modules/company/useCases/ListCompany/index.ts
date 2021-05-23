
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository";
import { ListCompanyController } from "./ListCompanyController";
import { ListCompanyService } from "./services/ListCompanyUseCase";


const postgresCompanyRepository = new PostgresCompanyRepository()

const listCompanyUseCase = new ListCompanyService(
	postgresCompanyRepository,	
)

const listCompanyController = new ListCompanyController(
	listCompanyUseCase
)

export { listCompanyUseCase, listCompanyController }