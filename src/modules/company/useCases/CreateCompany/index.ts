
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import { CreateCompanyService } from "./services/CreateCompanyUseCase";

const postgresCompanyRepository = new PostgresCompanyRepository()

const createCompanyUseCase = new CreateCompanyService(
	postgresCompanyRepository,	
)

const createCompanyController = new CreateCompanyController(
	createCompanyUseCase
)

export { createCompanyUseCase, createCompanyController }