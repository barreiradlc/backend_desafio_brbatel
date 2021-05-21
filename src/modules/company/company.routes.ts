import { Router } from "express";

import { createCompanyController } from "@modules/company/useCases/CreateCompany";
import { updateCompanyController } from "./useCases/UpdateCompany";
import { deleteCompanyController } from "./useCases/DeleteCompany";

const companyRouter = Router()

companyRouter.post('/', (request, response) => (createCompanyController.handle(request, response)))
companyRouter.put('/', (request, response) => (updateCompanyController.handle(request, response)))

companyRouter.delete('/:id', (request, response) => (deleteCompanyController.handle(request, response)))
companyRouter.get('/:id', (request, response) => (deleteCompanyController.handle(request, response)))

export { companyRouter }