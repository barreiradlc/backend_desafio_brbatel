
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository";
import { ShowCompanyController } from "./ShowCompanyController";
import { ShowCompanyService } from "./services/ShowCompanyService";

const postgresCompanyRepository = new PostgresCompanyRepository()

const showCompanyUseCase = new ShowCompanyService(
	postgresCompanyRepository,	
)

const showCompanyController = new ShowCompanyController(
	showCompanyUseCase
)

export { showCompanyUseCase, showCompanyController }