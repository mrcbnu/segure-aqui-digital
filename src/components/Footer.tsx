import { Phone, Instagram, Mail } from "lucide-react";
import { Logo } from "./Header";

export function Footer() {
  const WHATSAPP_URL = "https://wa.me/5547999534266?text=Ol%C3%A1%21%20Quero%20falar%20com%20um%20consultor%20da%20Segure%20Aqui.";

  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {/* Substituído para usar o componente Logo profissional */}
          <Logo className="text-white mb-6" /> 
          <h3 className="text-2xl font-light tracking-tight">
            Vamos <span className="font-bold">conversar</span>.
          </h3>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Estamos prontos para entender seu cenário e construir a proteção ideal.
          </p>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">Contato</h4>
          <ul className="mt-5 space-y-4 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">(47) 99953-4266</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-4 w-4 text-accent" />
              <a href="https://instagram.com/segure_aqui" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">@segure_aqui</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:contato@segureaqui.com.br" className="hover:text-accent transition-colors">contato@segureaqui.com.br</a>
            </li>            
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Segure Aqui.
      </div>
    </footer>
  );
}