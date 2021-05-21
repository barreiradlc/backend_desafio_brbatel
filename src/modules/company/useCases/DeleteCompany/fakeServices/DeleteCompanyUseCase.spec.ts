import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository"
import { CreateCompanyService } from "../../CreateCompany/services/CreateCompanyUseCase"
import { ShowCompanyService } from "../../ShowCompany/services/ShowCompanyService"
import { DeleteCompanyService } from "../services/DeleteCompanyUseCase"


describe('DELETE COMPANY', () => {
  it('Should be able to delete a company', async () => {
    const postgresCompanyRepository = new PostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      postgresCompanyRepository,
    )
    const deleteCompany = new DeleteCompanyService(
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

    await deleteCompany.execute(company.id)
    const companySaved = await showCompany.execute(company.id)

    expect(companySaved).toBe(undefined)
  })

})





