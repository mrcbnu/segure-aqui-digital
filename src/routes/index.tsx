import { createFileRoute } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import {
  Car,
  HeartPulse,
  Home,
  Building,
  Building2,
  ShieldCheck,
  Headphones,
  Instagram,
  FileCheck2,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Quote,
  Plane,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://segureaqui.com.br";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Segure Aqui",
  description:
    "Corretora de seguros consultiva especializada em Auto, Vida, Residencial e Empresarial, com atendimento personalizado e expertise em sinistros.",
  url: SITE_URL,
  telephone: "+55-11-99999-9999",
  email: "contato@segureaqui.com.br",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Paulista, 1000",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  sameAs: [] as string[],
  makesOffer: [
    { "@type": "Offer", name: "Seguro Auto" },
    { "@type": "Offer", name: "Seguro de Vida" },
    { "@type": "Offer", name: "Seguro Residencial" },
    { "@type": "Offer", name: "Seguro Empresarial" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Segure Aqui | Corretora de Seguros" },
      {
        name: "description",
        content:
          "Segure Aqui: corretora de seguros moderna e consultiva. Auto, Vida, Residencial e Empresarial com atendimento personalizado e expertise em sinistros.",
      },
      { name: "keywords", content: "seguro auto, seguro de vida, seguro residencial, seguro empresarial, corretora de seguros, Segure Aqui" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Segure Aqui" },
      { name: "theme-color", content: "#002147" },

      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Segure Aqui" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: "Segure Aqui | Tranquilidade é planejamento" },
      {
        property: "og:description",
        content:
          "Especialistas em desmistificar seguros. Auto, Vida, Residencial e Empresarial com atendimento consultivo. Fale com um consultor agora pelo WhatsApp.",
      },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Segure Aqui | Tranquilidade é planejamento" },
      {
        name: "twitter:description",
        content:
          "Corretora consultiva em Auto, Vida, Residencial e Empresarial. Atendimento humano e suporte completo em sinistros.",
      },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5547999534266?text=Ol%C3%A1%21%20Quero%20falar%20com%20um%20consultor%20da%20Segure%20Aqui.";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Aqui carregamos a sua imagem da pasta public */}
      <img 
        src="/logo.png" 
        alt="Segure Aqui Digital" 
        className="h-15 w-auto object-contain" 
        // A altura (h-10) pode ser ajustada conforme o formato da sua logo
      />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/10 bg-primary/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Lado Esquerdo: Logo */}
        <a href="/" className="transition-hover hover:opacity-90">
          <Logo className="text-white" />
        </a>

        {/* Centro: Navegação */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#servicos" className="transition-colors hover:text-accent">Seguros</a>
          <a href="#diferencial" className="transition-colors hover:text-accent">Diferencial</a>
          <a href="#depoimentos" className="transition-colors hover:text-accent">Depoimentos</a>
          <a href="#faq" className="transition-colors hover:text-accent">Dúvidas</a>
        </nav>

        {/* Lado Direito: Botão de Ação */}
        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-primary transition hover:scale-105 md:block"
          >
            Cotação Rápida
          </a>
          
          {/* Menu Mobile (Ícone para celulares) */}
          <button className="text-white md:hidden">
            <span className="sr-only">Abrir menu</span>
            {/* Você pode usar o ícone Menu do Lucide aqui */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {   
  
  // Lista das suas imagens (coloque os nomes corretos dos arquivos na pasta public)
  const TOTAL_IMAGENS = 6;
  const images = Array.from({ length: TOTAL_IMAGENS }, (_, i) => `/banner/banner-${i + 1}.png`);    

  const [currentImg, setCurrentImg] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-1 pb-24 text-white md:pt-1">
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

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-10 pt-20 lg:grid-cols-12 lg:pb-2 lg:pt-28">
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
        </div>
        <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:gap-6">
          {/* CARD 1 */}
          <div className="relative">
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-white/5 backdrop-blur" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Análise personalizada</div>
                  <div className="text-xs text-white/60">Resposta rápida e humanizada</div>
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

          {/* CARD 2 - IMAGENS */}          
          <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md">
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === currentImg ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={img}
                  alt="Seguros"
                  className="h-full w-full object-cover transition-transform duration-[5000ms] ease-linear"
                  style={{ transform: index === currentImg ? 'scale(1.1)' : 'scale(1)' }}
                />
                {/* Overlay opcional para garantir que o card combine com o estilo escuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
              </div>
            ))}
            
            {/* Indicador visual (opcional - as bolinhas lá embaixo) */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-4 rounded-full transition-all ${
                    index === currentImg ? "bg-accent" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

function Partners() {
  const partners = [
    { name: "Porto Seguro", logo: "/porto.png" },
    { name: "Bradesco Seguros", logo: "/bradesco.png" },
    { name: "Yelum", logo: "/yelum.png" },
    { name: "SulAmérica", logo: "/sulamerica.png" },
    { name: "Tokio Marine", logo: "/tokio.png" },
    { name: "Allianz", logo: "/allianz.png" },
    { name: "HDI", logo: "/hdi.png" },
  ];

  return (
    <section className="bg-slate-50/50 py-10 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">
          Trabalhamos com as melhores <span className="text-primary">seguradoras do mercado</span>
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              title={partner.name}
              className="h-8 w-auto grayscale transition-all duration-300 hover:grayscale-0 hover:scale-110 object-contain"
            />
          ))}
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
  {
    icon: Plane,
    title: "Seguro Viagem",
    blurb:
      "Viaje com tranquilidade sabendo que tem suporte médico e assistência completa em qualquer lugar do mundo.",
  },
  {
    icon: Building,
    title: "Seguro Condomínio",
    blurb:
      "Proteção completa para áreas comuns, funcionários e responsabilidade civil do síndico. Segurança para o patrimônio de todos.",
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

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
function FAQ() {
  const faqs = [
    {
      question: "Como funciona a consultoria da Segure Aqui?",
      answer: "Nós não apenas vendemos apólices. Analisamos seu perfil de risco, comparamos as melhores seguradoras do mercado e explicamos cada cláusula para que você saiba exatamente o que está contratando."
    },
    {
      question: "O que fazer em caso de sinistro?",
      answer: "Você não está sozinho. Em caso de imprevisto, entre em contato conosco imediatamente. Nossa equipe técnica cuida de toda a burocracia e acompanhamento junto à seguradora para garantir sua indenização."
    },
    {
      question: "O atendimento é apenas digital ou presencial?",
      answer: "Atendemos de forma híbrida! Temos a agilidade do digital via WhatsApp e vídeo-chamada, mas também oferecemos consultoria presencial para casos específicos ou seguros empresariais complexos."
    },
    {
      question: "Quais seguradoras são parceiras da Segure Aqui?",
      answer: "Trabalhamos com as maiores e mais sólidas seguradoras do Brasil, como Porto Seguro, Azul, Liberty, SulAmérica, Bradesco e Tokyo Marine."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-primary md:text-4xl">
            Dúvidas <span className="font-bold">Frequentes</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Tudo o que você precisa saber para contratar com segurança.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-slate-200">
              <AccordionTrigger className="text-left text-primary hover:text-accent transition-colors font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
          <ul className="mt-5 space-y-4 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                (47) 99953-4266
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-accent" />
              <a 
                href="https://instagram.com/segure_aqui" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-accent transition-colors"
              >
                @segure_aqui
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:contato@segureaqui.com.br" className="hover:text-accent transition-colors">
                contato@segureaqui.com.br
              </a>
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
          <p>© {new Date().getFullYear()} Segure Aqui. Todos os direitos reservados. </p>
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
      <Partners />
      <Services />      
      <Differential />
      <SocialProof />
      <FAQ />
      <CTASection />
      <Footer />

      {/* Personagem do WhatsApp */}
      {/* Personagem do WhatsApp - Sem fundo circular */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com nossa consultora"
        className="fixed bottom-0 right-4 z-50 group flex flex-col items-center"
      >
        {/* Balão de fala melhorado */}
        <span className="mb-2 scale-0 rounded-2xl bg-white px-4 py-2 text-xs font-bold text-primary shadow-2xl transition-all duration-300 group-hover:scale-100 group-hover:-translate-y-2">
          Posso te ajudar? 🚀
        </span>

        <div className="relative w-32 md:w-40 transition-transform duration-300 hover:scale-105 active:scale-95">
          {/* A imagem agora aparece inteira, alinhada ao fundo da tela */}
          <img 
            src="/je_6.png" 
            alt="Consultora Segure Aqui" 
            className="h-auto w-full object-contain"
          />
          
          {/* Badge do WhatsApp flutuando ao lado da personagem */}
          <div className="absolute bottom-10 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-bounce">
            <MessageCircle className="h-6 w-6" />
          </div>
        </div>
      </a>
    </main>
  );
}
