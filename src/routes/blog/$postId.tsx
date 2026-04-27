import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { BLOG_POSTS } from "@/data/posts"

export const Route = createFileRoute("/blog/$postId")({
  component: PostPage,
});

function PostPage() {
  const { postId } = Route.useParams();
  const post = BLOG_POSTS.find((p) => p.id === postId);

  if (!post) {
    return <div className="pt-40 text-center">Artigo não encontrado.</div>;
  }

  // FUNÇÃO DE COMPARTILHAMENTO PROFISSIONAL
  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: `Confira este artigo da Segure Aqui: ${post.title}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // Abre a partilha nativa do telemóvel (WhatsApp, Instagram, etc)
        await navigator.share(shareData);
      } else {
        // Fallback: Copia o link se estiver no computador
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copiado para a área de transferência!");
      }
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
  };

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <article className="mx-auto max-w-3xl px-6">
        {/* Botão Voltar */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar para o blog
        </Link>

        {/* Cabeçalho do Post */}
        <header className="mb-12 flex flex-col md:flex-row gap-8 items-start">
          
          {/* Imagem Compacta (Máximo 200x200) */}
          <div className="h-[200px] w-[200px] flex-none overflow-hidden rounded-2xl shadow-lg border border-slate-100 bg-slate-50">
            <img 
              src={post.image} 
              alt={post.title} 
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>

          {/* Título e Metadados */}
          <div className="flex-1">
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-accent mb-4">
              <span>{post.category}</span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-primary md:text-4xl lg:leading-[1.2]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-slate-50 pt-4">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
              
              {/* BOTÃO COMPARTILHAR ATUALIZADO */}
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 hover:text-accent transition-all ml-auto group font-bold text-primary"
              >
                <Share2 className="h-4 w-4 group-hover:scale-110 transition-transform" /> 
                <span className="hidden sm:inline">Compartilhar</span>
              </button>
            </div>
          </div>
        </header>

        <hr className="mb-12 border-slate-100" />

        {/* Conteúdo (Estilizado via Prosa/Tailwind) */}
        <div 
          className="prose prose-slate prose-lg max-w-none 
          prose-headings:text-primary prose-headings:font-bold
          prose-p:leading-relaxed prose-p:text-slate-600
          prose-blockquote:border-l-accent prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* CTA Final */}
        <div className="mt-16 rounded-3xl bg-primary p-8 text-center text-white md:p-12">
          <h3 className="text-2xl font-bold">Ficou com alguma dúvida sobre {post.category}?</h3>
          <p className="mt-4 text-white/80">Não arrisque seu patrimônio. Fale com um consultor da Segure Aqui agora mesmo.</p>
          <a 
            href={`https://wa.me/5547999534266?text=Ol%C3%A1%21%20Li%20o%20artigo%20"${post.title}"%20e%20gostaria%20de%20saber%20mais.`} 
            target="_blank" 
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-primary transition hover:scale-105 active:scale-95"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </article>
    </main>
  );
}