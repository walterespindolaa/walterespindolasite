import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { Nav } from "@/components/Nav";
import { IMG } from "@/data/images";

const ROLES = ["Empresário", "Assessor de investimentos", "Construtor de sistemas"];

const TRAJETORIA = [
  ["A pousada", "Cresci numa pousada no litoral de Santa Catarina. Meus pais tocaram o negócio por 25 anos, no braço, sem nunca ter um plano. Em 2020 a pousada fechou. Foi ali que eu entendi, de um jeito que não se esquece, o que a falta de plano custa."],
  ["A proposta que recusei", "A primeira proposta de trabalho que recebi foi pra um turno da noite numa fábrica de chicotes automotivos, por pouco mais de dois mil reais. Eu via um colega de faculdade crescendo em outra área. Não aceitei. Foi o choque que me tirou daquele caminho."],
  ["A mala antes da prova", "Nunca tinha estudado mercado financeiro. Decidi que seria por ali. O primeiro risco de verdade foi mudar de cidade antes de sair o resultado da certificação. Saiu. Passei."],
  ["2020", "Pra muita gente foi o pior ano. Pra mim foi o salto: o atendimento virou digital, o modelo que eu já preferia. E na mesa da cozinha, eu e minha esposa olhando as contas, nasceu a pergunta que virou o Atlas."],
  ["Sair da liderança", "Perdi uma posição de liderança num escritório de terceiros. Foi quando eu mais me perguntei se estava no caminho certo. Sem esse desconforto, eu não teria aberto o meu."],
  ["Abrir a Zephyr", "Sair de um salário bom. Não saber se os clientes viriam. Não saber empreender. Assumi tudo de uma vez. Os clientes vieram, e o escritório cresceu fazendo o básico bem feito."],
  ["Um sistema que pensa como eu", "O maior gargalo da assessoria não é técnico, é falta de processo. Então eu construí o meu. Um estudo que levava cinco horas hoje leva quinze minutos, e sai melhor. A partir daí, cada gargalo virou um sistema."],
];

const SISTEMAS = [
  { n: "Atlas", tag: "Finanças pessoais", img: IMG.atlas, problema: "A maioria dos apps de finanças só mostra o que você já gastou, olhando pra trás. Ninguém mostra o próximo passo.", fiz: "Um app de planejamento que olha pra frente. Junta tudo num lugar só, contas, dívidas, metas, investimentos, e projeta o futuro: se guardar X por mês, como fica a aposentadoria em 20, 30 anos. Tem simulador de decisão (\"posso trocar de carro esse ano?\"), funciona pra pessoa física e pra empresa, e dá pra usar em casal, cada um com seu acesso, todo mundo vendo o mesmo plano. Ele não decide por você. Te dá clareza pra decidir. Cinco minutos por dia, no celular ou no computador.", link: "useatlasapp.com" },
  { n: "HUB Zephyr", tag: "Sistema interno da assessoria", img: IMG.zephyrApp, problema: "O assessor chega na reunião sabendo o nome do que o cliente tem, não o que tem de verdade. E o estudo levava cinco horas.", fiz: "O sistema interno do escritório, construído do zero em cima da custódia da XP. Todo mês ele consolida a carteira inteira de cada cliente, inclusive o que está em outro banco, reconhece cada papel pelo cadastro da CVM e monta uma avaliação 360: concentração, liquidez, risco de crédito, custo escondido. Lê balanço, lâmina de fundo e gráfico. Toda manhã entrega a lista de prioridades. Pra reunião, gera o estudo em slides com fonte em cada número, grava, transcreve e puxa as pendências. Não recomenda no meu lugar: garante que eu chegue sabendo tudo o que dava pra saber." },
  { n: "Cria Social Club", tag: "Conteúdo", img: IMG.cria, problema: "Quem trabalha com conteúdo opera em dez lugares ao mesmo tempo: ideia num app, roteiro em outro, aprovação por WhatsApp, relatório na planilha.", fiz: "A operação inteira num lugar só, do primeiro rascunho ao relatório pro cliente. Tudo começa no Brandbook: quem a pessoa é, como fala, pra quem fala. É isso que faz legenda, roteiro e arte saírem com a cara da marca, não genéricos. O conteúdo anda num quadro por etapa, o cliente aprova por link, o parceiro de produção recebe a fila com prazo e fecha o mês com extrato. Serve pra qualquer nicho porque não vem com conteúdo pronto: vem com método." },
];

const CATS: [string, string][] = [["more", "Patrimônio"], ["software-development", "Sistemas"], ["applied-ai", "Construção"], ["about-me", "Sobre mim"]];

function Chapter({ n, label, dark, children, id }: { n: string; label: string; dark?: boolean; id: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${dark ? "bg-evergreen text-paper" : "bg-paper text-ink"} px-5 md:px-10 py-20 md:py-32`}>
      <div className={`flex items-baseline gap-4 mb-12 md:mb-20 reveal ${dark ? "text-paper/60" : "text-ink/50"}`}>
        <span className="text-sm font-medium">{n}</span>
        <span className="h-px flex-1 bg-current opacity-30" />
        <span className="text-sm font-medium">{label}</span>
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const posts = [...blogs].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Nav />
      <main>
        {/* Abertura: imagem do monitor (poster) + vídeo em loop por cima */}
        <section className="relative bg-paper">
          <div className="relative w-full aspect-[16/9] max-h-[100svh] overflow-hidden">
            <Image src={IMG.hero.src} alt="Walter Espindola" fill priority quality={92} sizes="100vw" className="object-cover object-center" />
            <video
              className="absolute inset-0 w-full h-full object-cover object-center"
              autoPlay muted loop playsInline preload="metadata"
              poster={IMG.hero.src}
            >
              <source src={IMG.heroVideo} type="video/mp4" />
            </video>
          </div>
          <p className="px-5 md:px-10 py-5 text-sm text-ink/50">Empresário. Santa Catarina.</p>
        </section>

        {/* Faixa rolando */}
        <div className="ticker bg-paper text-ink border-y border-ink/15 py-3 md:py-4">
          <div className="ticker__track">
            {[0, 1].map((k) => (
              <span key={k} className="flex shrink-0">
                {[...ROLES, ...ROLES].map((r, i) => (
                  <span key={i} className="serif text-2xl md:text-4xl px-6 md:px-10 whitespace-nowrap">{r}<span className="mx-6 md:mx-10 text-sage">·</span></span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* 01 Zephyr */}
        <Chapter n="01" label="O escritório" id="zephyr" dark>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5 reveal">
              <h2 className="serif text-5xl md:text-7xl leading-[0.95]">Zephyr<br />Investimentos</h2>
            </div>
            <div className="md:col-span-7 prose-w space-y-6 reveal">
              <p>Assessoria de investimentos pra quem tem muito a perder. Poucas famílias, atenção de perto, visão de décadas. Cerca de R$ 260 milhões sob gestão.</p>
              <p>O mercado normalizou trocar de assessor a cada seis meses. Meus clientes estão comigo há quatro, cinco, seis anos. Se eu erro, assumo. Se acerto, a gente comemora junto. É parceria, não transação.</p>
              <p>O maior gargalo da assessoria não é técnico. É falta de processo. A maioria age como analista quando deveria agir como assessor. Tudo o que eu faço é uma resposta a isso: gerar mais valor pro cliente gastando menos tempo, sem perder profundidade.</p>
            </div>
          </div>
          <figure className="relative aspect-[16/9] md:aspect-[21/9] mt-16 md:mt-24 overflow-hidden reveal">
            <Image src={IMG.zephyr.src} alt="Zephyr Investimentos" fill quality={90} sizes="100vw" style={{ objectPosition: IMG.zephyr.pos }} className="px-img object-cover" />
          </figure>
        </Chapter>

        {/* 02 Sistemas */}
        <Chapter n="02" label="O que construí" id="sistemas">
          <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
            <h2 className="md:col-span-7 serif text-5xl md:text-7xl leading-[0.95] reveal">Cada gargalo virou um sistema.</h2>
            <p className="md:col-span-5 md:pt-4 text-lg md:text-xl leading-relaxed text-ink/70 reveal">Três sistemas no ar, construídos sozinho, sempre pela mesma ordem: a dor, as telas essenciais, os dados, o pagamento, o ar. Nenhum nasceu de uma ideia. Todos nasceram de um problema que eu vi de perto.</p>
          </div>
          <div className="space-y-20 md:space-y-32">
            {SISTEMAS.map((s, i) => (
              <article key={s.n} className={`grid md:grid-cols-12 gap-8 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <figure className="md:col-span-7 reveal">
                  <Image src={s.img} alt={s.n} width={1920} height={1040} quality={90} sizes="(max-width:768px) 100vw, 60vw" className="w-full h-auto border border-ink/10 bg-white" />
                </figure>
                <div className="md:col-span-5 reveal">
                  <p className="text-sm text-ink/50 mb-3">{s.tag}</p>
                  <h3 className="serif text-4xl md:text-5xl">{s.n}</h3>
                  <p className="mt-6 text-lg leading-relaxed"><span className="text-ink/50">O problema. </span>{s.problema}</p>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70"><span className="text-ink/50">O que eu fiz. </span>{s.fiz}</p>
                  {s.link && <a href={`https://${s.link}`} target="_blank" rel="noreferrer" className="link inline-block mt-6 text-sm">{s.link}</a>}
                </div>
              </article>
            ))}
          </div>
        </Chapter>

        {/* 03 Trajetória */}
        <Chapter n="03" label="Trajetória" id="trajetoria" dark>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-5">
              <h2 className="serif text-5xl md:text-7xl leading-[0.95] reveal">Sete decisões,<br />em ordem.</h2>
              <figure className="relative aspect-[4/5] mt-10 md:mt-16 overflow-hidden reveal">
                <Image src={IMG.trajetoria.src} alt="Walter Espindola" fill quality={90} sizes="(max-width:768px) 100vw, 40vw" style={{ objectPosition: IMG.trajetoria.pos }} className="px-img object-cover" />
              </figure>
            </div>
            <ol className="md:col-span-7 divide-y divide-paper/15">
              {TRAJETORIA.map(([t, d], i) => (
                <li key={t} className="py-7 md:py-9 grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr] gap-4 reveal">
                  <span className="serif text-2xl text-sage">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="serif text-2xl md:text-3xl">{t}</h3>
                    <p className="mt-2 text-[1.05rem] leading-relaxed text-paper/70">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Chapter>

        {/* 04 Escritos */}
        <Chapter n="04" label="Escritos" id="escritos">
          <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20">
            <h2 className="md:col-span-7 serif text-5xl md:text-7xl leading-[0.95] reveal">Registro, não discurso.</h2>
            <p className="md:col-span-5 md:pt-4 text-lg md:text-xl leading-relaxed text-ink/70 reveal">Um texto por semana sobre patrimônio, sistemas e o que eu aprendo construindo. <Link href="/escritos" className="link">Todos os escritos</Link></p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {CATS.map(([cat, label]) => (
              <div key={cat} className="reveal">
                <p className="text-sm text-ink/50 pb-3 border-b border-ink/15">{label}</p>
                <ul className="mt-4 space-y-4">
                  {posts.filter((p) => p.category === cat).slice(0, 3).map((p) => (
                    <li key={p.slug}>
                      <Link href={`/escritos/${p.slug}`} className="serif text-xl leading-snug hover:text-evergreen transition-colors">{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Chapter>

        {/* Contato / rodapé */}
        <footer id="contato" className="bg-ink text-paper px-5 md:px-10 pt-20 md:pt-28 pb-10">
          <div className="grid md:grid-cols-12 gap-10">
            <p className="md:col-span-8 serif text-3xl md:text-5xl leading-[1.1] reveal">
              Não atendo cliente por aqui. Se você está numa virada parecida, ou quer trocar ideia sobre processo e sistemas, me escreve.
            </p>
            <ul className="md:col-span-4 md:text-right space-y-2 text-lg reveal">
              <li><a className="link" href="mailto:walterjoose@gmail.com">walterjoose@gmail.com</a></li>
              <li><a className="link" href="https://www.instagram.com/walterespindola_" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="link" href="https://www.linkedin.com/in/walter-espindola-885490121/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="mt-20 md:mt-28 flex items-end justify-between text-sm text-paper/50">
            <span>Santa Catarina, Brasil</span>
            <span>© {new Date().getFullYear()} Walter Espindola</span>
          </div>
          <p className="display text-[19vw] md:text-[12.5vw] text-paper/[0.06] -mb-[0.2em] mt-6 select-none" aria-hidden>Espindola</p>
        </footer>
      </main>
    </>
  );
}
