import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React, { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
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

// --- IMPORTAÇÃO DE ASSETS (BANNER) ---
import banner1 from "../assets/banner/banner-1.png";
import banner2 from "../assets/banner/banner-2.png";
import banner3 from "../assets/banner/banner-3.png";
import banner4 from "../assets/banner/banner-4.png";
import banner5 from "../assets/banner/banner-5.png";
import banner6 from "../assets/banner/banner-6.png";

// --- IMPORTAÇÃO DE ASSETS (PARCEIROS) ---
import logoPorto from "../assets/partners/porto.png";
import logoBradesco from "../assets/partners/bradesco.png";
import logoYelum from "../assets/partners/yelum.png";
import logoSulamerica from "../assets/partners/sulamerica.png";
import logoTokio from "../assets/partners/tokio.png";
import logoAllianz from "../assets/partners/allianz.png";
import logoHdi from "../assets/partners/hdi.png";

const SITE_URL = "https://segureaqui.com.br";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Segure Aqui",
  description:
    "Corretora de seguros especializada em Auto, Vida, Residencial e Empresarial, com atendimento personalizado e expertise em sinistros.",
  url: SITE_URL,
  telephone: "+55-47-99953-4266",
  email: "contato@segureaqui.com.br",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Norberto Acheterberg, 251 - Salto Weissbach",
    addressLocality: "Blumenau",
    addressRegion: "SC",
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
          "Segure Aqui: corretora de seguros moderna. Auto, Vida, Residencial e Empresarial com atendimento personalizado e expertise em sinistros.",
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

function Hero() {   
  
  // Lista das suas imagens (coloque os nomes corretos dos arquivos na pasta public)
  const images = [banner1, banner2, banner3, banner4, banner5, banner6];    

  const [currentImg, setCurrentImg] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-1 pb-24 text-white md:pt-1">
     
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
            Corretora de seguros
          </span>
          <h1 className="mt-8 text-5xl font-light leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Segurança planejada,{" "}
            <span className="font-bold">tranquilidade garantida.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            Somos especialistas em desmistificar seguros. Traduzimos apólices com orientação e sem complicação
            para proteger o que mais importa para você e sua família.
            Mais que seguros, entregamos confiança.
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
                  <div className="text-xs text-white/60">Atendimento rápido e humanizado</div>
                </div>
              </div>
              <ul className="mt-6 space-y-4 text-sm">
                {[
                  "Análise de risco",
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
          <a 
            href="#servicos" 
            className="relative block h-72 w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md group cursor-pointer transition-all hover:border-accent/50 shadow-2xl"
          >
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
                
                {/* Overlay que escurece levemente no hover para destacar que é um link */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity group-hover:from-black/40" />
                
                {/* Texto indicativo que aparece no hover (opcional) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-[2px]">
                  <span className="bg-accent text-primary px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    Ver Serviços
                  </span>
                </div>
              </div>
            ))}
            
            {/* Indicador visual (as bolinhas) */}
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
          </a>
        </div>
      </div>
      
    </section>
  );
}

function Partners() {
  const partners = [
    { name: "Porto Seguro", logo: logoPorto },
    { name: "Bradesco Seguros", logo: logoBradesco },
    { name: "Yelum", logo: logoYelum },
    { name: "SulAmérica", logo: logoSulamerica },
    { name: "Tokio Marine", logo: logoTokio },
    { name: "Allianz", logo: logoAllianz },
    { name: "HDI", logo: logoHdi },
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
    id: "seguro-auto",
    icon: Car,
    title: "Seguro Auto",
    blurb:
      "Proteção para o seu veículo sem complicações em caso de sinistro. Coberturas sob medida e assistência 24h.",
  },
  {
    id: "seguro-vida",
    icon: HeartPulse,
    title: "Seguro de Vida",
    blurb:
      "Cuidado que acompanha você em todos os momentos.",
  },
  {
    id: "seguro-residencial",
    icon: Home,
    title: "Seguro Residencial",
    blurb:
      "Sua casa protegida contra imprevistos, com coberturas personalizadas e assistência 24h.",
  },
  {
    id: "seguro-empresarial",
    icon: Building2,
    title: "Seguro Empresarial",
    blurb:
      "Continuidade do seu negócio assegurada: patrimônio, responsabilidade civil e equipe sempre cobertos.",
  },
  {
    id: "seguro-viagem",
    icon: Plane,
    title: "Seguro Viagem",
    blurb:
      "Viaje com tranquilidade sabendo que tem suporte médico e assistência completa em qualquer lugar do mundo.",
  },
  {
    id: "seguro-condominio",
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
            Selecionamos as melhores coberturas do mercado e personalizamos cada
            detalhe ao que faz sentido para a sua realidade.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, blurb }) => (
            <Link
              key={id}
              to="/servicos/$serviceId"
              params={{ serviceId: id }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-card cursor-pointer block"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
              </div>
              
              <h3 className="mt-6 text-xl font-semibold text-primary">{title}</h3>
              
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {blurb}
              </p>

              {/* Mudamos o texto para "Ver detalhes" já que o card todo agora é um link */}
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100">
                Conhecer cobertura →
              </div>
            </Link>
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
    text: "Um consultor dedicado para orientar, analisar as necessidades, sem roteiros prontos.",
  },
  {
    icon: ShieldCheck,
    title: "Expertise em pós-venda",
    text: "Acompanhamento da jornada de ponta a ponta, da contratação à renovação da apólice.",
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
            dele. Por isso, nosso compromisso vai muito além da contratação da
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


function FAQ() {
  const faqs = [
    {
      question: "Como funciona a consultoria da Segure Aqui?",
      answer: "Nós não apenas vendemos apólices. Analisamos o risco, comparamos as melhores seguradoras do mercado e explicamos cada cláusula para que você saiba exatamente o que está contratando."
    },
    {
      question: "O que fazer em caso de sinistro?",
      answer: "Você não está sozinho. Em caso de imprevisto, entre em contato conosco imediatamente. Nossa equipe técnica cuida de toda a burocracia e acompanhamento junto à seguradora para garantir sua indenização com agilidade."
    },
    {
      question: "O atendimento é apenas digital ou presencial?",
      answer: "Atendemos de forma híbrida! Temos a agilidade do digital via WhatsApp e vídeo-chamada, mas também oferecemos consultoria presencial para casos específicos ou seguros empresariais."
    },
    {
      question: "Quais seguradoras são parceiras da Segure Aqui?",
      answer: "Trabalhamos com as maiores e mais sólidas seguradoras do Brasil, como Porto Seguro, Azul, Yelum, SulAmérica, Bradesco e Tokyo Marine."
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
            Pronto para uma <span className="font-bold">conversa</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/75">
            Rapidamente, traduzimos suas necessidades em um diagnóstico sob medida para você entender qual proteção é essencial hoje.
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
      
    </main>
  );
}
