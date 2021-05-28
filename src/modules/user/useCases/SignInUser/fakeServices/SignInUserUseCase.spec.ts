import { FakePostgresUserRepository } from "@modules/user/repositories/fakes/FakePostgresUserRepository"
import { SignUpService } from "../../SignUpUser/services/SignUpUserUseCase"
import { SignInService } from "../services/SignInUserUseCase"

describe('SIGN IN', () => {
  it('Should be able to login user', async () => {
    const fakePostgresUserRepository = new FakePostgresUserRepository()

    const signUpService = new SignUpService(
      fakePostgresUserRepository,
    )
    
    const signInService = new SignInService(
      fakePostgresUserRepository,
    )

    await signUpService.execute({
      name: "Ronaldo 123",
      email: 'ro.naldo@gmail.com',
      username: 'ronaldin',
      password: 'brilha_no_corintia'
    })

    const user = await signInService.execute({
      email: 'ro.naldo@gmail.com',      
      password: 'brilha_no_corintia'
    })

    expect(user).toHaveProperty('id')
  })  

})


