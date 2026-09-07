import { PortfolioData } from '@/types';
import { blogs } from './blogs';

// Dados do site do Walter Espindola.
// Posicionamento: empresário de sucesso · construtor de sistemas · assessor de investimentos de alta renda.
// Imagens ficam em /public/img (fotos), /public/img/shots (telas dos sistemas).

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Walter Espindola',
        title: 'Empresário · Construtor de Sistemas · Assessor de Investimentos',
        subtitle: 'CEO da Zephyr Investimentos | Cuido do patrimônio de quem tem muito a perder e construo sistemas com IA',
        bio: 'Cresci numa pousada no litoral de Santa Catarina. Meus pais tocaram o negócio por 25 anos sem nunca ter um plano; em 2020, fechou. No segundo mês da pandemia a pergunta virou minha: "e agora, estamos fazendo certo?". Comecei a construir um sistema pra responder isso, primeiro pra mim e minha esposa, depois pra família e amigos. Esse sistema virou o Atlas, e o método que hoje uso com mais de 300 famílias. Foi aí que entendi que resolvo dores construindo sistemas. Hoje, à frente da Zephyr Investimentos, cuido do patrimônio de quem tem muito a perder, e construí, sozinho e com IA, três SaaS do zero: Atlas, Zephyr e Cria Social Club.',
        avatar: '/img/walter-hero.webp',
        location: 'Santa Catarina, Brasil',
        email: 'walterjoose@gmail.com',
        website: 'https://www.walterespindola.com.br',
        languages: [{ name: 'Português', level: 'Native' }],
        socialLinks: [
            { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/walter-espindola-885490121/', icon: 'linkedin', username: 'Walter Espindola' },
            { platform: 'Instagram', url: 'https://www.instagram.com/walterespindola_', icon: 'instagram', username: 'walterespindola_' },
            { platform: 'Email', url: 'mailto:walterjoose@gmail.com', icon: 'mail', username: 'walterjoose@gmail.com' },
        ],
    },

    projects: [
        {
            id: 'atlas',
            slug: 'atlas',
            title: 'Atlas',
            description: 'O plano que um bom assessor faria, num app, todo dia. Organização financeira pessoal com projeção patrimonial e relatórios por IA.',
            longDescription: 'Depois de estudar mais de 300 planejamentos reais, percebi que o que trava as pessoas não é falta de dinheiro, é falta de plano e de clareza. Quis colocar o trabalho de um bom assessor dentro de um app, acessível, pra qualquer pessoa usar todo dia. O Atlas mostra onde você está, o próximo passo e o que muda se você seguir um caminho diferente.',
            image: '/img/shots/atlas.webp',
            techStack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'OpenAI', 'Stripe'],
            tools: ['Lovable', 'Claude Code', 'Vercel'],
            status: 'completed',
            demoUrl: 'https://www.useatlasapp.com',
            startDate: '2020-05',
            category: 'SaaS · Finanças pessoais',
            role: 'Idealização, produto e construção',
            highlights: [
                '300+ famílias planejadas com o Método Atlas',
                '93 telas · 216 componentes · 159 migrations · 45 edge functions',
                'Planos Essencial, Pro e Elite com trial de 7 dias',
            ],
            features: [
                {
                    title: 'O que construí pra resolver a dor',
                    items: [
                        'Atlas Score: um índice que em 2 segundos diz onde você está e reage a cada decisão',
                        'Vista da Montanha: projeção patrimonial que transforma a aposentadoria em meta tangível',
                        'Simulador de Decisão: "e se?" pra qualquer escolha, com impacto em 10, 20, 30 anos',
                        'Método Atlas (IA): 5 relatórios com os mesmos diagnósticos que uso com 300+ famílias',
                        'Renda Passiva: carteira viva que mostra quando a sua renda te liberta',
                        'Household: PF e PJ na mesma jornada, com acesso extra pra planejar a dois',
                    ],
                },
            ],
            challengesAndSolutions: [
                {
                    problem: 'A maioria não sabe pra onde o dinheiro vai, muito menos pra onde ele a leva. Sem plano, as decisões grandes saem no impulso.',
                    solution: 'Levei o raciocínio de um planejador financeiro pra dentro do app: score, projeção no tempo e simulação antes de agir.',
                },
            ],
            galleryImages: ['/img/shots/atlas.webp', '/img/shots/atlas1.webp'],
        },
        {
            id: 'zephyr',
            slug: 'zephyr',
            title: 'Zephyr Planejamento',
            description: 'A plataforma interna da minha assessoria: planejamento patrimonial sob medida, CRM de clientes e o motor de projeção do Atlas por baixo.',
            longDescription: 'Toda assessoria promete atenção, mas roda em planilha e no improviso. Quis construir a plataforma que a minha assessoria merecia: o motor de projeção do Atlas por baixo, e um CRM que enxerga cada cliente de perto. É o negócio-mãe, a raiz da autoridade.',
            image: '/img/shots/zephyr.webp',
            techStack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
            tools: ['Lovable', 'Claude Code', 'Vercel'],
            status: 'ongoing',
            startDate: '2025-01',
            category: 'Plataforma interna · Assessoria de investimentos',
            role: 'Idealização, produto e construção',
            highlights: [
                'Planejamento patrimonial feito sob medida por cliente',
                'Relatórios de planejamento gerados com IA a partir dos dados do cliente',
                'Acesso por papel: planejadora, assessores e admin',
            ],
            features: [
                {
                    title: 'O que construí pra resolver a dor',
                    items: [
                        'Planejamento sob medida, montado a partir dos números reais de cada cliente',
                        'Motor de projeção (o mesmo do Atlas) pra rodar cenários por cliente',
                        'CRM do primeiro contato ao acompanhamento contínuo',
                        'Relatório completo em PDF e apresentação gerados com IA',
                    ],
                },
            ],
            challengesAndSolutions: [
                {
                    problem: 'Assessoria genérica trata todo mundo igual. Quem tem muito a perder precisa de alguém que enxergue o quadro completo, e de tecnologia à altura.',
                    solution: 'Tecnologia própria: cada cliente com o seu plano, projeção e acompanhamento num lugar só.',
                },
            ],
            galleryImages: ['/img/shots/zephyr.webp', '/img/shots/zephyr1.webp'],
        },
        {
            id: 'cria',
            slug: 'cria-social-club',
            title: 'Cria Social Club',
            description: 'Hub de conteúdo pra criadores: da ideia ao publicado num fluxo só, com IA no roteiro e integração com as redes.',
            longDescription: 'Todo criador tem ideia; poucos têm processo. O gargalo não é criatividade, é o caminho da ideia até o publicado. Construí um hub que segura a mão em cada etapa, com IA no meio.',
            image: '/img/shots/cria.webp',
            techStack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'OpenAI'],
            tools: ['Lovable', 'Claude Code', 'Vercel'],
            status: 'completed',
            startDate: '2025-09',
            category: 'SaaS · Criação de conteúdo',
            role: 'Idealização, produto e construção',
            highlights: [
                '52 telas · 174 componentes · 69 migrations · 37 edge functions',
                'Integrações: Instagram, Google Calendar e Drive, Bunny (vídeo), Meta CAPI',
                'Tendências pesquisadas na web e geração de ideias com IA',
            ],
            features: [
                {
                    title: 'O que construí pra resolver a dor',
                    items: [
                        'Ideação e roteiro com IA, do branco à pauta pronta',
                        'Calendário editorial e board de produção (ideia → planejamento → publicado)',
                        'Agendamento e publicação direta nas redes',
                        'Análise do que performou pra repetir o que dá certo',
                    ],
                },
            ],
            challengesAndSolutions: [
                {
                    problem: 'Criar com constância é caótico: a ideia surge, o roteiro trava, a produção atrasa e a análise nunca acontece.',
                    solution: 'Um fluxo único com IA em cada etapa, pra ideia nunca se perder entre o pensar e o publicar.',
                },
            ],
            galleryImages: ['/img/shots/cria.webp', '/img/shots/cria1.webp', '/img/shots/cria2.webp'],
        },
    ],

    experiences: [
        {
            id: 'zephyr-ceo',
            company: 'Zephyr Investimentos',
            position: 'Fundador & CEO',
            description: 'Assessoria de investimentos de alta renda. Planejamento patrimonial sob medida e acompanhamento de perto pra quem tem muito a perder. Poucos clientes, alto toque, tecnologia própria.',
            responsibilities: [
                'Assessoria e planejamento patrimonial de famílias de alta renda',
                'Gestão de cerca de R$ 260 milhões sob custódia',
                'Construção da plataforma própria de planejamento (Zephyr)',
                'Liderança do time de assessores e planejadores',
            ],
            skills: ['Planejamento financeiro', 'Gestão de patrimônio', 'Assessoria de investimentos', 'Liderança'],
            startDate: '2016-01', // TODO Walter: confirmar a data
            isOngoing: true,
            location: 'Santa Catarina, Brasil',
            type: 'self-employed',
            impact: ['R$ 260M sob gestão', '300+ famílias planejadas', '10+ anos no mercado financeiro'],
        },
        {
            id: 'builder',
            company: 'Atlas · Zephyr · Cria Social Club',
            position: 'Fundador & Construtor de Sistemas',
            description: 'Três SaaS construídos do zero, sozinho, com IA, pela mesma receita repetível: Lovable, Supabase, IA no core, pagamento e lançamento.',
            responsibilities: [
                'Idealização, produto e construção de ponta a ponta',
                'Arquitetura de dados, autenticação e segurança (Supabase, RLS)',
                'Integrações: OpenAI, Claude, Stripe, Asaas, PlugNotas, Instagram, Google',
                'Lançamento, tráfego e cobrança',
            ],
            skills: ['Lovable', 'Supabase', 'Claude Code', 'OpenAI', 'Stripe', 'Asaas', 'Produto'],
            startDate: '2020-05',
            isOngoing: true,
            type: 'self-employed',
            impact: ['3 SaaS no ar', 'Centenas de telas e automações', 'Zero linhas escritas à mão, tudo com IA'],
        },
        {
            id: 'mentor',
            company: 'Da Ideia ao Sistema em 24 horas',
            position: 'Mentor',
            description: 'Curso e mentoria 1:1 pra quem tem uma ideia e quer colocá-la no ar, com IA, sem saber programar. O mesmo método que usei nos meus sistemas.',
            skills: ['Método', 'IA aplicada', 'Produto', 'Lançamento'],
            startDate: '2026-01',
            isOngoing: true,
            type: 'self-employed',
        },
    ],

    // TODO Walter: formação acadêmica e certificações (ex.: CEA, CPA-20, ANCORD)
    education: [],

    achievements: [
        {
            id: 'aum',
            title: 'R$ 260 milhões sob gestão',
            issuer: 'Zephyr Investimentos',
            date: '2026',
            description: 'Patrimônio sob custódia na assessoria, com poucos clientes e acompanhamento de perto.',
            category: 'recognition',
            tags: ['Assessoria', 'Alta renda'],
        },
        {
            id: 'familias',
            title: '300+ famílias planejadas',
            issuer: 'Método Atlas',
            date: '2026',
            description: 'Planejamentos financeiros reais que deram origem ao método e aos relatórios por IA do Atlas.',
            category: 'recognition',
            tags: ['Planejamento', 'Método'],
        },
        {
            id: 'saas',
            title: '3 SaaS construídos do zero com IA',
            issuer: 'Atlas · Zephyr · Cria',
            date: '2020 – 2026',
            description: 'Três produtos completos, sozinho, pela mesma receita repetível.',
            category: 'recognition',
            tags: ['Construção', 'IA'],
        },
        {
            id: 'anos',
            title: '10+ anos no mercado financeiro',
            issuer: 'Carreira',
            date: '2016 – 2026',
            description: 'Uma década cuidando do dinheiro de quem tem muito a perder.',
            category: 'recognition',
            tags: ['Mercado financeiro'],
        },
    ],

    techStack: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase', category: 'database' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'framework' },
        { name: 'OpenAI', icon: 'https://cdn.simpleicons.org/openai', category: 'library' },
        { name: 'Anthropic (Claude)', icon: 'https://cdn.simpleicons.org/anthropic', category: 'library' },
        { name: 'Stripe', icon: 'https://cdn.simpleicons.org/stripe', category: 'tool' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', category: 'cloud' },
        { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite', category: 'tool' },
    ],

    hardSkills: [
        { name: 'Planejamento financeiro e patrimonial', level: 'expert', category: 'other', description: 'Diagnóstico, projeção e plano sob medida.' },
        { name: 'Assessoria de investimentos de alta renda', level: 'expert', category: 'other', description: 'Poucos clientes, alto toque, visão de longo prazo.' },
        { name: 'Construção de SaaS com IA', level: 'expert', category: 'ai', description: 'Lovable + Claude Code, do zero ao no ar.' },
        { name: 'Supabase · PostgreSQL · RLS', level: 'advanced', category: 'database', description: 'Dados, login e segurança de verdade.' },
        { name: 'Integrações de pagamento', level: 'advanced', category: 'backend', description: 'Stripe e Asaas, checkout e webhooks.' },
        { name: 'IA no core do produto', level: 'advanced', category: 'ai', description: 'OpenAI e Claude via Edge Functions, com cota.' },
        { name: 'Front-end de produto', level: 'advanced', category: 'frontend', description: 'React e Tailwind, com foco em clareza.' },
        { name: 'Lançamento e tráfego', level: 'intermediate', category: 'other', description: 'Landing, pixel e campanha.' },
    ],

    softSkills: [
        { name: 'Visão de negócio', description: 'Enxergo a dor antes da solução.' },
        { name: 'Execução', description: 'Do papel ao no ar, rápido e repetível.' },
        { name: 'Liderança', description: 'Time, clientes e produto na mesma direção.' },
        { name: 'Comunicação clara', description: 'Explico o complexo de um jeito simples.' },
        { name: 'Disciplina', description: 'Método em tudo, do dinheiro ao código.' },
    ],

    tools: [
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', category: 'devops' },
        { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion', category: 'productivity' },
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
    ],

    faqs: [
        {
            question: 'Você atende qualquer investidor?',
            answer: 'Não. A Zephyr é uma assessoria de alta renda, com poucos clientes e acompanhamento de perto. Se faz sentido pra você, me chama e a gente conversa.',
        },
        {
            question: 'Você constrói sistemas pra outras empresas?',
            answer: 'Construo sistemas pra resolver dores reais. Projetos sob medida são avaliados caso a caso, é só entrar em contato.',
        },
        {
            question: 'Como você construiu 3 SaaS sem programar?',
            answer: 'Com um método repetível e IA: Lovable pra construir, Supabase pra dados e segurança, IA no core, pagamento e lançamento. É o mesmo esqueleto nos quatro.',
        },
        {
            question: 'Existe mentoria?',
            answer: 'Sim: "Da Ideia ao Sistema em 24 horas", em curso gravado ou mentoria 1:1 (4 encontros). É pra quem tem uma ideia e quer colocá-la no ar sem saber programar.',
        },
        {
            question: 'Como falo com você?',
            answer: 'Pelo formulário de contato do site. Eu respondo pessoalmente.',
        },
    ],

    blogs,

    gallery: [
        { id: 'g1', title: 'Walter Espindola', description: 'CEO da Zephyr Investimentos', date: '2026', type: 'image', url: '/img/walter-hero.webp', category: 'Retratos' },
        { id: 'g2', title: 'No escritório', description: 'Entre clientes, sistemas e planejamento', date: '2026', type: 'image', url: '/img/walter-historia.webp', category: 'Retratos' },
        { id: 'g3', title: 'Olhando o horizonte', description: 'Pensar em décadas, não em meses', date: '2026', type: 'image', url: '/img/walter-mood.webp', category: 'Retratos' },
        { id: 'g4', title: 'Atlas', description: 'Mapa do Futuro · Vista da Montanha', date: '2026', type: 'image', url: '/img/shots/atlas.webp', category: 'Sistemas' },
        { id: 'g5', title: 'Zephyr', description: 'Relatório de planejamento', date: '2026', type: 'image', url: '/img/shots/zephyr.webp', category: 'Sistemas' },
        { id: 'g7', title: 'Cria Social Club', description: 'Board de conteúdo', date: '2026', type: 'image', url: '/img/shots/cria.webp', category: 'Sistemas' },
    ],
};
