import { useState, useEffect } from "react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[1000] md:left-auto md:max-w-sm">
      <div className="rounded-2xl bg-primary/95 p-6 shadow-2xl backdrop-blur-md border border-white/10">
        <h4 className="text-sm font-bold text-white mb-2">Controle sua Privacidade 🛡️</h4>
        <p className="text-xs leading-relaxed text-white/70 mb-4">
          A <strong>Segure Aqui</strong> utiliza cookies para melhorar sua experiência e analisar o tráfego. 
          Ao clicar em "Aceitar", você concorda com o uso de cookies em nosso site.
        </p>
        <div className="flex gap-3">
          <button 
            onClick={handleAccept}
            className="flex-1 rounded-full bg-accent px-4 py-2 text-xs font-bold text-primary transition hover:scale-105 active:scale-95"
          >
            Aceitar
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="flex-1 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white transition hover:bg-white/20"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}