import { Router } from "express";
import { signUpUserController } from "./useCases/SignUpUser";

const authRouter = Router();

authRouter.post('/', (request, response) => (signUpUserController.handle(request, response)));

export { authRouter }