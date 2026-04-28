import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/logo.png" 
        alt="Segure Aqui Digital" 
        className="h-12 w-auto object-contain" 
      />
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_URL = "https://wa.me/5547999534266?text=Ol%C3%A1%21%20Quero%20falar%20com%20um%20consultor%20da%20Segure%20Aqui.";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/[0.05] bg-primary/95 backdrop-blur-md transition-all">
      {/* Container Principal - Mantemos o z-[101] aqui para garantir que logo e botão fiquem por cima de tudo */}
      <div className="relative z-[101] mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="transition-hover hover:opacity-90" onClick={() => setIsOpen(false)}>
          <Logo className="text-white" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <Link to="/" hash="servicos" className="transition-colors hover:text-accent">Seguros</Link>
          <Link to="/" hash="diferencial" className="transition-colors hover:text-accent">Diferencial</Link>
          <Link to="/" hash="depoimentos" className="transition-colors hover:text-accent">Depoimentos</Link>
          <Link to="/" hash="faq" className="transition-colors hover:text-accent">Dúvidas</Link>
          <Link to="/blog" className="transition-colors hover:text-accent font-bold border-l border-white/20 pl-8 text-white">Blog</Link>
        </nav>

        {/* Botão de Ação / Hambúrguer */}
        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2 text-[13px] font-bold text-primary shadow-lg transition hover:scale-105 md:block"
          >
            Cotação Rápida
          </a>
          
          <button 
            className="text-white md:hidden p-2 transition-colors hover:text-accent" 
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Overlay do Menu Mobile - Agora com z-[100] (atrás da barra, mas acima do site) */}
      <div 
        className={`
          fixed inset-0 z-[100] h-screen w-full bg-primary transition-all duration-300 ease-in-out md:hidden
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"}
        `}
      >
        <nav className="flex flex-col items-center justify-start h-full pt-32 pb-24 px-8 gap-7">
          <Link to="/" hash="servicos" onClick={toggleMenu} className="text-2xl font-semibold text-white/95">Seguros</Link>
          <Link to="/" hash="diferencial" onClick={toggleMenu} className="text-2xl font-semibold text-white/95">Diferencial</Link>
          <Link to="/" hash="depoimentos" onClick={toggleMenu} className="text-2xl font-semibold text-white/95">Depoimentos</Link>
          <Link to="/" hash="faq" onClick={toggleMenu} className="text-2xl font-semibold text-white/95">Dúvidas</Link>
          
          <div className="w-full max-w-[150px] h-[1px] bg-white/10 my-4" />
          
          <Link to="/blog" onClick={toggleMenu} className="text-2xl font-bold text-accent">Blog</Link>
          
          <div className="mt-auto w-full max-w-xs mb-24">
            <a 
              href={WHATSAPP_URL} 
              onClick={toggleMenu}
              className="flex items-center justify-center w-full rounded-full bg-accent py-5 text-base font-bold text-primary shadow-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}