import { FakePostgresUserRepository } from "@modules/user/repositories/fakes/FakePostgresUserRepository"
import { SignUpService } from "../services/SignUpUserUseCase"

describe('SIGN UP', () => {
  it('Should be able to signUp a new user', async () => {
    const fakePostgresUserRepository = new FakePostgresUserRepository()

    const signUpService = new SignUpService(
      fakePostgresUserRepository,
    )

    const user = await signUpService.execute({
      name: "Ronaldo 123",
      email: 'ro.naldo@gmail.com',
      username: 'ronaldin',
      password: 'brilha_no_corintia'
    })

    expect(user).toHaveProperty('id')
  })
  
  it('Should NOT be able to signUp a duplicate user', async () => {
    try {
      const fakePostgresUserRepository = new FakePostgresUserRepository()

      const signUpService = new SignUpService(
        fakePostgresUserRepository,
      )

      await signUpService.execute({
        name: "Ronaldo 123",
        email: 'ro.naldo@gmail.com',
        username: 'ronaldin',
        password: 'brilha_no_corintia'
      })
      
      await signUpService.execute({
        name: "Ronaldo 123",
        email: 'ro.naldo@gmail.com',
        username: 'ronaldin',
        password: 'brilha_no_corintia'
      })

    } catch (error) {
      expect(error).toBeInstanceOf(Error)      
    }
  })

  

})


