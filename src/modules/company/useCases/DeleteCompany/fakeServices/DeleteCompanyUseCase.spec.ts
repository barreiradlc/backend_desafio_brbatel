import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { FakePostgresCompanyRepository } from "@modules/company/repositories/fakes/FakePostgresCompanyRepository"
import { CreateCompanyService } from "../../CreateCompany/services/CreateCompanyUseCase"
import { ShowCompanyService } from "../../ShowCompany/services/ShowCompanyService"
import { DeleteCompanyService } from "../services/DeleteCompanyUseCase"


describe('DELETE COMPANY', () => {
  it('Should be able to delete a company', async () => {
    const fakePostgresCompanyRepository = new FakePostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      fakePostgresCompanyRepository,
    )
    const deleteCompany = new DeleteCompanyService(
      fakePostgresCompanyRepository,
    )
    const showCompany = new ShowCompanyService(
      fakePostgresCompanyRepository,
    )

    const company = await createCompany.execute({
      name: "Monstros SA",
      cnpj: "12345678901234",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })

    await deleteCompany.execute(company.id)
    const companySaved = await showCompany.execute(company.id)

    expect(companySaved).toBe(undefined)
  })

  it('Should be able to throw an exception on delete a company', async () => {
    try {
      const fakePostgresCompanyRepository = new FakePostgresCompanyRepository()

      const createCompany = new CreateCompanyService(
        fakePostgresCompanyRepository,
      )
      const deleteCompany = new DeleteCompanyService(
        fakePostgresCompanyRepository,
      )      

      await createCompany.execute({
        name: "Monstros SA",
        cnpj: "12345678901234",
        anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
        about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
      })

      await deleteCompany.execute("id inválido")

    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

})





