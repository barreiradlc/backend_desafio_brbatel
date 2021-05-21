import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { PostgresCompanyRepository } from "@modules/company/repositories/implementations/PostgresCompanyRepository"
import { CreateCompanyService } from "../../CreateCompany/services/CreateCompanyUseCase"
import { UpdateCompanyService } from "../services/UpdateCompanyUseCase"


describe('UPDATE COMPANY', () => {
  it('Should be able to update a company', async () => {
    const postgresCompanyRepository = new PostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      postgresCompanyRepository,
    )
    const updateCompany = new UpdateCompanyService(
      postgresCompanyRepository,
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

})


