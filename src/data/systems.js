// Os sistemas — dor → solução → ganhos + detalhe pra página de estudo de caso.
export const systems = [
  {
    id: "atlas",
    name: "Atlas",
    tag: "Organização Financeira",
    dor: "Não sei pra onde vai meu dinheiro.",
    solucao: "O plano que um bom assessor faria — num app, todo dia.",
    ganhos: [
      "Enxerga pra onde seu dinheiro vai e pra onde ele te leva",
      'Simula decisões antes de tomar ("e se eu comprar isso?")',
      "Relatórios do seu dinheiro escritos por IA",
    ],
    accent: "#5B7A99",
    siteUrl: "https://www.useatlasapp.com",
    problema:
      "A maioria das pessoas não sabe pra onde o dinheiro vai — e muito menos pra onde ele as leva. Falta clareza, falta plano, e as decisões grandes acabam saindo no impulso.",
    solucaoLong:
      "O Atlas é o plano que um bom assessor faria, transformado em app pra usar todo dia. Mostra onde você está, o próximo passo e o que muda se você seguir um caminho diferente.",
    features: [
      { title: "Atlas Score", desc: "Em 2 segundos você sabe onde está. Atualiza a cada decisão." },
      { title: "Vista da Montanha", desc: "Sua projeção patrimonial no tempo — a aposentadoria como meta tangível." },
      { title: "Simulador de Decisão", desc: '"E se eu aumentar a reserva em R$100?" Veja o impacto em 10, 20, 30 anos.' },
      { title: "Método Atlas (IA)", desc: "5 relatórios: os mesmos diagnósticos usados com 300+ famílias." },
      { title: "Renda Passiva", desc: "Carteira viva — descubra quando sua renda te liberta." },
      { title: "Household", desc: "PF e PJ na mesma jornada; um acesso extra pra compartilhar com quem você ama." },
    ],
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
    problema:
      "Assessoria genérica trata todo mundo igual. Quem tem muito a perder precisa de alguém que enxergue o quadro completo — e de tecnologia à altura.",
    solucaoLong:
      "A Zephyr é a plataforma interna da assessoria: planejadora, assessores e admin no mesmo lugar, com o motor de projeção do Atlas por baixo. É o negócio-mãe — a raiz da autoridade.",
    features: [
      { title: "Planejamento sob medida", desc: "Cada cliente com o seu plano, não um template." },
      { title: "Motor de projeção", desc: "A mesma engine de projeção patrimonial do Atlas." },
      { title: "CRM de cliente", desc: "Do primeiro contato ao acompanhamento contínuo." },
      { title: "Acesso por papel", desc: "Planejadora, assessores e admin — cada um com a sua visão." },
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
    problema:
      "Dono de PJ vive apagando incêndio: caixa numa planilha, cobrança noutra, imposto atrasado e nota fiscal que ninguém entende. O administrativo consome o tempo que devia ir pro negócio.",
    solucaoLong:
      "O PeJota é o ERP que junta tudo: fluxo de caixa, contas a pagar e receber, funil de vendas, propostas, estoque e emissão de NF-e/NFS-e — com IA pra te ajudar a escrever e decidir.",
    features: [
      { title: "Fluxo de caixa", desc: "Contas a pagar e receber sob controle, sem planilha." },
      { title: "Funil + propostas", desc: "Do lead à proposta assinada, num fluxo só." },
      { title: "NF-e / NFS-e", desc: "Emissão de nota fiscal integrada (PlugNotas)." },
      { title: "Cobrança BR", desc: "Stripe + Asaas — PIX e boleto nativos." },
      { title: "PeJota Copilot", desc: "IA que escreve e resume pra você (pejota-ai-write)." },
      { title: "Estoque", desc: "Controle de produtos ligado às vendas." },
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
    problema:
      "Criar conteúdo com constância é caótico: a ideia surge, o roteiro trava, a produção atrasa e a análise nunca acontece. No meio do caminho, a ideia se perde.",
    solucaoLong:
      "O Cria Social Club é o hub que leva da ideia ao publicado num fluxo só: ideação, planejamento, roteiro com IA, produção, agendamento e análise — tudo conectado às suas redes.",
    features: [
      { title: "Ideação + roteiro (IA)", desc: "Do branco à pauta pronta, com a IA no processo." },
      { title: "Planejamento", desc: "Calendário editorial que não vira bagunça." },
      { title: "Agendamento", desc: "Publica direto — Instagram, Google Calendar/Drive." },
      { title: "Produção", desc: "Vídeo hospedado (Bunny) e ativos no lugar." },
      { title: "Análise", desc: "Veja o que performou (Meta CAPI) e repita o que dá certo." },
    ],
    prova: "52 telas · 174 componentes · 69 migrations · 37 edge functions",
  },
  {
    id: "salvareceitas",
    name: "SalvaReceitas",
    tag: "Ao vivo · build in public",
    dor: "O próximo — construído na frente de todo mundo.",
    solucao: "Você vê o método acontecendo em tempo real.",
    ganhos: [
      "Cada etapa da construção vira bastidor da mentoria",
      "A prova de que a receita se repete",
      "Do zero ao no ar, documentado",
    ],
    accent: "#C9A24B",
    live: true,
    siteUrl: "#",
    problema:
      "Todo método soa bonito no papel. A pergunta que fica é: funciona de novo, do zero, na vida real?",
    solucaoLong:
      "O SalvaReceitas é o próximo produto — construído em público, ao vivo. Cada sessão de build vira conteúdo (post, aula, capítulo) via um diário de bordo. É a prova de que a receita se repete.",
    features: [
      { title: "Build in public", desc: "Cada etapa aberta, do zero ao no ar." },
      { title: "Diário de bordo", desc: "Toda sessão vira um registro — e material da mentoria." },
      { title: "Prova viva", desc: "O método aplicado em tempo real, sem edição." },
    ],
    prova: "Em construção — acompanhe ao vivo.",
  },
];

export const getSystem = (id) => systems.find((s) => s.id === id);
