import { IANUAL_EARNINGS } from "@modules/company/entities/Company"
import { FakePostgresCompanyRepository } from "@modules/company/repositories/fakes/FakePostgresCompanyRepository"
import { CreateCompanyService } from "../../CreateCompany/services/CreateCompanyUseCase"
import { ListCompanyService } from "../services/ListCompanyUseCase"


describe('LIST COMPANIES', () => {
  it('Should be able to show companies based on limit', async () => {
    const fakePostgresCompanyRepository = new FakePostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      fakePostgresCompanyRepository,
    )
    const listCompany = new ListCompanyService(
      fakePostgresCompanyRepository,
    )

    await createCompany.execute({
      name: "Monstros SA",
      cnpj: "12345678901234",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })
    
    await createCompany.execute({
      name: "Monstros SA",
      cnpj: "12345678901235",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })
    
    await createCompany.execute({
      name: "Monstros SO",
      cnpj: "12345678901236",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })

    const {nodes, total} = await listCompany.execute({ query: '', page: 1, take: 2 })
    
    expect(total).toBe(2)
    expect(nodes.length).toBe(2)
  })

  it('Should be able to list companies based on criteria', async () => {
    const fakePostgresCompanyRepository = new FakePostgresCompanyRepository()

    const createCompany = new CreateCompanyService(
      fakePostgresCompanyRepository,
    )
    const listCompany = new ListCompanyService(
      fakePostgresCompanyRepository,
    )

    await createCompany.execute({
      name: "Monstros SA",
      cnpj: "12345678901234",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })
    
    await createCompany.execute({
      name: "Monstros SO",
      cnpj: "12345678901236",
      anual_earnings: IANUAL_EARNINGS.BELOW_10_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })
    
    await createCompany.execute({
      name: "Santa Joaquina pamonharia",
      cnpj: "12345678901237",
      anual_earnings: IANUAL_EARNINGS.FROM_200_TO_500_MIL,
      about: "As experiências acumuladas demonstram que o consenso sobre a necessidade de qualificação assume importantes posições no estabelecimento de todos os recursos funcionais envolvidos."
    })

    const {nodes, total} = await listCompany.execute({ query: 'Monstros ', page: 1, take: 2 })
    
    expect(total).toBe(2)
    expect(nodes.length).toBe(2)
  })


})


