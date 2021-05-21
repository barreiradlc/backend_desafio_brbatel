import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository"
import { CreateCompanyService } from "../../CreateCompany/services/CreateCompanyUseCase"
import { ShowCompanyService } from "../services/ShowCompanyService"

describe('SHOW COMPANY', () => {
  it('Should be able to list a company', async () => {
    const postgresCompanyRepository = new PostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      postgresCompanyRepository,
    )
    const showCompany = new ShowCompanyService(
      postgresCompanyRepository,
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



