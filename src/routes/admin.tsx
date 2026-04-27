import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, FileCode } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPostGenerator,
});

function AdminPostGenerator() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    excerpt: "",
    category: "Seguro Auto",
    readTime: "5 min",
    image: "/banner/banner-1.png",
    content: "",
  });

  const [copied, setCopied] = useState(false);

  // Gera o código formatado para o arquivo posts.ts
  const generatedCode = `  {
    id: "${formData.id || "slug-do-post"}",
    title: "${formData.title}",
    excerpt: "${formData.excerpt}",
    category: "${formData.category}",
    date: "${new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}",
    readTime: "${formData.readTime}",
    image: "${formData.image}",
    content: \`
      ${formData.content.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('\n      ')}
    \`
  },`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary">Gerador de Artigos</h1>
            <p className="text-muted-foreground">Preencha os campos para gerar o código do post.</p>
          </div>
          <FileCode className="h-10 w-10 text-accent opacity-20" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Formulário */}
          <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
            <div>
              <label className="text-xs font-bold uppercase text-slate-500">Título do Post</label>
              <input 
                className="w-full rounded-lg border border-slate-200 p-2 text-sm focus:ring-2 focus:ring-accent outline-none"
                placeholder="Ex: Como economizar no seguro"
                onChange={(e) => setFormData({...formData, title: e.target.value, id: e.target.value.toLowerCase().replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")})}
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-500">Resumo (Excerpt)</label>
              <textarea 
                className="w-full rounded-lg border border-slate-200 p-2 text-sm h-20 outline-none"
                onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Categoria</label>
                <select 
                  className="w-full rounded-lg border border-slate-200 p-2 text-sm outline-none"
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option>Seguro Auto</option>
                  <option>Seguro Vida</option>
                  <option>Residencial</option>
                  <option>Dicas</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold uppercase text-slate-500">Tempo de Leitura</label>
                <input 
                  className="w-full rounded-lg border border-slate-200 p-2 text-sm outline-none"
                  placeholder="5 min"
                  onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-bold uppercase text-slate-500">Conteúdo do Artigo (Pule linha para novos parágrafos)</label>
              <textarea 
                className="w-full rounded-lg border border-slate-200 p-2 text-sm h-40 outline-none"
                placeholder="Escreva seu texto aqui..."
                onChange={(e) => setFormData({...formData, content: e.target.value})}
              />
            </div>
          </div>

          {/* Resultado do Código */}
          <div className="relative rounded-2xl bg-slate-900 p-6 shadow-inner overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">código gerado:</span>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition-colors"
              >
                {copied ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copiado!" : "Copiar Código"}
              </button>
            </div>
            <pre className="text-[10px] leading-relaxed text-blue-300 font-mono whitespace-pre-wrap">
              {generatedCode}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}