import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { FakePostgresCompanyRepository } from "@modules/company/repositories/fakes/FakePostgresCompanyRepository"
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository"
import { CreateCompanyService } from "../../CreateCompany/services/CreateCompanyUseCase"
import { UpdateCompanyService } from "../services/UpdateCompanyUseCase"


describe('UPDATE COMPANY', () => {
  it('Should be able to update a company', async () => {
    const fakePostgresCompanyRepository = new FakePostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      fakePostgresCompanyRepository,
    )
    const updateCompany = new UpdateCompanyService(
      fakePostgresCompanyRepository,
    )

    const company = await createCompany.execute({
      name: "Monstros SA",
      cnpj: "12345678901234",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })

    const updatedCompany = await updateCompany.execute({
      id: company.id,
      name: "Pastelaria do Beiçola",
      cnpj: "12345678901234",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })

    expect(updatedCompany.name).toBe("Pastelaria do Beiçola")
  })

  it('Should throw an exception if company not found', async () => {
    try {
      const fakePostgresCompanyRepository = new FakePostgresCompanyRepository()

      const createCompany = new CreateCompanyService(
        fakePostgresCompanyRepository,
      )
      const updateCompany = new UpdateCompanyService(
        fakePostgresCompanyRepository,
      )

      const company = await createCompany.execute({
        name: "Monstros SA",
        cnpj: "12345678901234",
        anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
        about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
      })

      await updateCompany.execute({
        id: "abc",
        name: "Pastelaria do Beiçola",
        cnpj: "12345678901235",
        anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
        about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
      })
    } catch (error) {      
      expect(error).toBeInstanceOf(Error)
    }
  })

})


