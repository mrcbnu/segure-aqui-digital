import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICOS_DETALHADOS } from "@/data/servicos";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import React, { useState } from "react";

// 1. Importe a imagem da sua atendente (ajuste o caminho conforme sua pasta)
import atendenteImg from "@/assets/atendente.png"; 

export const Route = createFileRoute("/servicos/$serviceId")({
  component: ServicePage,
});

function ServicePage() {
  const { serviceId } = Route.useParams();
  const service = SERVICOS_DETALHADOS[serviceId as keyof typeof SERVICOS_DETALHADOS];
  const [nome, setNome] = useState("");

  if (!service) {
    return (
      <div className="pt-40 text-center">
        <h2 className="text-2xl font-bold">Serviço não encontrado.</h2>
        <Link to="/" className="text-accent underline mt-4 block">Voltar para a Home</Link>
      </div>
    );
  }

  const Icon = service.icon;

  const handleWhatsAppClick = () => {
    if (!nome.trim()) {
      alert("Por favor, digite seu nome para iniciarmos o atendimento personalizado.");
      return;
    }
    const mensagem = `Olá! Meu nome é ${nome}. Gostaria de saber mais sobre o ${service.title}.`;
    const url = `https://wa.me/5547999534266?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      {/* CSS para ocultar a atendente global flutuante apenas nesta página */}
      <style dangerouslySetInnerHTML={{ __html: `
        #whatsapp-flutuante { display: none !important; }
      `}} />

      <div className="mx-auto max-w-6xl px-6">
        <Link 
          to="/" 
          hash="servicos"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary mb-12 transition-colors font-medium"
        >
          <ArrowLeft size={16} /> Voltar para nossos serviços
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            <header className="flex flex-col gap-6 mb-8">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-primary shadow-sm">
                  <Icon size={28} className="text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-primary md:text-5xl lg:leading-tight">
                  {service.title}
                </h1>
              </div>
              <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                {service.tagline}
              </p>
            </header>

            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {service.description}
            </p>

            {/* CARD DE CONVERSÃO COM A ATENDENTE */}
            <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-blue-100 bg-blue-50/30 p-8 shadow-lg md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                
                
                {/* Imagem da Atendente*/}
                <div className="relative h-24 w-24 shrink-0 md:h-45 md:w-45">
                    <img 
                        src={atendenteImg} 
                        alt="Atendente Segure Aqui" 
                        className="h-full w-full object-contain object-bottom" 
                    />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary">Vamos conversar?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Digite seu nome e clique em iniciar a conversa. Tenho certeza que encontraremos o melhor seguro para você!
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <input
                  type="text"
                  placeholder="digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="flex-1 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm text-primary focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/5 transition-all"
                />
                <button 
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-10 py-4 text-sm font-bold text-white shadow-xl transition hover:scale-105 active:scale-95"
                >
                  Iniciar a conversa
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="hidden lg:block w-full h-70 overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white bg-primary/60">
              <img 
                src={service.image} 
                alt={service.title} 
                className="h-full w-full object-cover object-center" 
              />
            </div>

            

            <div className="bg-blue-50/50 rounded-[2.5rem] p-8 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Coberturas em destaque:</h3>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <div className="bg-blue-100 rounded-full p-1.5 mt-0.5 shrink-0">
                      <CheckCircle2 className="text-primary" size={14} /> 
                    </div>
                    <span className="font-medium text-sm leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none border-t border-slate-100 pt-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Por que escolher a Segure Aqui?</h2>
          <p className="text-lg text-slate-600 leading-relaxed italic">
            "{service.fullContent}"
          </p>
        </div>
      </div>
    </main>
  );
}