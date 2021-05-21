import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository"
import { CreateCompanyService } from "../services/CreateCompanyUseCase"


describe('CREATE COMPANY', () => {
  it('Should be able to create a new company', async () => {
    const postgresCompanyRepository = new PostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      postgresCompanyRepository,
    )

    const company = await createCompany.execute({
      name: "Monstros SA",
      cnpj: "12345678901234",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })

    expect(company).toHaveProperty('id')

  })

  it('Should NOT be able to create a new duplicate company', async () => {
    const postgresCompanyRepository = new PostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      postgresCompanyRepository,
    )

    try {
      await createCompany.execute({
        name: "Monstros SA",
        cnpj: "12345678901234",
        anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
        about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
      })
      
      await createCompany.execute({
        name: "Pastelaria do Beiçola",
        cnpj: "12345678901234",
        anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
        about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
      })
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

})


