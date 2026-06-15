// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÃO DO CLIENTE
// Edite apenas este arquivo para personalizar o site para cada cliente.
// Nenhum outro arquivo precisa ser alterado.
// ─────────────────────────────────────────────────────────────────────────────

export const client = {
  // ── Dados da empresa ────────────────────────────────────────────────────────
  company: {
    name: "Arco Consultoria",
    tagline: "Gestão e estratégia para empresas que querem crescer de verdade",
    description: "Consultoria empresarial para pequenas e médias empresas.",
    foundedYear: 2018,
    // Número com código do país e DDD — sem espaços, traços ou parênteses
    // Ex: "5511999999999" → Brasil (55) + São Paulo (11) + número
    whatsapp: "00000",
    email: "contato@arcoconsultoria.com.br",
    // URL completa usada no sitemap, Open Graph e canonical
    website: "https://arcoconsultoria.com.br",
    locale: "pt-BR",
  },

  // ── SEO ─────────────────────────────────────────────────────────────────────
  seo: {
    // Máx 60 caracteres — aparece na aba do browser e no Google
    title: "Arco Consultoria — Gestão e estratégia empresarial",
    // Máx 160 caracteres — aparece no snippet do Google
    description:
      "Consultoria empresarial especializada em planejamento estratégico, gestão financeira e aceleração comercial para PMEs em São Paulo.",
    keywords: ["consultoria empresarial", "planejamento estratégico", "gestão financeira PME", "consultoria São Paulo"],
    // Adicione o arquivo em /public/og-image.png (1200×630 px)
    ogImage: "/og-image.png",
    twitterHandle: "@arcoconsultoria",
  },

  // ── Tema visual ─────────────────────────────────────────────────────────────
  theme: {
    // Cor de destaque em valores RGB separados por espaço (sem vírgula)
    // Ferramenta: https://www.color-name.com/hex-to-rgb.color
    // Indigo 500:  "99 102 241"
    // Violet 500:  "139 92 246"
    // Sky 500:     "14 165 233"
    // Emerald 500: "16 185 129"
    // Rose 500:    "244 63 94"
    accentRgb: "99 102 241",
  },

  // ── Navegação ───────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Depoimentos", href: "#depoimentos" },
    ],
    ctaLabel: "Falar no WhatsApp",
  },

  // ── Seção: Hero ─────────────────────────────────────────────────────────────
  hero: {
    badge: "Consultoria para PMEs",
    // Primeira linha do título (branca)
    headline: "Seu negócio tem potencial.",
    // Segunda linha do título (cor de destaque + gradiente)
    subheadline: "A gestão precisa acompanhar.",
    description:
      "Ajudamos pequenas e médias empresas a sair do operacional e construir uma operação previsível, lucrativa e pronta para crescer.",
    cta: {
      primary: { label: "Falar no WhatsApp", href: "#cta" },
      secondary: { label: "Ver serviços", href: "#servicos" },
    },
    // Deixe o array vazio para ocultar a barra de stats: stats: []
    stats: [
      { value: "180+", label: "Empresas atendidas" },
      { value: "3,2×", label: "crescimento médio em 12 meses" },
      { value: "7 anos", label: "de mercado" },
    ],
  },

  // ── Seção: Sobre ─────────────────────────────────────────────────────────────
  sobre: {
    badge: "Sobre nós",
    headline: "Consultoria que trabalha junto, não só aconselha",
    // Cada string vira um parágrafo separado
    paragraphs: [
      "A Arco nasceu em 2018 com uma premissa simples: consultoria boa é a que fica do lado do empresário até o resultado aparecer. Não entregamos relatórios e sumimos — entramos na operação, mapeamos os gargalos reais e implementamos junto com o time.",
      "Atendemos empresas de 5 a 80 funcionários nos setores de serviços, varejo e indústria leve. Nossa equipe é formada por ex-gestores que já rodaram negócios, então sabemos que teoria sem prática não paga boleto.",
    ],
    values: [
      {
        title: "Resultado antes de processo",
        description: "Cada decisão metodológica é testada contra uma pergunta simples: isso aproxima o cliente do resultado? Se não, descartamos.",
      },
      {
        title: "Presença real",
        description: "Não trabalhamos por e-mail. Estamos na empresa, nas reuniões, nas conversas difíceis — até a mudança virar rotina.",
      },
      {
        title: "Transparência total",
        description: "O cliente sabe exatamente o que está sendo feito, por quê e qual indicador vai mudar. Sem caixa-preta.",
      },
    ],
  },

  // ── Seção: Serviços ──────────────────────────────────────────────────────────
  servicos: {
    badge: "Serviços",
    headline: "Como trabalhamos",
    description:
      "Três frentes de atuação que cobrem os principais pontos de alavancagem de uma PME.",
    items: [
      {
        title: "Planejamento Estratégico",
        description:
          "Mapeamos onde a empresa está, onde quer chegar e construímos um plano de 12 meses com metas, indicadores e responsáveis definidos.",
        features: [
          "Diagnóstico completo do negócio",
          "Definição de OKRs e KPIs prioritários",
          "Plano de ação com cronograma e donos",
          "Revisão trimestral de rota",
        ],
      },
      {
        title: "Gestão Financeira",
        description:
          "Organizamos o fluxo de caixa, separamos pessoa física de jurídica e construímos uma visão financeira que permite tomar decisões com segurança.",
        features: [
          "Estruturação do DRE gerencial",
          "Controle de fluxo de caixa em tempo real",
          "Precificação e análise de margem",
          "Dashboard financeiro personalizado",
        ],
      },
      {
        title: "Aceleração Comercial",
        description:
          "Revisamos o processo de vendas do início ao fim — da prospecção ao pós-venda — e implementamos uma estrutura que gera receita de forma consistente.",
        features: [
          "Mapeamento e otimização do funil de vendas",
          "Script e playbook comercial",
          "Treinamento e acompanhamento do time",
          "Implementação de CRM e métricas de vendas",
        ],
      },
    ],
  },

  // ── Seção: Depoimentos ───────────────────────────────────────────────────────
  depoimentos: {
    badge: "Depoimentos",
    headline: "Quem já passou pela Arco",
    items: [
      {
        name: "Rodrigo Menezes",
        role: "Sócio-fundador • Menezes Engenharia",
        text: "Em seis meses a gente saiu de um faturamento estagnado há dois anos para o melhor semestre da história da empresa. O que mais me surpreendeu foi que o trabalho da Arco não foi só estratégia — eles colocaram a mão na massa junto com a gente.",
        rating: 5,
      },
      {
        name: "Tatiana Borges",
        role: "CEO • Viva Clínicas",
        text: "Eu não entendia os números da minha própria empresa. Depois do trabalho de gestão financeira com a Arco, aprendi a ler o DRE, identifiquei que dois dos meus serviços davam prejuízo e reposicionei o preço. A margem líquida subiu de 8% para 21% em quatro meses.",
        rating: 5,
      },
      {
        name: "Felipe Drummond",
        role: "Diretor Comercial • Drummond Distribuidora",
        text: "Nossa equipe de vendas era movida a intuição. A Arco criou um processo do zero — funil, script, CRM, meta por vendedor. No primeiro trimestre depois da implementação batemos 130% da meta. Agora eu consigo prever o faturamento do mês com dois dias de antecedência.",
        rating: 5,
      },
    ],
  },

  // ── Seção: CTA ───────────────────────────────────────────────────────────────
  cta: {
    headline: "Pronto para parar de apagar incêndio?",
    description:
      "Conversa sem compromisso. Em 30 minutos a gente entende o momento da sua empresa e mostra como podemos ajudar.",
    // Mensagem pré-preenchida no WhatsApp — personalize para o cliente
    whatsappMessage:
      "Olá! Vi o site da Arco Consultoria e quero entender como vocês podem ajudar minha empresa.",
    buttonLabel: "Agendar conversa no WhatsApp",
  },

  // ── Rodapé ───────────────────────────────────────────────────────────────────
  footer: {
    description: "Consultoria empresarial para PMEs que querem crescer com consistência.",
    social: [
      // Deixe o array vazio para ocultar redes sociais: social: []
      { platform: "Instagram", href: "https://instagram.com/arcoconsultoria" },
      { platform: "LinkedIn", href: "https://linkedin.com/company/arcoconsultoria" },
    ],
    legalLinks: [
      // Deixe vazio para remover: legalLinks: []
      { label: "Política de Privacidade", href: "/privacidade" },
    ],
  },
}

export type ClientConfig = typeof client
