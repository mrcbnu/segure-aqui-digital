import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { CookieBanner } from "@/components/CookieBanner"
import { MessageCircle } from "lucide-react";
import { Header } from "@/components/Header"; 
import { Footer } from "@/components/Footer";
import { useEffect } from "react"; 

import appCss from "../styles.css?url";
import mascoteImg from "../assets/atendente.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ops! O conteúdo que você está procurando não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o Início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // SEO Básico
      { title: "Segure Aqui | Corretora de Seguros" },
      { name: "description", content: "Tecnologia para cotar. Gente de verdade para cuidar." },
      
      // Metadados para WhatsApp/Redes Sociais (Open Graph)
      { property: "og:title", content: "Segure Aqui | Consultoria em Seguros" },
      { property: "og:description", content: "Proteja o que é importante com quem entende de planejamento. Atendimento rápido e digital." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://segureaqui.com.br" }, // Substitui pela tua URL final
      { property: "og:image", content: "https://segureaqui.com.br/og-image.png" }, // Imagem que aparece no link
      
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Segure Aqui" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // Favicon (A forma que o TanStack gosta)
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR"> {/* Ajustado para Português */}
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const WHATSAPP_URL = "https://wa.me/5547999534266?text=Ol%C3%A1%21%20Quero%20falar%20com%20um%20consultor%20da%20Segure%20Aqui.";
  useEffect(() => {
    // Isso altera o Favicon dinamicamente via JavaScript
    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = '/favicon.png'; // Ele vai buscar na pasta public
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CookieBanner />      
      <Scripts />

      {/* Mascote Global - Agora aparece em todas as páginas */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com nossa consultora"
        className="fixed bottom-0 right-4 z-[999] group flex flex-col items-center"
      >
        <span className="mb-2 scale-0 rounded-2xl bg-white px-4 py-2 text-[10px] font-bold text-primary shadow-2xl transition-all duration-300 group-hover:scale-100 group-hover:-translate-y-2">
          Posso te ajudar? 🚀
        </span>

        <div className="relative w-28 md:w-36 transition-transform duration-300 hover:scale-105 active:scale-95">
          <img 
            src={mascoteImg} // 2. Trocamos a string "/je_6.png" pela variável importada
            alt="Consultora Segure Aqui" 
            className="h-auto w-full object-contain"
          />
          <div className="absolute bottom-8 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg animate-bounce">
            <MessageCircle className="h-5 w-5" />
          </div>
        </div>
      </a>
    </>
  );
}