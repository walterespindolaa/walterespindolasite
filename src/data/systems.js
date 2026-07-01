// Os sistemas, contados na voz do BUILDER (Walter):
// ideia por trás → dor que resolvi → funcionalidades que construí → prova.
export const systems = [
  {
    id: "atlas",
    name: "Atlas",
    tag: "Organização Financeira",
    dor: "Não sei pra onde vai meu dinheiro.",
    solucao: "O plano que um bom assessor faria, num app, todo dia.",
    ganhos: [
      "Enxerga pra onde seu dinheiro vai e pra onde ele te leva",
      'Simula decisões antes de tomar ("e se eu comprar isso?")',
      "Relatórios do seu dinheiro escritos por IA",
    ],
    accent: "#5B7A99",
    siteUrl: "https://www.useatlasapp.com",
    shot: "/img/shots/atlas.webp",
    ideia:
      "Depois de estudar mais de 300 planejamentos reais, percebi que o que trava as pessoas não é falta de dinheiro, é falta de plano e de clareza. Quis colocar o trabalho de um bom assessor dentro de um app, acessível, pra qualquer pessoa usar todo dia.",
    dorLong:
      "A maioria não sabe pra onde o dinheiro vai, muito menos pra onde ele a leva. Sem clareza e sem plano, as decisões grandes saem no impulso, e a vida financeira vira um borrão de meses soltos.",
    features: [
      { title: "Atlas Score", desc: "Construí um índice único que, em 2 segundos, diz onde você está, e reage a cada decisão.", resolve: "clareza imediata" },
      { title: "Vista da Montanha", desc: "Reaproveitei um motor de projeção patrimonial pra transformar a aposentadoria em meta tangível, no tempo.", resolve: "enxergar o futuro" },
      { title: "Simulador de Decisão", desc: "Um 'e se?' pra qualquer escolha: veja o impacto de R$100 a mais em 10, 20, 30 anos, antes de agir.", resolve: "decidir com dados" },
      { title: "Método Atlas (IA)", desc: "5 relatórios por IA com os mesmos diagnósticos que uso com 300+ famílias, não achismo.", resolve: "diagnóstico de verdade" },
      { title: "Renda Passiva", desc: "Uma carteira viva que mostra quando a sua renda passiva te liberta.", resolve: "meta de liberdade" },
      { title: "Household", desc: "PF e PJ na mesma jornada, com um acesso extra pra planejar a dois.", resolve: "finanças do casal" },
    ],
    impacto: {
      stat: "300+",
      statLabel: "famílias planejadas com o método",
      depoimentos: [
        { name: "Bruno T.", quote: "Pela primeira vez sei pra onde meu dinheiro vai. Montei minha reserva em 4 meses." },
        { name: "Rafael & Júlia", quote: "A gente brigava por dinheiro. No Atlas virou decisão a dois, sem briga." },
      ],
    },
    prova: "93 telas · 216 componentes · 159 migrations · 45 edge functions",
  },
  {
    id: "zephyr",
    name: "Zephyr",
    tag: "Planejamento Financeiro",
    dor: "Toda assessoria é genérica e não me enxerga.",
    solucao: "Assessoria de verdade, com tecnologia própria.",
    ganhos: [
      "Planejamento patrimonial feito sob medida pra você",
      "Acompanhamento contínuo, de perto",
      "O olhar de um assessor + a força de um sistema",
    ],
    accent: "#C9A24B",
    siteUrl: "#",
    ideia:
      "Toda assessoria promete atenção, mas roda em planilha e no improviso. Quis construir a plataforma que a minha assessoria merecia: o motor de projeção do Atlas por baixo, e um CRM que enxerga cada cliente de perto.",
    dorLong:
      "Assessoria genérica trata todo mundo igual. Quem tem muito a perder precisa de alguém que enxergue o quadro completo, e de tecnologia à altura, não de planilha compartilhada.",
    features: [
      { title: "Planejamento sob medida", desc: "Cada cliente com o seu plano, montado a partir dos números reais, não um template.", resolve: "atenção real" },
      { title: "Motor de projeção", desc: "Reaproveitei a mesma engine de projeção do Atlas pra rodar cenários por cliente.", resolve: "visão de longo prazo" },
      { title: "CRM de cliente", desc: "Do primeiro contato ao acompanhamento contínuo, tudo num lugar.", resolve: "acompanhamento de perto" },
      { title: "Acesso por papel", desc: "Planejadora, assessores e admin, cada um com a sua visão e permissões.", resolve: "operação organizada" },
    ],
    prova: "10 telas · 80 componentes · 12 migrations · 3 edge functions",
  },
  {
    id: "pejota",
    name: "PeJota",
    tag: "Gestão do seu negócio",
    dor: "O caos administrativo e fiscal me consome.",
    solucao: "Seu negócio inteiro organizado num lugar só.",
    ganhos: [
      "Caixa, contas e vendas sob controle",
      "Propostas e funil que fecham mais negócio",
      "Emite sua nota fiscal (NF-e) sem sofrer",
    ],
    accent: "#B5643C",
    siteUrl: "#",
    ideia:
      "Vendo donos de PJ afogados em planilha, boleto e imposto, percebi que o problema não era falta de esforço, era falta de um lugar só. Construí o ERP que junta caixa, vendas e nota fiscal num sistema que trabalha por eles.",
    dorLong:
      "Dono de PJ vive apagando incêndio: caixa numa planilha, cobrança noutra, imposto atrasado e nota fiscal que ninguém entende. O administrativo consome o tempo que devia ir pro negócio.",
    features: [
      { title: "Fluxo de caixa", desc: "Contas a pagar e receber num painel só, sem planilha paralela.", resolve: "controle do dinheiro" },
      { title: "Funil + propostas", desc: "Do lead à proposta assinada, num fluxo que fecha mais negócio.", resolve: "vender melhor" },
      { title: "NF-e / NFS-e", desc: "Emissão de nota fiscal integrada (PlugNotas), sem sair do sistema.", resolve: "fiscal sem dor" },
      { title: "Cobrança BR", desc: "Stripe + Asaas, com PIX e boleto nativos do jeito brasileiro.", resolve: "receber mais fácil" },
      { title: "PeJota Copilot (IA)", desc: "Uma IA que escreve e resume pra você dentro do fluxo de trabalho.", resolve: "menos trabalho manual" },
      { title: "Estoque", desc: "Controle de produtos ligado direto às vendas.", resolve: "operação redonda" },
    ],
    prova: "118 telas · 217 componentes · 160 migrations · 52 edge functions",
  },
  {
    id: "cria",
    name: "Cria Social Club",
    tag: "Seu hub criativo",
    dor: "Me perco entre a ideia e a publicação.",
    solucao: "Da ideia ao publicado, num fluxo só.",
    ganhos: [
      "Ideação e roteiro com ajuda de IA",
      "Planeja e agenda tudo sem virar bagunça",
      "Vê o que performou e faz mais do que dá certo",
    ],
    accent: "#7C9A6B",
    siteUrl: "#",
    ideia:
      "Todo criador tem ideia; poucos têm processo. O gargalo não é criatividade, é o caminho da ideia até o publicado. Construí um hub que segura a mão em cada etapa, com IA no meio.",
    dorLong:
      "Criar com constância é caótico: a ideia surge, o roteiro trava, a produção atrasa e a análise nunca acontece. No meio do caminho, a ideia se perde.",
    features: [
      { title: "Ideação + roteiro (IA)", desc: "Do branco à pauta pronta, com a IA participando do processo criativo.", resolve: "destravar a ideia" },
      { title: "Planejamento", desc: "Um calendário editorial que organiza sem virar bagunça.", resolve: "constância" },
      { title: "Agendamento", desc: "Publica direto, Instagram, Google Calendar e Drive integrados.", resolve: "publicar sem atrito" },
      { title: "Produção", desc: "Vídeo hospedado (Bunny) e ativos no lugar certo.", resolve: "produção organizada" },
      { title: "Análise", desc: "Veja o que performou (Meta CAPI) e repita o que dá certo.", resolve: "crescer com dados" },
    ],
    prova: "52 telas · 174 componentes · 69 migrations · 37 edge functions",
  },
  {
    id: "salvareceitas",
    name: "SalvaReceitas",
    tag: "Ao vivo · build in public",
    dor: "O próximo, construído na frente de todo mundo.",
    solucao: "Você vê o método acontecendo em tempo real.",
    ganhos: [
      "Cada etapa da construção vira bastidor da mentoria",
      "A prova de que a receita se repete",
      "Do zero ao no ar, documentado",
    ],
    accent: "#C9A24B",
    live: true,
    siteUrl: "#",
    ideia:
      "Todo método soa bonito no papel. Quis provar que a receita se repete construindo o próximo produto em público, ao vivo, do zero, com cada passo documentado.",
    dorLong:
      "A pergunta que fica sobre qualquer método é: funciona de novo, do zero, na vida real? O SalvaReceitas existe pra responder isso na frente de todo mundo.",
    features: [
      { title: "Build in public", desc: "Cada etapa aberta, do zero ao no ar, sem edição.", resolve: "prova real" },
      { title: "Diário de bordo", desc: "Toda sessão vira um registro, e material da mentoria.", resolve: "método documentado" },
      { title: "A receita aplicada", desc: "O mesmo esqueleto dos outros 4, do começo ao fim.", resolve: "repetibilidade" },
    ],
    prova: "Em construção, acompanhe ao vivo.",
  },
];

export const getSystem = (id) => systems.find((s) => s.id === id);
