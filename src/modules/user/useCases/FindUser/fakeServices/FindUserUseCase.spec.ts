import { FakePostgresUserRepository } from "@modules/user/repositories/fakes/FakePostgresUserRepository"
import { SignUpService } from "../../SignUpUser/services/SignUpUserUseCase"
import { FindUserService } from "../services/FindUserUseCase"

describe('SIGN IN', () => {
  it('Should be able to find user', async () => {
    const fakePostgresUserRepository = new FakePostgresUserRepository()

    const signUpService = new SignUpService(
      fakePostgresUserRepository,
    )
    
    const signInService = new FindUserService(
      fakePostgresUserRepository,
    )

    await signUpService.execute({
      name: "Ronaldo 123",
      email: 'ro.naldo@gmail.com',
      username: 'ronaldin',
      password: 'brilha_no_corintia'
    })

    const user = await signInService.execute('ro.naldo@gmail.com')

    expect(user).toHaveProperty('id')
  })  

})


