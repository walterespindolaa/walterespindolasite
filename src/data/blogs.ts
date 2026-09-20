import type { BlogPost } from './types';

import { IMG } from './images';

const AUTHOR = { name: 'Walter Espindola', avatar: IMG.retrato1 };

// Um texto novo por semana. Categorias: 'more' = Patrimônio, 'software-development' = Sistemas,
// 'applied-ai' = Construção, 'about-me' = Sobre mim.
export const blogs: BlogPost[] = [
    {
        id: 'b01',
        slug: 'o-que-a-pousada-dos-meus-pais-me-ensinou-sobre-dinheiro',
        title: 'O que a pousada dos meus pais me ensinou sobre dinheiro',
        excerpt: 'Vinte e cinco anos de trabalho duro, zero planejamento. A conta chegou em 2020. Foi ali que eu entendi o que a falta de plano custa de verdade.',
        image: IMG.retrato4,
        date: '2026-09-07',
        category: 'about-me',
        tags: ['história', 'planejamento', 'família'],
        author: AUTHOR,
        readTime: '4',
        content: `Cresci dentro de uma pousada no litoral de Santa Catarina. Meus pais acordavam antes dos hóspedes e dormiam depois deles. Vinte e cinco anos assim. Eu via o esforço todo dia, e por muito tempo achei que esforço era o suficiente.

Não era.

## O que faltava não era trabalho

A pousada nunca teve um plano. Tinha temporada boa e temporada ruim, e a diferença entre as duas era o que sobrava no caixa. Quando sobrava, gastava. Quando faltava, apertava. Ninguém sentava pra perguntar: e daqui a dez anos? E se a temporada ruim vier duas vezes seguidas?

Em 2020 veio a pandemia, e com ela a resposta. A pousada fechou.

## A lição que ficou

Eu já trabalhava no mercado financeiro naquela época. Sabia fazer conta, sabia falar de alocação, de risco, de horizonte. Mas foi vendo o negócio dos meus pais fechar que a teoria virou algo físico. Faltou plano. Não faltou esforço, não faltou honestidade, não faltou cliente. Faltou alguém olhar o todo e dizer: isso aqui não se sustenta assim.

Hoje, quando eu sento com uma família na Zephyr, é essa cena que eu tenho na cabeça. A pessoa pode ganhar muito bem. Pode ter patrimônio. E ainda assim estar repetindo a pousada em outra escala: ganhando, gastando, sem saber pra onde vai.

## Por que eu conto isso

Porque o meu trabalho não é escolher fundo. É evitar que a conta chegue como chegou pra minha família. Plano não é planilha bonita. É saber, com antecedência, o que acontece se a temporada ruim vier duas vezes.

Se você tem um negócio, ou uma renda boa, e nunca fez essa pergunta, esse texto é o começo da conversa.`
    },
    {
        id: 'b02',
        slug: 'a-pergunta-que-virou-um-sistema',
        title: 'A pergunta que virou um sistema',
        excerpt: 'Segundo mês de pandemia, eu e minha esposa olhando as contas. "A gente está fazendo certo?" Ninguém tinha a resposta. Então eu construí uma.',
        image: IMG.atlas,
        date: '2026-08-31',
        category: 'software-development',
        tags: ['atlas', 'origem', 'casais'],
        author: AUTHOR,
        readTime: '5',
        content: `Maio de 2020. Eu e minha esposa sentamos na mesa da cozinha com as contas abertas. Duas rendas boas, nenhuma dívida, e mesmo assim uma pergunta que a gente não sabia responder: a gente está fazendo certo?

Eu trabalhava com investimentos. Deveria saber. Mas o que eu sabia era responder isso pra cliente, com relatório, com reunião marcada. Pra mim mesmo eu não tinha ferramenta nenhuma. Tinha planilha, e planilha envelhece no dia seguinte.

## O primeiro esboço

Comecei a montar uma coisa simples. Onde o dinheiro entra, onde sai, o que sobra, e o que aquele "sobra" vira daqui a cinco, dez, vinte anos. Não era bonito. Era uma tela com números e uma projeção.

O que mudou não foi o número. Foi a conversa. Pela primeira vez a gente olhava pro mesmo mapa. Discordar ficou mais fácil, decidir ficou mais rápido.

## De nós dois pra 300 famílias

Mostrei pra minha família. Depois pra amigos. Todo mundo tinha a mesma pergunta e ninguém tinha o mapa. Cada pessoa que usava trazia uma dor nova: "e o financiamento?", "e se eu quiser parar de trabalhar aos 50?", "e a reserva?".

Cada dor virou uma tela. O esboço virou o Atlas. E o jeito de conduzir a conversa virou o método que eu uso hoje com mais de 300 famílias na assessoria.

## O que eu aprendi construindo

Que a dor certa vale mais que a ideia genial. Eu não sentei pra "criar um app". Sentei pra responder uma pergunta que doía em mim. A ferramenta apareceu depois.

Desde então, toda vez que uma dor se repete três vezes na minha frente, eu já sei o que fazer com ela.`
    },
    {
        id: 'b03',
        slug: 'ganhar-bem-e-nao-saber-pra-onde-o-dinheiro-vai',
        title: 'Ganhar bem e não saber pra onde o dinheiro vai',
        excerpt: 'É o caso mais comum que eu vejo em famílias de alta renda. Não é falta de dinheiro. É falta de mapa.',
        image: IMG.retrato1,
        date: '2026-08-24',
        category: 'more',
        tags: ['patrimônio', 'alta renda', 'planejamento'],
        author: AUTHOR,
        readTime: '4',
        content: `Tem um perfil que aparece toda semana na minha agenda. Casal, os dois com carreira boa, renda que muita gente sonharia. Casa, carro, viagem no ano. E uma sensação incômoda de que, com tudo isso, deveria estar sobrando mais.

Não é problema de renda. É problema de mapa.

## O sintoma

Quando eu pergunto "quanto vocês investem por mês?", a resposta é quase sempre "o que sobra". E "o que sobra" é o pior plano que existe, porque ele muda todo mês e nunca é decidido por vocês. É decidido pelo boleto.

Quando eu pergunto "em quantos anos vocês querem ter liberdade pra escolher se trabalham?", vem um silêncio. Ninguém fez a conta. Então ninguém sabe se está no caminho.

## O que muda com um plano

Plano não é cortar o café. É decidir, antes do mês começar, quanto vai pra cada lugar. É saber que o número de hoje projeta um patrimônio X em 2040, e que mudar 5% na alocação muda o X. É transformar uma sensação ("deveria estar sobrando mais") em um dado ("está sobrando 18%, precisava de 25%").

Na Zephyr, a primeira reunião não é sobre produto. É sobre isso. Diagnóstico, projeção, e só depois alocação.

## Por onde começar

Três perguntas, e só três:

- Quanto entra e quanto sai, de verdade, nos últimos três meses?
- Se nada mudar, onde isso chega em dez anos?
- Esse lugar é onde vocês querem chegar?

Se a terceira resposta for "não", já valeu a conversa.`
    },
    {
        id: 'b04',
        slug: 'como-eu-construo-um-sistema-sem-saber-programar',
        title: 'Como eu tiro um sistema do papel',
        excerpt: 'Três sistemas no ar, todos construídos sozinho. Não é mágica e não é sorte. É uma ordem que eu sigo sempre, e que dá pra ensinar.',
        image: IMG.atlas1,
        date: '2026-08-17',
        category: 'applied-ai',
        tags: ['método', 'construção', 'processo'],
        author: AUTHOR,
        readTime: '6',
        content: `Eu não sou programador de formação. Sou assessor de investimentos. E tenho três sistemas no ar, usados por gente de verdade, com login, pagamento e relatório automático. Vou contar como, sem romantizar.

## A ordem

Toda vez que eu construo, sigo a mesma sequência. Sempre.

1. **Dor.** Escrevo em uma frase qual problema o sistema resolve e pra quem. Se não cabe em uma frase, não está claro, e eu não começo.
2. **Telas no papel.** Antes de qualquer ferramenta, desenho as três ou quatro telas principais. Só o essencial. O que a pessoa precisa ver primeiro, o que ela faz depois.
3. **Dados.** Defino o que precisa ser guardado. Usuário, plano, transação, relatório. Isso vira o banco, e o banco decide o resto.
4. **Construção.** Aqui entram as ferramentas. Eu construo tela por tela, testo com gente de verdade, corrijo, volto. Nada de "vamos fazer tudo e lançar depois".
5. **O que faz a diferença.** Todo sistema meu tem uma parte que faz o trabalho pesado pelo usuário: gerar o relatório, resumir, sugerir o próximo passo. É o que faz a pessoa dizer "isso aqui é diferente".
6. **Pagamento e lançamento.** Um plano simples, cobrança ligada, no ar. Depois melhoro.

## O que nenhuma ferramenta faz por você

Ela não sabe qual dor importa. Não sabe o que o seu cliente precisa ver na primeira tela. Não sabe quando uma funcionalidade é excesso. Isso é critério, e o meu vem de dez anos ouvindo família falar de dinheiro.

Por isso quem se dá bem construindo não é quem sabe mais de tecnologia. É quem conhece melhor a dor e tem disciplina pra seguir a ordem.

## Por que eu ensino isso

Porque a sequência se repete. Foi assim no Atlas, foi assim na plataforma da Zephyr, foi assim no Cria. E se repete comigo, repete com quem tem uma dor clara e uma ideia. É isso que eu faço na mentoria: sento com a pessoa e a gente vai da ideia ao sistema no ar.`
    },
    {
        id: 'b05',
        slug: 'a-planilha-envelhece-no-dia-seguinte',
        title: 'A planilha envelhece no dia seguinte',
        excerpt: 'Por que eu construí a plataforma da própria Zephyr em vez de continuar entregando planejamento em Excel.',
        image: IMG.zephyrApp1,
        date: '2026-08-10',
        category: 'software-development',
        tags: ['zephyr', 'assessoria', 'plataforma'],
        author: AUTHOR,
        readTime: '4',
        content: `Durante anos eu entreguei planejamento financeiro em planilha. Bonita, cheia de aba, com gráfico. O cliente abria na reunião, dizia "que legal", e nunca mais abria.

Não era culpa dele. Planilha é uma foto. E patrimônio é um filme.

## O problema real

No dia seguinte à reunião, o mercado mexeu, uma despesa apareceu, um aporte não aconteceu. A planilha continuou dizendo a mesma coisa. Em três meses ela contava uma história que não existia mais. E o cliente, sem perceber, tomava decisão com base numa foto velha.

Eu tinha duas opções: refazer a planilha toda semana pra 300 famílias, ou construir algo que se atualizasse sozinho.

## O que a plataforma faz

A plataforma da Zephyr nasceu pra isso. O plano vive lá dentro. A carteira entra, a projeção recalcula, o relatório sai explicando o que mudou e por quê. O cliente abre no celular e vê o filme, não a foto.

Pra mim, mudou a rotina inteira. Eu deixei de ser o cara que atualiza planilha e virei o cara que interpreta o que a plataforma mostra. É um uso muito melhor das minhas horas e das horas do cliente.

## A regra que eu tirei disso

Se uma tarefa se repete toda semana e depende de mim pra acontecer, ela é candidata a sistema. Não porque eu goste de construir. Porque o cliente merece o filme.`
    },
    {
        id: 'b06',
        slug: 'reserva-de-emergencia-para-quem-ganha-bem',
        title: 'Reserva de emergência pra quem ganha bem',
        excerpt: 'Seis meses de custo é o conselho padrão. Pra alta renda, o número certo depende de uma pergunta que quase ninguém faz.',
        image: IMG.retrato5,
        date: '2026-08-03',
        category: 'more',
        tags: ['reserva', 'risco', 'alta renda'],
        author: AUTHOR,
        readTime: '4',
        content: `"Seis meses de custo de vida." É o que todo mundo repete, e não está errado. Mas pra quem ganha bem, o número precisa de mais uma pergunta: quanto tempo você levaria pra repor a sua renda, no mesmo nível?

## A renda alta tem um risco escondido

Um médico com consultório, um executivo sênior, um empresário. A renda é alta, mas é concentrada. Se ela para, não é um emprego de 30 dias pra substituir. É um ano, às vezes dois, pra voltar ao mesmo patamar.

Então a reserva não deve cobrir "seis meses de conta". Deve cobrir o tempo de reconstrução da renda, com o padrão de vida que a família já tem. Pra muitos dos meus clientes isso dá 12 a 18 meses.

## Onde essa reserva fica

Aqui é onde a maioria erra pro outro lado: deixa tudo em conta corrente ou num CDB qualquer. Reserva precisa de liquidez, sim, mas não precisa ficar parada. Existe camada: uma parte de acesso imediato, uma parte com um ou dois dias de resgate, e uma parte que rende mais e serve pra um cenário mais longo.

## O que eu faço na prática

Na Zephyr, a reserva é o primeiro bloco do plano, antes de qualquer conversa sobre retorno. Eu prefiro um cliente com reserva grande e carteira conservadora do que um com carteira agressiva e reserva de três meses. O segundo vende na hora errada. Sempre.

Se você nunca fez a conta do tempo de reconstrução da sua renda, faz hoje. O número costuma surpreender.`
    },
    {
        id: 'b07',
        slug: 'o-cria-social-club-e-o-medo-de-publicar',
        title: 'O Cria Social Club e o medo de publicar',
        excerpt: 'Eu tinha muito o que dizer e travava na hora de postar. Construí um sistema pra resolver isso pra mim. Ele virou produto.',
        image: IMG.cria,
        date: '2026-07-27',
        category: 'software-development',
        tags: ['cria', 'conteúdo', 'processo'],
        author: AUTHOR,
        readTime: '4',
        content: `Todo mundo me dizia a mesma coisa: "Walter, você precisa produzir conteúdo". Eu concordava. E não fazia.

Não era falta de assunto. Dez anos ouvindo família falar de dinheiro rendem assunto pra uma vida. O problema era o caminho entre a ideia e o post: pensar o gancho, escrever, ajustar pra cada rede, achar a imagem, agendar. No meio disso, a ideia morria.

## Onde a dor estava

Eu percebi que eu não tinha um problema de criatividade. Tinha um problema de fluxo. Cada etapa vivia num lugar diferente: nota no celular, texto no doc, imagem no Canva, agenda em outra ferramenta. Cada troca de lugar era uma chance de desistir.

## O que eu construí

O Cria Social Club junta tudo em um fluxo só. A ideia entra bruta. O sistema puxa o roteiro, sugere o gancho, adapta pra carrossel ou pra vídeo. A imagem sai do mesmo lugar. Vai pra fila. Publica.

Fiz pra mim. Depois pra dois amigos que tinham a mesma trava. Depois virou produto, com plano e tudo.

## O padrão que se repete

É o mesmo padrão do Atlas: uma dor minha, resolvida do meu jeito, que se revela dor de muita gente. Eu não saio procurando ideia de sistema. Eu presto atenção no que me trava e no que trava as pessoas em volta.

Se você tem o que dizer e não publica, provavelmente o seu problema também é de fluxo, não de talento.`
    },
    {
        id: 'b08',
        slug: 'funcionalidade-nao-e-favor',
        title: 'Funcionalidade não é favor',
        excerpt: 'Todo sistema quer ter mais botão. O que segura o usuário é o que o sistema tira das costas dele, não o que coloca na tela.',
        image: IMG.retrato3,
        date: '2026-07-20',
        category: 'applied-ai',
        tags: ['produto', 'decisão', 'construção'],
        author: AUTHOR,
        readTime: '5',
        content: `Toda semana aparece uma sugestão nova de funcionalidade. Cliente pede, amigo sugere, eu mesmo tenho ideia no banho. Se eu aceitasse todas, o Atlas teria 80 telas e ninguém usaria nenhuma.

Eu tenho um critério simples pra decidir o que entra: a funcionalidade tira trabalho das costas do usuário ou só decora a tela?

## O teste

Pega a ideia e pergunta: se ela não existir, o usuário deixa de fazer algo importante? Se a resposta é "não, ele só deixa de ver um gráfico a mais", é enfeite. Se a resposta é "ele volta pra planilha", é essencial.

No Atlas, o relatório mensal escrito em linguagem de gente, explicando o que mudou no patrimônio do casal, é essencial. Sem ele, o Atlas seria uma planilha bonita. Um gráfico de pizza da carteira é enfeite: bonito na demo, esquecido no uso.

## Onde eu procuro o que construir

Eu procuro a etapa em que o usuário mais desiste. Aquele ponto do fluxo em que a pessoa fecha a aba. Quase sempre é uma tarefa chata que exige escrever, resumir ou decidir. É ali que uma funcionalidade paga o próprio custo.

No Cria, o ponto de desistência era transformar a ideia bruta em roteiro. No Zephyr, era atualizar a projeção depois de cada mudança na carteira. Nos dois casos, a funcionalidade que resolveu isso é a que as pessoas mais usam.

## O erro mais comum

Construir pra impressionar na demonstração. Painel cheio, animação, assistente que conversa. Isso vende na primeira reunião e some no uso diário. O que segura o usuário é o sistema entregando algo pronto que ele levaria uma hora pra fazer.

Constrói pra tirar trabalho, não pra parecer moderno.`
    },
    {
        id: 'b09',
        slug: 'poucos-clientes-e-uma-decisao',
        title: 'Poucos clientes é uma decisão',
        excerpt: 'A Zephyr não cresce em número de famílias. Cresce em profundidade. Explico por que isso é uma escolha e não uma limitação.',
        image: IMG.retrato6,
        date: '2026-07-13',
        category: 'more',
        tags: ['zephyr', 'assessoria', 'modelo'],
        author: AUTHOR,
        readTime: '4',
        content: `Volta e meia alguém pergunta por que a Zephyr não tem centenas de assessores e milhares de clientes. A resposta curta: porque eu não quero. A resposta longa é esse texto.

## O que o cliente de alta renda precisa

Não é produto. Produto ele acha em qualquer plataforma. O que ele precisa é de alguém que conheça a família, saiba que o filho vai pra faculdade em 2029, saiba que a empresa tem sazonalidade, saiba que o sócio quer sair em três anos. Isso não escala com volume. Escala com atenção.

## O modelo

Cada família na Zephyr tem um plano vivo, revisado com frequência, e alguém que atende no mesmo dia. Cerca de R$ 260 milhões sob gestão, distribuídos entre famílias que eu conheço pelo nome. Se eu dobrasse o número de clientes amanhã, a primeira coisa a cair seria isso.

Por isso a tecnologia entra: a plataforma faz o trabalho repetitivo, e a minha hora vai pra decisão e pra relação.

## O que eu ganho com isso

Clientes que ficam por décadas. Indicação, não anúncio. E um trabalho que eu gosto de fazer, porque cada reunião é sobre uma vida, não sobre uma meta de captação.

Crescer é bom. Crescer do jeito errado destrói o que faz o negócio valer. Eu prefiro ser pequeno e profundo.`
    },
    {
        id: 'b10',
        slug: 'da-ideia-ao-sistema-em-24-horas-o-que-acontece-de-verdade',
        title: 'Da Ideia ao Sistema em 24 horas: o que acontece de verdade',
        excerpt: 'Não é um curso de programação. É o caminho que eu percorri três vezes, organizado pra alguém percorrer comigo.',
        image: IMG.retrato2,
        date: '2026-07-06',
        category: 'applied-ai',
        tags: ['mentoria', 'método', 'construção'],
        author: AUTHOR,
        readTime: '5',
        content: `Depois do terceiro sistema no ar, amigos começaram a pedir: "senta comigo e me mostra como você faz". Sentei com alguns. Vi que dava pra organizar. Virou a mentoria Da Ideia ao Sistema em 24 horas.

## O que não é

Não é curso de código. Você não vai aprender React. Não é curso de "ganhe dinheiro na internet". Não tem promessa de renda.

## O que é

São quatro encontros, um por semana, de uma hora a uma hora e meia. Dois cérebros em cima da sua ideia. A ordem é a mesma que eu uso:

**Encontro 1: a dor.** A gente destrói e reconstrói a sua ideia até ela caber em uma frase. Quem sofre, com o quê, e o que muda depois. Muita ideia morre aqui, e isso é bom.

**Encontro 2: telas e dados.** Desenhamos as três telas essenciais e definimos o que precisa ser guardado. Você sai com o esqueleto.

**Encontro 3: construção.** A gente constrói junto, com as ferramentas que eu uso nos meus sistemas. Você vê a tela nascer na sua frente e aprende a conduzir o processo do jeito que funciona.

**Encontro 4: o que faz diferença, pagamento e ar.** Colocamos a funcionalidade que tira trabalho do usuário, ligamos o pagamento e publicamos.

## Pra quem é

Pra quem tem uma dor clara, de preferência que já viveu na pele, e quer um sistema no ar sem depender de agência ou de sócio técnico. Se você só tem "uma ideia de app", ainda não é a hora.

O nome é 24 horas porque é o tempo somado de trabalho real entre um encontro e outro. O resto é decisão.`
    },
    {
        id: 'b11',
        slug: 'sucessao-nao-e-assunto-de-velho',
        title: 'Sucessão não é assunto de velho',
        excerpt: 'A maioria começa a pensar em sucessão tarde demais. Quem tem patrimônio e filhos precisa começar agora, e é mais simples do que parece.',
        image: IMG.zephyrApp,
        date: '2026-06-29',
        category: 'more',
        tags: ['sucessão', 'família', 'patrimônio'],
        author: AUTHOR,
        readTime: '4',
        content: `Sucessão é o assunto que todo cliente empurra pra depois. "Ainda sou novo." "Quando a empresa estabilizar." "Ano que vem." Enquanto isso, o patrimônio cresce e o problema cresce junto.

## Por que importa agora

Sem planejamento, uma parte relevante do que você construiu vai embora em imposto, em custo de inventário e em tempo travado. E tem o lado que não aparece na conta: família brigando por decisão que você poderia ter tomado em vida.

Quanto mais cedo você organiza, mais barato e mais tranquilo fica. É a regra.

## O que planejar sucessão significa na prática

Não é só testamento. É decidir como o patrimônio está estruturado hoje: o que fica em nome de pessoa física, o que vai pra holding, como ficam os imóveis, como fica a empresa, quem decide o quê se você não puder decidir.

Na Zephyr isso entra no plano junto com todo o resto. Não é um módulo à parte, é uma camada do mesmo mapa.

## Um caso comum

Casal com dois filhos, um imóvel de valor alto, uma empresa e carteira de investimentos. Sem estrutura, o inventário leva anos e consome uma fatia do patrimônio. Com estrutura feita a tempo, a transição acontece sem processo, sem briga, com a empresa continuando a funcionar.

A diferença entre os dois cenários é uma decisão tomada com dez anos de antecedência. Toma agora.`
    },
    {
        id: 'b12',
        slug: 'o-que-eu-uso-pra-construir-e-por-que',
        title: 'O que eu uso pra construir, e por quê',
        excerpt: 'Minha stack não é a mais moderna. É a que me deixa colocar um sistema no ar sozinho, em semanas, sem depender de ninguém.',
        image: IMG.cria1,
        date: '2026-06-22',
        category: 'applied-ai',
        tags: ['stack', 'ferramentas', 'construção'],
        author: AUTHOR,
        readTime: '5',
        content: `Gente que programa às vezes torce o nariz pra minha stack. Tudo bem. Eu não escolho ferramenta pra impressionar programador. Escolho pra colocar sistema no ar sozinho e continuar dono dele.

## Lovable

É onde a tela nasce. Eu descrevo o que quero, testo, ajusto. A vantagem não é velocidade, é foco: eu penso na experiência do usuário, não em como centralizar um botão.

## Supabase

Banco de dados, login, permissões e segurança em um lugar só. Todo sistema meu começa por aqui, com as tabelas desenhadas antes de qualquer tela. Se o dado está certo, o resto é consequência.

## Stripe e Asaas

Pagamento. Stripe pra cartão internacional, Asaas pra boleto e Pix no Brasil. Ligar pagamento cedo muda a seriedade do projeto: a partir dali tem gente pagando.

## Vercel

Onde tudo fica no ar. Subi, está publicado. Não tenho paciência pra servidor.

## O critério

Toda ferramenta da lista passa pelo mesmo filtro: consigo operar sozinho? Consigo trocar se precisar? O cliente final nem sabe que ela existe? Se as três respostas forem sim, entra.

A melhor stack é a que você domina e que não te deixa refém. A minha é essa.`
    },
    {
        id: 'b13',
        slug: 'o-erro-que-eu-mais-vejo-em-carteiras-de-alta-renda',
        title: 'O erro que eu mais vejo em carteiras de alta renda',
        excerpt: 'Não é falta de diversificação. É excesso de produto sem plano por trás. A carteira vira um museu de decisões antigas.',
        image: IMG.retrato5,
        date: '2026-06-15',
        category: 'more',
        tags: ['carteira', 'alocação', 'assessoria'],
        author: AUTHOR,
        readTime: '4',
        content: `Quando uma família nova chega na Zephyr, a primeira coisa que eu faço é abrir a carteira atual. E quase sempre encontro a mesma cena: quarenta produtos, comprados em momentos diferentes, cada um por um motivo que já ninguém lembra.

Eu chamo isso de museu. Cada fundo é uma placa contando uma decisão antiga.

## Como o museu se forma

Um assessor ofereceu algo em 2019. Um amigo indicou um fundo em 2021. Uma corretora fez campanha de um CDB em 2023. Nenhuma dessas decisões foi errada sozinha. O erro é que ninguém perguntou: como isso conversa com o resto? Pra que serve dentro do plano?

Resultado: risco que ninguém mediu, concentração que ninguém percebeu, e liquidez que ninguém sabe onde está.

## O que eu faço

Antes de mexer em qualquer coisa, eu construo o plano. Objetivos, prazo, reserva, renda futura. Só depois a carteira é desenhada de trás pra frente: cada posição existe porque cumpre uma função no mapa. Se não cumpre, sai, mesmo que esteja rendendo bem.

Uma carteira boa geralmente tem menos produtos do que a pessoa imagina. E cada um tem um porquê que dá pra explicar em uma frase.

## O teste que você pode fazer hoje

Abre a sua carteira e, pra cada posição, tenta responder: pra que isso serve no meu plano? Se você travar em mais de três, você tem um museu. E museu é bonito, mas não paga aposentadoria.`
    },
    {
        id: 'b14',
        slug: 'a-dor-certa-vale-mais-que-a-ideia-genial',
        title: 'A dor certa vale mais que a ideia genial',
        excerpt: 'Toda semana alguém me conta uma ideia de app. Quase nenhuma nasce de uma dor vivida. É por isso que quase nenhuma sai do papel.',
        image: IMG.retrato1,
        date: '2026-06-08',
        category: 'software-development',
        tags: ['ideia', 'validação', 'construção'],
        author: AUTHOR,
        readTime: '4',
        content: `"Tenho uma ideia de app." Eu ouço isso toda semana. E a minha primeira pergunta é sempre a mesma: qual dor você vive que esse app resolve?

O silêncio que vem depois é a resposta.

## Ideia de fora e dor de dentro

Ideia de fora é aquela que vem de olhar o mercado. "Ninguém fez um app pra isso." "Esse setor está atrasado." Pode até ser verdade, mas quem constrói não conhece o problema por dentro, então adivinha. E adivinhar é caro.

Dor de dentro é o que você sente na pele todo dia. O Atlas veio da minha mesa de cozinha. O Cria veio da minha trava pra publicar. A plataforma da Zephyr veio da minha planilha que envelhecia. Em nenhum dos três eu precisei adivinhar o que o usuário queria, porque o primeiro usuário era eu.

## O sinal de que a dor é real

Ela se repete. Três pessoas diferentes reclamam da mesma coisa, sem você perguntar. Você já tentou resolver com gambiarra, planilha, grupo de WhatsApp. Existe um momento específico em que a pessoa desiste, e você sabe qual é.

Quando os três sinais aparecem juntos, você não tem uma ideia. Tem um sistema esperando pra ser construído.

## O conselho

Para de procurar ideia. Começa a anotar dor. A sua, a dos seus clientes, a das pessoas em volta. Em um mês você vai ter uma lista, e uma delas vai se repetir mais que as outras. É por ali.`
    },
    {
        id: 'b15',
        slug: 'por-que-eu-cuido-de-patrimonio-e-construo-sistemas',
        title: 'Por que eu cuido de patrimônio e construo sistemas',
        excerpt: 'Parece duas carreiras. É uma só. Assessor, empresário e construtor são três jeitos de fazer a mesma coisa: transformar dor em plano.',
        image: IMG.retrato4,
        date: '2026-06-01',
        category: 'about-me',
        tags: ['posicionamento', 'história', 'método'],
        author: AUTHOR,
        readTime: '4',
        content: `Quando eu me apresento, as pessoas estranham. "Você é assessor de investimentos ou faz sistema?" Os dois. E não é dispersão. É o mesmo trabalho, visto de ângulos diferentes.

## O fio

O que eu faço, em qualquer uma das três frentes, é pegar uma dor confusa e transformar em plano. Na assessoria, a dor é "não sei se estou fazendo certo com o meu dinheiro". Na construção, a dor é "tenho um problema que se repete e nenhuma ferramenta resolve". Na mentoria, a dor é "tenho uma ideia e não sei como tirar do papel".

O método é o mesmo: entender a dor, desenhar o mapa, executar, medir, ajustar.

## Por que os três se alimentam

A assessoria me dá acesso a dores reais, de famílias reais, todo dia. É de lá que saem os sistemas. Os sistemas me dão escala: o que eu fazia em planilha pra uma família, a plataforma faz pra 300. E a mentoria me obriga a organizar o que eu faço por instinto, o que me deixa melhor nas outras duas.

Tira uma das pernas e as outras ficam mais fracas.

## O que eu quero com isso

Ser conhecido por uma coisa só: alguém que resolve. Se você tem patrimônio pra cuidar, a Zephyr é o caminho. Se você tem uma dor que vira sistema, a gente constrói. Se você quer aprender a construir, tem a mentoria.

Três portas, uma casa. É assim que eu penso o meu trabalho, e é isso que esse site tenta mostrar.`
    },
];
