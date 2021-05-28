import { Router } from "express";
import { findUserController } from "./useCases/FindUser";
import { signInUserController } from "./useCases/SignInUser";
import { signUpUserController } from "./useCases/SignUpUser";

const authRouter = Router();

authRouter.post('/access', (request, response) => (findUserController.handle(request, response)));
authRouter.post('/', (request, response) => (signUpUserController.handle(request, response)));
authRouter.post('/login', (request, response) => (signInUserController.handle(request, response)));

export { authRouter }