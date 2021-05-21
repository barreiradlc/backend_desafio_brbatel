
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository";
import { UpdateCompanyController } from "./UpdateCompanyController";
import { UpdateCompanyService } from "./services/UpdateCompanyUseCase";

const postgresCompanyRepository = new PostgresCompanyRepository()

const updateCompanyUseCase = new UpdateCompanyService(
	postgresCompanyRepository,	
)

const updateCompanyController = new UpdateCompanyController(
	updateCompanyUseCase
)

export { updateCompanyUseCase, updateCompanyController }