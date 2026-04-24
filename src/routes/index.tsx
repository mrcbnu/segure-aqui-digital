import { createFileRoute } from "@tanstack/react-router";
import {
  Car,
  HeartPulse,
  Home,
  Building2,
  ShieldCheck,
  Headphones,
  FileCheck2,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segure Aqui | Corretora de Seguros Consultiva" },
      {
        name: "description",
        content:
          "Segure Aqui: corretora de seguros moderna e consultiva. Auto, Vida, Residencial e Empresarial com atendimento personalizado e expertise em sinistros.",
      },
      { property: "og:title", content: "Segure Aqui | Tranquilidade é planejamento" },
      {
        property: "og:description",
        content:
          "Especialistas em desmistificar seguros. Fale com um consultor agora pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1%21%20Quero%20falar%20com%20um%20consultor%20da%20Segure%20Aqui.";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
        <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <span className="text-lg font-bold tracking-tight">
        Segure<span className="font-light">Aqui</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#servicos" className="opacity-80 hover:opacity-100">Seguros</a>
          <a href="#diferencial" className="opacity-80 hover:opacity-100">Diferencial</a>
          <a href="#depoimentos" className="opacity-80 hover:opacity-100">Clientes</a>
          <a href="#contato" className="opacity-80 hover:opacity-100">Contato</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary-foreground px-5 py-2 text-sm font-semibold text-primary transition hover:scale-[1.02] md:inline-flex"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <Nav />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, white, transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[480px] w-[480px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(closest-side, white, transparent)" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-28 pt-40 lg:grid-cols-12 lg:pb-36 lg:pt-44">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.15_150)]" />
            Corretora consultiva
          </span>
          <h1 className="mt-8 text-5xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Sua tranquilidade não é por acaso,{" "}
            <span className="font-bold">é planejamento.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            Somos especialistas em desmistificar seguros. Traduzimos apólices em
            decisões claras para proteger o que realmente importa para você e
            sua família.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary shadow-elegant transition hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar com um Consultor Agora
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium text-white/80 underline-offset-4 hover:underline"
            >
              Conheça nossas soluções →
            </a>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8 text-sm">
            <div>
              <div className="text-2xl font-bold">+15</div>
              <div className="mt-1 text-xs text-white/60">anos de mercado</div>
            </div>
            <div>
              <div className="text-2xl font-bold">+30</div>
              <div className="mt-1 text-xs text-white/60">seguradoras parceiras</div>
            </div>
            <div>
              <div className="text-2xl font-bold">98%</div>
              <div className="mt-1 text-xs text-white/60">sinistros aprovados</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-white/5 backdrop-blur" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Análise personalizada</div>
                  <div className="text-xs text-white/60">Resposta em até 2h úteis</div>
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-sm">
                {[
                  "Diagnóstico do seu perfil de risco",
                  "Comparativo entre seguradoras",
                  "Apólice na medida do seu orçamento",
                  "Suporte humano em todo o sinistro",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FileCheck2 className="mt-0.5 h-4 w-4 flex-none text-[oklch(0.78_0.15_150)]" />
                    <span className="text-white/85">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Car,
    title: "Seguro Auto",
    blurb:
      "Proteção para o seu veículo sem complicações em caso de sinistro. Coberturas sob medida e assistência 24h.",
  },
  {
    icon: HeartPulse,
    title: "Seguro de Vida",
    blurb:
      "Garanta o futuro de quem você ama com uma apólice clara, flexível e pensada para cada fase da vida.",
  },
  {
    icon: Home,
    title: "Seguro Residencial",
    blurb:
      "Sua casa protegida contra imprevistos — de incêndio a danos elétricos — com indenização rápida e justa.",
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    blurb:
      "Continuidade do seu negócio assegurada: patrimônio, responsabilidade civil e equipe sempre cobertos.",
  },
];

function Services() {
  return (
    <section id="servicos" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Nossas soluções
          </span>
          <h2 className="mt-4 text-4xl font-light tracking-tight text-primary md:text-5xl">
            Seguros pensados para <span className="font-bold">cada momento</span>.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Selecionamos as melhores coberturas do mercado e ajustamos cada
            detalhe ao que faz sentido para a sua realidade.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, blurb }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {blurb}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100"
              >
                Solicitar cotação →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const differentials = [
  {
    icon: Headphones,
    title: "Atendimento personalizado",
    text: "Um consultor dedicado que conhece sua história — sem call centers, sem roteiros prontos.",
  },
  {
    icon: ShieldCheck,
    title: "Expertise em pós-venda",
    text: "Acompanhamos cada renovação, reajuste e mudança de cenário ao longo de toda a apólice.",
  },
  {
    icon: FileCheck2,
    title: "Sinistro descomplicado",
    text: "Atuamos lado a lado com você na regulação, defendendo seus direitos junto à seguradora.",
  },
];

function Differential() {
  return (
    <section id="diferencial" className="relative overflow-hidden bg-primary py-28 text-primary-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(closest-side, white, transparent)" }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            O diferencial Segure Aqui
          </span>
          <h2 className="mt-4 text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Tecnologia para cotar.{" "}
            <span className="font-bold">Gente de verdade para cuidar.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70">
            Acreditamos que um seguro só cumpre seu papel quando você precisa
            dele. Por isso, nosso compromisso vai muito além da assinatura da
            apólice — estamos com você no momento mais importante.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary shadow-elegant transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Conversar agora
          </a>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {differentials.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Cliente Auto + Residencial",
    text:
      "Em 48h tive meu carro liberado depois de um acidente. A equipe da Segure Aqui cuidou de absolutamente tudo. Indico de olhos fechados.",
  },
  {
    name: "Rafael Almeida",
    role: "CEO, Almeida Engenharia",
    text:
      "Consultoria séria e técnica. Reestruturaram todo o seguro empresarial da empresa e ainda reduzimos 22% do prêmio anual.",
  },
  {
    name: "Juliana Mendes",
    role: "Cliente Vida",
    text:
      "Pela primeira vez entendi de verdade o que estava contratando. Transparência do início ao fim.",
  },
];

const partners = [
  "Porto Seguro",
  "Bradesco Seguros",
  "SulAmérica",
  "Allianz",
  "Mapfre",
  "Tokio Marine",
  "HDI",
  "Liberty",
];

function SocialProof() {
  return (
    <section id="depoimentos" className="bg-gradient-subtle py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Quem confia
          </span>
          <h2 className="mt-4 text-4xl font-light tracking-tight text-primary md:text-5xl">
            Histórias de <span className="font-bold">tranquilidade</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card"
            >
              <Quote className="h-7 w-7 text-accent" />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-primary/85">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="text-sm font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-24">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Seguradoras parceiras
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {partners.map((p) => (
              <div
                key={p}
                className="flex h-16 items-center justify-center rounded-lg border border-border bg-card text-xs font-semibold tracking-wide text-muted-foreground transition hover:border-accent hover:text-primary"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero px-10 py-16 text-center text-primary-foreground shadow-elegant md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(closest-side, white, transparent)" }}
          />
          <h2 className="text-3xl font-light tracking-tight md:text-4xl">
            Pronto para uma <span className="font-bold">conversa sem pressa</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/75">
            Em poucos minutos você recebe um diagnóstico personalizado e descobre
            qual proteção realmente faz sentido para você.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-8 py-4 text-sm font-semibold text-primary transition hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            Falar com um Consultor Agora
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h3 className="text-2xl font-light tracking-tight">
            Vamos <span className="font-bold">conversar</span>.
          </h3>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Estamos prontos para entender seu cenário e construir a proteção
            ideal — sem letras miúdas.
          </p>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Contato
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              (11) 99999-9999
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              contato@segureaqui.com.br
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
              Av. Paulista, 1000 — São Paulo / SP
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            Navegação
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-white/85">
            <li><a href="#servicos" className="hover:text-white">Seguros</a></li>
            <li><a href="#diferencial" className="hover:text-white">Diferencial</a></li>
            <li><a href="#depoimentos" className="hover:text-white">Depoimentos</a></li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Segure Aqui. Todos os direitos reservados. SUSEP nº 0000000.</p>
          <div className="ml-auto">
            <Logo className="text-primary-foreground" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Hero />
      <Services />
      <Differential />
      <SocialProof />
      <CTASection />
      <Footer />

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-elegant transition hover:scale-110"
        style={{ backgroundColor: "oklch(0.68 0.16 150)" }}
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}
