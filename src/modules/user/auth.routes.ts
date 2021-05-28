import { Router } from "express";
import { signInUserController } from "./useCases/SignInUser";
import { signUpUserController } from "./useCases/SignUpUser";

const authRouter = Router();

authRouter.post('/', (request, response) => (signUpUserController.handle(request, response)));
authRouter.post('/login', (request, response) => (signInUserController.handle(request, response)));

export { authRouter }