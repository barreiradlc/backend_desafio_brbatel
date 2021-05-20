import { Router } from "express";
import { createCompanyController } from "@modules/company/useCases/CreateCompany";

const companyRouter = Router()

companyRouter.post('/', (request, response) => (createCompanyController.handle(request, response)))

export { companyRouter }