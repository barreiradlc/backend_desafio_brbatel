
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import { Service } from "./services/CreateCompanyUseCase";

const postgresCompanyRepository = new PostgresCompanyRepository()

const createCompanyUseCase = new Service(
	postgresCompanyRepository,	
)

const createCompanyController = new CreateCompanyController(
	createCompanyUseCase
)

export { createCompanyUseCase, createCompanyController }