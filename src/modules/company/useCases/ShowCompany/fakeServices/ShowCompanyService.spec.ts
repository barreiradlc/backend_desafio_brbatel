import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { FakePostgresCompanyRepository } from "@modules/company/repositories/fakes/FakePostgresCompanyRepository"
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository"
import { CreateCompanyService } from "../../CreateCompany/services/CreateCompanyUseCase"
import { ShowCompanyService } from "../services/ShowCompanyService"

describe('SHOW COMPANY', () => {
  it('Should be able to show a company', async () => {
    const fakePostgresCompanyRepository = new FakePostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
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

    const companySaved = await showCompany.execute(company.id)

    expect(companySaved).toHaveProperty('id')
  })

})



