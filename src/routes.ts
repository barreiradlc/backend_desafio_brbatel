import { companyRouter } from "@modules/company/company.routes";
import { Router } from "express";

const routes = Router()

routes.use('/company', companyRouter)

export default routes