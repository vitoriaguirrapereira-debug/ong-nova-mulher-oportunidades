export type Opportunity = {
  id: string
  title: string
  track: string
  institution: string
  subarea: string
  description: string
  url: string
  free: "Gratuito"
  type: "Curso" | "Trilha" | "Plataforma"
  format: "Online"
  duration: string
  level: string
  emoji: string
  cert: boolean
  keywords: string[]
  provider: string
  area: string
  desc: string
}

type OpportunityInput = Pick<Opportunity, "id" | "title" | "track" | "institution" | "subarea" | "description" | "url">

const catalog: OpportunityInput[] = [
  {
    id: "mirago-ia-iniciantes",
    title: "Curso Inteligência Artificial para Iniciantes",
    track: "Tecnologia",
    subarea: "Inteligência Artificial",
    institution: "Mirago",
    description:
      "Conheça os fundamentos da Inteligência Artificial e aprenda a utilizar suas ferramentas e aplicações para transformar suas atividades pessoais e profissionais.",
    url: "https://www.mirago.com.br/curso/inteligencia-artificial-para-iniciantes/",
  },
  {
    id: "kultivi-stories-instagram",
    title: "Como Criar Conteúdo para Stories no Instagram",
    track: "Empreendedorismo",
    subarea: "Divulgação nas Redes Sociais",
    institution: "Kultive",
    description:
      "Aprenda a criar bons Stories, planejar conteúdos e desenvolver ações de engajamento para aproximar seu público e transformar seguidores em potenciais clientes.",
    url: "https://kultivi.com/curso/como-criar-conteudo-para-stories-no-instagram",
  },
  {
    id: "kultivi-curriculo-competitivo",
    title: "Como Criar um Currículo Competitivo",
    track: "Mercado de trabalho",
    subarea: "Currículos",
    institution: "Kultive",
    description:
      "Aprenda a criar um currículo claro e atrativo, destacando suas habilidades, experiências e resultados para aumentar suas chances de conquistar uma entrevista de emprego.",
    url: "https://kultivi.com/curso/como-criar-um-curriculo-competitivo",
  },
  {
    id: "kultivi-gravar-celular",
    title: "Como Gravar com o Celular",
    track: "Empreendedorismo",
    subarea: "Divulgação nas Redes Sociais",
    institution: "Kultive",
    description:
      "Aprenda a gravar vídeos com boa qualidade usando apenas o celular, explorando técnicas simples de iluminação, enquadramento e áudio, sem precisar investir em equipamentos profissionais.",
    url: "https://kultivi.com/curso/como-gravar-com-o-celular",
  },
  {
    id: "kultivi-precificacao",
    title: "Como Precificar seus Produtos ou Serviços",
    track: "Empreendedorismo",
    subarea: "Finanças para o seu negócio",
    institution: "Kultive",
    description:
      "Aprenda a calcular os preços dos seus produtos ou serviços considerando custos, despesas e lucro, para cobrar um valor justo e garantir bons resultados para o seu negócio.",
    url: "https://kultivi.com/curso/como-precificar-seus-produtos-ou-servicos",
  },
  {
    id: "kultivi-vendas-whatsapp",
    title: "Estratégias de Vendas pelo WhatsApp",
    track: "Empreendedorismo",
    subarea: "Vendas",
    institution: "Kultive",
    description:
      "Aprenda a usar o WhatsApp Business para divulgar seus produtos ou serviços, atender clientes, aumentar suas vendas e construir um bom relacionamento com seu público.",
    url: "https://kultivi.com/curso/estrategias-de-vendas-pelo-whatsapp",
  },
  {
    id: "kultivi-gestao-financeira-mei",
    title: "Gestão Financeira para MEI",
    track: "Empreendedorismo",
    subarea: "Finanças para o seu negócio",
    institution: "Kultive",
    description:
      "Aprenda a organizar as finanças do seu MEI, controlar ganhos e gastos, calcular seus lucros e tomar decisões mais seguras para manter seu negócio saudável.",
    url: "https://kultivi.com/curso/gestao-financeira-para-mei",
  },
  {
    id: "kultivi-word-essencial",
    title: "Word Essencial para Estudo e Trabalho",
    track: "Tecnologia",
    subarea: "Pacote Office (Word)",
    institution: "Kultive",
    description:
      "Aprenda a usar o Microsoft Word para criar e editar documentos bem organizados e profissionais, utilizando ferramentas de formatação, tabelas e elementos visuais.",
    url: "https://kultivi.com/curso/word-essencial-para-estudo-e-trabalho",
  },
  {
    id: "kultivi-entrevista-emprego",
    title: "Como se Destacar em Entrevista de Emprego",
    track: "Mercado de trabalho",
    subarea: "Entrevista",
    institution: "Kultive",
    description:
      "Aprenda a se preparar para entrevistas de emprego, responder perguntas com confiança, destacar suas habilidades e experiências e aumentar suas chances de conquistar uma vaga.",
    url: "https://kultivi.com/curso/como-se-destacar-em-entrevista-de-emprego",
  },
  {
    id: "kultivi-excel-essencial",
    title: "Excel Essencial para o Mercado de Trabalho",
    track: "Tecnologia",
    subarea: "Pacote Office (Excel)",
    institution: "Kultive",
    description:
      "Aprenda a usar o Excel para organizar planilhas, realizar cálculos, utilizar fórmulas e criar gráficos, desenvolvendo habilidades importantes para o dia a dia profissional.",
    url: "https://kultivi.com/curso/excel-essencial-para-o-mercado-de-trabalho",
  },
  {
    id: "shopee-comece-vender",
    title: "Comece a vender na Shopee",
    track: "Empreendedorismo",
    subarea: "Vendas",
    institution: "Shopee Centro de Educação do Vendedor",
    description:
      "Aprenda a criar sua loja na Shopee, configurar sua conta e dar os primeiros passos para anunciar produtos e começar a vender pela plataforma.",
    url: "https://seller.br.shopee.cn/edu/courseDetail/217",
  },
  {
    id: "shopee-vender-online-primeiros-passos",
    title: "Comece a vender online: Primeiros passos",
    track: "Empreendedorismo",
    subarea: "Vendas",
    institution: "Shopee Centro de Educação do Vendedor",
    description:
      "Aprenda a dar os primeiros passos para vender online, desde se relacionar com fornecedores e organizar seu estoque até divulgar seus produtos nas redes sociais.",
    url: "https://seller.br.shopee.cn/edu/courseDetail/933",
  },
  {
    id: "sebrae-vender-marketing-digital",
    title: "Aprenda a vender pela internet com marketing digital",
    track: "Empreendedorismo",
    subarea: "Vendas",
    institution: "SEBRAE",
    description:
      "Aprenda os principais conceitos do marketing digital e como utilizar canais online para divulgar seus produtos, atrair clientes e aumentar suas vendas pela internet.",
    url: "https://sp.loja.sebrae.com.br/aprenda-a-vender-pela-internet-com-marketing-digital-372000005127",
  },
  {
    id: "sebrae-preco-vendas-beleza",
    title: "Preço de vendas para beleza",
    track: "Empreendedorismo",
    subarea: "Finanças para o seu negócio",
    institution: "SEBRAE",
    description:
      "Aprenda a definir preços de produtos e serviços no setor de beleza, considerando custos, mercado e perfil dos clientes para aumentar sua competitividade e garantir bons resultados.",
    url: "https://sp.loja.sebrae.com.br/preco-de-vendas-para-beleza-1-372000069337",
  },
  {
    id: "sebrae-captar-recursos",
    title: "Como captar recursos para o seu negócio",
    track: "Empreendedorismo",
    subarea: "Finanças para o seu negócio",
    institution: "SEBRAE",
    description:
      "Aprenda a identificar quando seu negócio precisa de financiamento, conhecer as opções de crédito disponíveis e avaliar riscos para buscar recursos de forma segura e planejada.",
    url: "https://sp.loja.sebrae.com.br/como-captar-recursos-para-o-seu-negocio-1-2550",
  },
  {
    id: "sebrae-planejar-negocio",
    title: "Como Planejar o seu Negócio",
    track: "Empreendedorismo",
    subarea: "Planejamento",
    institution: "SEBRAE",
    description:
      "Aprenda a planejar seu negócio, definir metas, organizar etapas e prazos e tomar decisões mais seguras para alcançar seus objetivos e fortalecer sua empresa.",
    url: "https://sp.loja.sebrae.com.br/como-planejar-o-seu-negocio-1-371440103449",
  },
  {
    id: "sebrae-gestao-financeira",
    title: "Gestão financeira",
    track: "Empreendedorismo",
    subarea: "Finanças para o seu negócio",
    institution: "SEBRAE",
    description:
      "Aprenda a organizar e controlar as finanças do seu negócio para manter sua empresa saudável e lucrativa.",
    url: "https://sp.loja.sebrae.com.br/gest-o-financeira-1-372000026927",
  },
  {
    id: "rme-financas-pessoais",
    title: "Organizando suas finanças pessoais",
    track: "Desenvolvimento pessoal",
    subarea: "Finanças Pessoais",
    institution: "Instituto Rede Mulher Empreendedora: ELA PODE",
    description:
      "Aprenda a entender sua relação com o dinheiro, mudar hábitos financeiros e organizar suas finanças pessoais para ter mais controle sobre seus gastos e sua renda.",
    url: "https://www.cursosrme.net.br/curso/organizando-suas-financas-pessoais/",
  },
  {
    id: "rme-ia-pequenos-negocios",
    title: "IA para pequenos negócios: onde ela realmente pode fazer diferença",
    track: "Empreendedorismo",
    subarea: "Tecnologia",
    institution: "Instituto Rede Mulher Empreendedora",
    description:
      "Aprenda como utilizar a Inteligência Artificial como uma assistente estratégica para identificar tarefas que podem ser otimizadas, melhorar processos e facilitar a tomada de decisões no seu negócio.",
    url: "https://www.cursosrme.net.br/curso/1-ia-para-pequenos-negocios-onde-ela-realmente-pode-fazer-diferenca/",
  },
  {
    id: "senac-videos-redes-sociais",
    title:
      "Produção de vídeos para redes sociais: conecte sua audiência com criatividade",
    track: "Empreendedorismo",
    subarea: "Divulgação nas Redes Sociais",
    institution: "Orango SENAC",
    description:
      "Aprenda a produzir vídeos criativos e de qualidade para as redes sociais, aumentar o alcance da sua marca e criar conteúdos que atraiam e engajem seu público.",
    url: "https://orango.senac.br/inicio/cursos/producao-de-videos-para-redes-sociais-conecte-sua-audiencia-com-criatividade/",
  },
  {
    id: "sebrae-canva-redes",
    title: "Faça suas redes bombarem com o Canva",
    track: "Empreendedorismo",
    subarea: "Divulgação nas Redes Sociais",
    institution: "SEBRAE",
    description:
      "Aprenda a usar o Canva para criar posts atrativos, desenvolver a identidade visual da sua marca e produzir conteúdos que chamem a atenção e engajem seu público no Instagram.",
    url: "https://sp.loja.sebrae.com.br/faca-suas-redes-bombarem-com-o-canva-1-372000090794",
  },
  {
    id: "canva-design-school",
    title: "Cursos rápidos sobre como usar o Canva",
    track: "Empreendedorismo",
    subarea: "Tecnologia",
    institution: "Escola Criativa Canva",
    description:
      "Cursos gratuitos e rápidos, com certificado, para desenvolver habilidades em Inteligência Artificial, criação visual e outras áreas importantes para o dia a dia profissional.",
    url: "https://www.canva.com/design-school/",
  },
  {
    id: "bradesco-atendimento-publico",
    title: "Atendimento ao Público",
    track: "Empreendedorismo",
    subarea: "Atendimento ao Público",
    institution: "Fundação Bradesco",
    description:
      "Aprenda técnicas de atendimento ao público, desenvolva a comunicação e a escuta ativa e saiba lidar com diferentes clientes e situações para oferecer um atendimento de qualidade.",
    url: "https://www.ev.org.br/cursos/atendimento-ao-publico",
  },
  {
    id: "bradesco-novo-emprego",
    title: "Como Conseguir um Novo Emprego",
    track: "Mercado de trabalho",
    subarea: "Novo emprego",
    institution: "Fundação Bradesco",
    description:
      "Aprenda a se preparar para conquistar um novo emprego, desde a criação de um bom currículo e busca por vagas até a preparação para entrevistas e a criação de um perfil no LinkedIn.",
    url: "https://www.ev.org.br/cursos/Como-Conseguir-um-Novo-Emprego",
  },
  {
    id: "bradesco-educacao-financeira",
    title: "Educação Financeira",
    track: "Desenvolvimento pessoal",
    subarea: "Finanças Pessoais",
    institution: "Fundação Bradesco",
    description:
      "Aprenda a organizar suas finanças pessoais, identificar seus hábitos de consumo, controlar gastos, planejar seu orçamento e conhecer conceitos básicos de investimentos e sustentabilidade.",
    url: "https://www.ev.org.br/cursos/educacao-financeira",
  },
  {
    id: "bradesco-postura-profissional",
    title: "Postura e Imagem Profissional",
    track: "Mercado de trabalho",
    subarea: "Imagem profissional",
    institution: "Fundação Bradesco",
    description:
      "Aprenda a desenvolver e manter uma imagem profissional positiva, aprimorando sua postura, comunicação e convivência no ambiente de trabalho.",
    url: "https://www.ev.org.br/cursos/postura-e-imagem-profissional",
  },
  {
    id: "bradesco-inteligencia-emocional",
    title: "Trilha de conhecimento: Inteligência Emocional",
    track: "Desenvolvimento pessoal",
    subarea: "Inteligência Emocional",
    institution: "Fundação Bradesco",
    description:
      "Aprenda a reconhecer e gerenciar suas emoções, desenvolver o autoconhecimento e a resiliência, melhorar suas relações interpessoais e fortalecer habilidades importantes para a vida pessoal e profissional.",
    url: "https://www.ev.org.br/trilhas-de-conhecimento/inteligencia-emocional",
  },
  {
    id: "bradesco-empreendedorismo-inovacao",
    title: "Empreendedorismo e Inovação",
    track: "Empreendedorismo",
    subarea: "Planejamento",
    institution: "Fundação Bradesco",
    description:
      "Aprenda os fundamentos do empreendedorismo e da inovação, desenvolvendo uma postura empreendedora, identificando oportunidades e conhecendo as etapas básicas de um plano de negócios.",
    url: "https://www.ev.org.br/cursos/empreendedorismo-e-inovacao",
  },
  {
    id: "bradesco-office-pratica",
    title: "Trilha de conhecimento: Office na Prática",
    track: "Tecnologia",
    subarea: "Pacote Office",
    institution: "Fundação Bradesco",
    description:
      "Aprenda a utilizar Word, Excel e PowerPoint na prática, desenvolvendo habilidades essenciais para realizar tarefas do dia a dia profissional, acadêmico e pessoal.",
    url: "https://www.ev.org.br/trilhas-de-conhecimento/office-na-pratica",
  },
  {
    id: "bradesco-fluencia-ia",
    title: "FluêncIA em Inteligência Artificial",
    track: "Tecnologia",
    subarea: "Inteligência Artificial",
    institution: "Fundação Bradesco",
    description:
      "Conheça os fundamentos da Inteligência Artificial Generativa, suas aplicações no dia a dia e como utilizar ferramentas como o Copilot para aumentar a produtividade, criar bons prompts e desenvolver agentes de IA.",
    url: "https://www.ev.org.br/cursos/fluencia",
  },
  {
    id: "bradesco-ia-novo-emprego",
    title: "IA para seu novo emprego: Do currículo à entrevista",
    track: "Mercado de trabalho",
    subarea: "Currículo",
    institution: "Fundação Bradesco",
    description:
      "Aprenda a usar a IA para criar currículos, melhorar seu LinkedIn, encontrar vagas e se preparar para entrevistas.",
    url: "https://www.ev.org.br/cursos/iaempregos",
  },
  {
    id: "bradesco-ia-pmes",
    title: "Inteligência Artificial para Pequenas e Médias Empresas",
    track: "Empreendedorismo",
    subarea: "Inteligência Artificial",
    institution: "Fundação Bradesco",
    description:
      "Aprenda a aplicar a Inteligência Artificial para automatizar tarefas, reduzir custos, aumentar a produtividade e melhorar a experiência dos clientes.",
    url: "https://www.ev.org.br/cursos/pmes",
  },
  {
    id: "rme-programa-ela-modo-ia",
    title: "Programa Ela Modo IA",
    track: "Tecnologia / Desenvolvimento pessoal / Empreendedorismo",
    subarea: "Inteligência Artificial",
    institution: "Cursos RME & IRME",
    description:
      "Acesse uma jornada gratuita com vários cursos rápidos sobre Inteligência Artificial e segurança digital. Aprenda a utilizar ferramentas como o Gemini, criar prompts e aplicar a tecnologia para aumentar a produtividade, proteger seus dados e tornar a gestão do seu negócio mais eficiente.",
    url: "https://www.cursosrme.net.br/projeto/ela-modo-ia/",
  },
  {
    id: "rme-impacto-feminino-ia",
    title:
      "Programa Impacto Feminino - Inteligência Artificial para Pequenos Negócios Liderados por Mulheres",
    track: "Empreendedorismo",
    subarea: "Inteligência Artificial",
    institution: "Cursos RME & IRME",
    description:
      "Participe de uma iniciativa de capacitação para mulheres empreendedoras e aprenda a aplicar ferramentas de Inteligência Artificial na gestão, comunicação, vendas e tomada de decisões do seu negócio.",
    url: "https://www.cursosrme.net.br/projeto/impacto-feminino-inteligencia-artificial-para-pequenos-negocios-liderados-por-mulheres/",
  },
  {
    id: "rme-programa-ela-pode",
    title: "Programa Ela Pode",
    track: "Empreendedorismo / Desenvolvimento pessoal",
    subarea: "Desenvolvimento Pessoal",
    institution: "Cursos RME & IRME",
    description:
      "Participe de capacitações gratuitas voltadas ao desenvolvimento de habilidades socioemocionais, fortalecendo sua confiança, autonomia e preparação para empreender ou conquistar uma oportunidade no mercado de trabalho.",
    url: "https://www.cursosrme.net.br/projeto/ela-pode/",
  },
  {
    id: "rme-gestao-negocio",
    title: "Gestão do negócio",
    track: "Empreendedorismo",
    subarea: "Finanças",
    institution: "Cursos RME & IRME",
    description:
      "Aprenda a estruturar e impulsionar seu negócio por meio de práticas de gestão mais eficientes.",
    url: "https://www.cursosrme.net.br/curso/gestao-do-negocio/",
  },
  {
    id: "rme-comecar-negocio",
    title: "Como começar meu negócio",
    track: "Empreendedorismo",
    subarea: "Planejamento",
    institution: "Cursos RME & IRME",
    description:
      "Feito para mulheres, aprenda a transformar suas ideias em um negócio, desde a identificação de oportunidades e clientes até a divulgação, organização financeira, precificação e formalização da empresa.",
    url: "https://www.cursosrme.net.br/curso/como-comecar-meu-negocio/",
  },
  {
    id: "rme-marketing-digital-mulheres",
    title: "Marketing Digital para mulheres",
    track: "Empreendedorismo",
    subarea: "Divulgação nas Redes Sociais",
    institution: "Cursos RME & IRME",
    description:
      "Aprenda a digitalizar e fortalecer seu negócio por meio de estratégias de transformação digital, branding e planejamento de marketing.",
    url: "https://www.cursosrme.net.br/curso/marketing-digital/",
  },
  {
    id: "oboticario-hub-aceleracao",
    title: "HUB de Aceleração de Negócios",
    track: "Indicação de plataforma que oferece diversos cursos",
    subarea: "Indicação de plataforma que oferece diversos cursos",
    institution: "Grupo Oboticário",
    description:
      "Desenvolva uma visão estratégica para transformar seu negócio de beleza em uma empresa estruturada e preparada para crescer, aprendendo sobre formalização, gestão, processos, vendas, liderança e expansão.",
    url: "https://empreendedorasdabeleza.grupoboticario.com.br/cursos/hub-de-aceleracao-de-negocios/",
  },
]

function getEmoji(track: string) {
  if (track.includes("Tecnologia")) return "TEC"
  if (track.includes("Mercado")) return "CAR"
  if (track.includes("Desenvolvimento")) return "DES"
  if (track.includes("Indicação")) return "PLT"
  return "NEG"
}

export const opportunities: Opportunity[] = catalog.map((item) => ({
  ...item,
  free: "Gratuito",
  type: item.track.includes("Indicação")
    ? "Plataforma"
    : item.title.startsWith("Trilha") || item.title.startsWith("Programa")
      ? "Trilha"
      : "Curso",
  format: "Online",
  duration: "Consulte a plataforma",
  level: "Todos os níveis",
  emoji: getEmoji(item.track),
  cert: false,
  keywords: [
    item.title,
    item.track,
    item.subarea,
    item.institution,
    item.description,
  ],
  provider: item.institution,
  area: item.track,
  desc: item.description,
}))

export type Guide = {
  id: string
  title: string
  category: string
  time: string
  emoji: string
  color: string
  introduction: string
  steps: string[]
  courseIds: string[]
}

export const guides: Guide[] = [
  {
    id: "guia-precificacao",
    title: "Checklist: Como Precificar seu Produto",
    category: "Finanças do negócio",
    time: "8 min",
    emoji: "R$",
    color: "#fff7ed",
    introduction:
      "Um preço sustentável cobre todos os custos, remunera seu trabalho e ainda deixa margem para o negócio crescer.",
    steps: [
      "Liste matéria-prima, embalagem, taxas, transporte e outros custos diretos.",
      "Some despesas mensais como internet, energia e ferramentas.",
      "Calcule quanto vale a sua hora de trabalho.",
      "Defina a margem de lucro e compare com preços praticados no mercado.",
      "Revise os preços sempre que custos ou condições de venda mudarem.",
    ],
    courseIds: ["kultivi-precificacao", "sebrae-preco-vendas-beleza"],
  },
  {
    id: "guia-financas-mei",
    title: "Passo a Passo: Organizando as Finanças do MEI",
    category: "Gestão financeira",
    time: "10 min",
    emoji: "MEI",
    color: "#f0fdf9",
    introduction:
      "Separar o dinheiro pessoal do dinheiro do negócio é o primeiro passo para entender seus resultados.",
    steps: [
      "Use contas ou carteiras separadas para vida pessoal e negócio.",
      "Registre diariamente tudo o que entra e sai.",
      "Reserve o valor do DAS e outras obrigações antes de gastar.",
      "Faça um fechamento mensal para calcular faturamento e lucro.",
      "Crie uma pequena reserva para meses de menor movimento.",
    ],
    courseIds: ["kultivi-gestao-financeira-mei", "sebrae-gestao-financeira"],
  },
  {
    id: "guia-vendas-whatsapp",
    title: "Roteiro Rápido de Vendas no WhatsApp",
    category: "Vendas",
    time: "7 min",
    emoji: "WA",
    color: "#eff6ff",
    introduction:
      "Um atendimento claro, respeitoso e organizado ajuda a transformar conversas em relacionamentos duradouros.",
    steps: [
      "Configure perfil comercial, horário e catálogo no WhatsApp Business.",
      "Comece a conversa se apresentando e perguntando como pode ajudar.",
      "Explique benefícios, preço, pagamento e prazo sem esconder informações.",
      "Peça autorização antes de enviar promoções ou adicionar contatos a listas.",
      "Confirme o pedido por escrito e faça um acompanhamento após a entrega.",
    ],
    courseIds: [
      "kultivi-vendas-whatsapp",
      "shopee-vender-online-primeiros-passos",
    ],
  },
  {
    id: "guia-curriculo-entrevista",
    title: "Guia de Currículo e Entrevista",
    category: "Mercado de trabalho",
    time: "12 min",
    emoji: "CV",
    color: "#f5f3ff",
    introduction:
      "Um currículo objetivo e uma preparação cuidadosa ajudam você a apresentar sua trajetória com confiança.",
    steps: [
      "Mantenha telefone, e-mail, cidade e objetivo profissional atualizados.",
      "Descreva experiências formais, informais, voluntariado e projetos.",
      "Adapte palavras-chave e destaques para cada vaga.",
      "Pesquise a empresa e prepare exemplos reais das suas habilidades.",
      "Revise o currículo, salve em PDF e treine respostas em voz alta.",
    ],
    courseIds: [
      "kultivi-curriculo-competitivo",
      "kultivi-entrevista-emprego",
      "bradesco-ia-novo-emprego",
    ],
  },
]

export const courses = opportunities
export const workshops: Opportunity[] = []
export const tutorials = guides
export const searchableOpportunities = opportunities

export const tracks = [
  "Empreendedorismo",
  "Tecnologia",
  "Mercado de trabalho",
  "Desenvolvimento pessoal",
  "Indicação de plataforma",
] as const

export const subareas = [
  ...new Set(opportunities.map((item) => item.subarea)),
].sort()
export const institutions = [
  ...new Set(opportunities.map((item) => item.institution)),
].sort()

export function normalizeSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
}

export function matchesSearch(item: Opportunity, query: string) {
  const normalizedQuery = normalizeSearch(query)
  if (!normalizedQuery) return true
  const searchableText = [
    item.title,
    item.description,
    item.institution,
    item.track,
    item.subarea,
  ]
    .map(normalizeSearch)
    .join(" ")
  return normalizedQuery
    .split(/\s+/)
    .every((term) => searchableText.includes(term))
}

export function matchesTrack(item: Opportunity, track: string) {
  if (!track || track === "Todos") return true
  if (track === "Indicação de plataforma")
    return item.track.includes("Indicação")
  return item.track
    .split("/")
    .map((part) => part.trim())
    .includes(track)
}

export function getOpportunity(id: string | null | undefined) {
  return opportunities.find((item) => item.id === id) ?? opportunities[0]
}

export function getGuide(id: string | null | undefined) {
  return guides.find((item) => item.id === id) ?? guides[0]
}
