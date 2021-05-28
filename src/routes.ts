import { companyRouter } from "@modules/company/company.routes";
import { authRouter } from "@modules/user/auth.routes";
import { Router } from "express";

const routes = Router()

routes.use('/company', companyRouter)
routes.use('/auth', authRouter)

export default routes