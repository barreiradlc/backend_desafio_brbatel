
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository";
import { DeleteCompanyController } from "./DeleteCompanyController";
import { DeleteCompanyService } from "./services/DeleteCompanyUseCase";

const postgresCompanyRepository = new PostgresCompanyRepository()

const deleteCompanyUseCase = new DeleteCompanyService(
	postgresCompanyRepository,	
)

const deleteCompanyController = new DeleteCompanyController(
	deleteCompanyUseCase
)

export { deleteCompanyUseCase, deleteCompanyController }