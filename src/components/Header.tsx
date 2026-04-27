import { Link } from "@tanstack/react-router";

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
  const WHATSAPP_URL = "https://wa.me/5547999534266?text=Ol%C3%A1%21%20Quero%20falar%20com%20um%20consultor%20da%20Segure%20Aqui.";

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/[0.05] bg-primary/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo direcionando para a Home */}
        <Link to="/" className="transition-hover hover:opacity-90">
          <Logo className="text-white" />
        </Link>

        {/* Links de Navegação */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {/* Usamos o atributo 'hash' do TanStack Router para as âncoras funcionarem corretamente */}
          <Link to="/" hash="servicos" className="transition-colors hover:text-accent">Seguros</Link>
          <Link to="/" hash="diferencial" className="transition-colors hover:text-accent">Diferencial</Link>
          <Link to="/" hash="depoimentos" className="transition-colors hover:text-accent">Depoimentos</Link>
          <Link to="/" hash="faq" className="transition-colors hover:text-accent">Dúvidas</Link>
          
          {/* Link de destaque para o BLOG */}
          <Link to="/blog" className="transition-colors hover:text-accent font-bold border-l border-white/20 pl-8 text-white">Blog</Link>
        </nav>

        {/* Botão de Ação */}
        <div className="flex items-center gap-4">
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noreferrer"
            className="hidden rounded-full bg-accent px-5 py-2 text-[13px] font-bold text-primary shadow-lg transition hover:scale-105 active:scale-95 md:block"
          >
            Cotação Rápida
          </a>
          
          {/* Botão Menu Mobile (Opcional por enquanto) */}
          <button className="text-white md:hidden p-2" aria-label="Menu">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}