export const regions = ["Central", "Norte", "Noroeste", "Leste", "Oeste"] as const
export type Region = typeof regions[number]
export type SupportLocation = {
  name: string
  address: string
  phones?: string[]
  hours?: string
  note?: string
  email?: string
  creas?: boolean
}

const weekday = "Segunda a sexta-feira, das 8h às 17h"
const weekday18 = "Segunda a sexta-feira, das 8h às 18h"

export const supportLocations: Record<Region, SupportLocation[]> = {
  Central: [
    {
      name: "Casa da Mulher Brasileira",
      address: "Rua Vieira Ravasco, 26, Cambuci, São Paulo (SP)",
      phones: ["(11) 3275-8000"],
      hours: "24 horas",
      note: "Atendimento em Libras para mulheres surdas na Central de Intermediação.",
    },
    {
      name: "Delegacia de Defesa da Mulher (DDM), Ministério Público, Defensoria Pública, Tribunal de Justiça e Alojamento Provisório",
      address: "Rua Vieira Ravasco, 26 – Cambuci/Centro – São Paulo/SP",
      phones: ["(11) 3275-8000"],
      hours: "Emergências 24 horas; Defensoria Pública das 10h00 às 17h00",
      note: "Atendimento em Libras na Central de Intermediação. Prevenção, proteção e investigação de crimes de violência doméstica, orientação jurídica e alojamento de acolhimento provisório para casos de iminência de morte.",
    },
    {
      name: "CDCM Francisca Franco",
      address: "Rua Conselheiro Ramalho, 93, Bela Vista – São Paulo (SP)",
      phones: ["(11) 3106-1013"],
      hours: "Segunda a sexta-feira, das 8h30 às 17h30",
    },
  ],
  Norte: [
    { name: "Casa da Mulher da Brasilândia", address: "Rua Sílvio Bueno Peruche, 538 – Brasilândia", phones: ["(11) 3983-4294"], hours: weekday18 },
    { name: "Casa da Mulher de Perus", address: "Rua Aurora Boreal, 43 – Vila Perus", phones: ["(11) 3917-5955"], hours: weekday18 },
    { name: "Casa da Mulher Cachoeirinha", address: "Av. Deputado Emilio Carlos, 3.460", phones: ["(11) 2361-5551"], hours: weekday18 },
    { name: "Casa da Mulher – Casa Mariás", address: "Rua Soldado José Antônio Moreira, 546, Jardim Japão – São Paulo, SP – CEP 02143-060", phones: ["(11) 3294-0066"], hours: weekday },
    { name: "CDCM Centro de Integração Social da Mulher II (SMADS)", address: "Rua Ferreira de Almeida, 23 – Jd. das Laranjeiras", hours: "Das 8h às 17h" },
    { name: "CREAS Casa Verde", address: "Rua Crisolia, 53 – Jardim Primavera / Bairro do Limão", phones: ["(11) 3856-9463"], creas: true },
    { name: "CREAS Freguesia do Ó", address: "Rua Parapuã, 160", phones: ["(11) 3978-2984", "(11) 3977-8925", "(11) 5413-6419"], creas: true },
    { name: "CREAS Pirituba", address: "Rua Comendador Feiz Zarzur, 15 A", phones: ["(11) 3972-4171", "(11) 3972-2855"], creas: true },
    { name: "CREAS Perus", address: "Rua Gonçalves de Andrade, 369", phones: ["(11) 3917-6380", "(11) 3911-5211", "(11) 3918-5410", "(11) 3918-5008"], creas: true },
    { name: "CREAS Santana", address: "Rua Voluntários da Pátria, 4649", phones: ["(11) 4571-0687", "(11) 4571-0694"], creas: true },
    { name: "CREAS Tremembé", address: "Avenida Mário Pernambuco, 43", phones: ["(11) 2261-1314", "(11) 2203-1443"], creas: true },
    { name: "CREAS Vila Maria", address: "Rua Soldado José Antônio Moreira, 546", phones: ["(11) 2201-5807", "(11) 2949-6495"], creas: true },
  ],
  Noroeste: [
    {
      name: "Casa da Mulher Perus (antigo CCM Perus)",
      address: "Rua Aurora Boreal, 43 – Vila Nova Perus – São Paulo/SP",
      phones: ["(11) 3917-5955"],
      email: "smdhcccmperus@prefeitura.sp.gov.br",
      hours: "Segunda a sexta-feira, das 08h00 às 17h00",
      note: "Serviço de portas abertas, não necessita agendamento.",
    },
  ],
  Leste: [
    { name: "Casa da Mulher – CDCM Marielle Franco", address: "Rua Cel. Carlos Dourado, 07, Vila Marilena", phones: ["(11) 5050-1437"], hours: weekday },
    { name: "Casa da Mulher – CRCM Itaquera", address: "Rua Ibiajara, 495 – Itaquera", phones: ["(11) 2073-4863"], hours: weekday },
    { name: "Casa da Mulher – CDCM São Miguel", address: "Rua Pedro Soares de Andrade, 34, Vila Rosária, São Miguel Paulista", phones: ["(11) 2058-2800"], hours: weekday },
    { name: "Casa da Mulher – CDCM Casa Zizi", address: "Rua Teotônio de Oliveira, nº 101, Vila Ema", phones: ["(11) 2216-7346"], hours: weekday },
    { name: "Casa da Mulher – CDCM Casa Anastácia", address: "Rua Márcio Beck Machado, 106B – Cidade Tiradentes", hours: weekday },
    { name: "Casa da Mulher Casa de Isabel – CDCM Naná Serafim", address: "Rua Professor Zeferino Ferraz, 396 – Itaim Paulista", phones: ["(11) 2156-3477"], hours: weekday },
    { name: "Casa da Mulher – CDCM Casa Viviane Dos Santos", address: "Rua Planície dos Goitacases, 456 – Guaianases", phones: ["(11) 2553-2424"], hours: weekday },
    { name: "CDCM Casa Cidinha Kopcak", address: "Rua Margarida Cardoso dos Santos, 500 – São Mateus", hours: weekday },
    { name: "CDCM Margarida Maria Alves", address: "Rua Sabbado d’Angelo, 2085, 2º andar – Vila Brasil", phones: ["(11) 2935-7324"], hours: weekday },
    { name: "CDCM Helena Vitoria Fernandes", address: "Rua Coronel Carlos Dourado, 07 – Vila Marilena – Guaianases", hours: weekday },
  ],
  Oeste: [
    { name: "Casa da Mulher 25 de Março", address: "Rua Melo Palheta, 32, Água Branca", phones: ["(11) 3106-1100"], hours: "Das 8h às 18h" },
    { name: "CDCM Casa Marcia Martins (SMADS)", address: "Rua Canio Rizzo, 285 – Jardim Trussardi" },
  ],
}
