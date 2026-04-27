import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { BLOG_POSTS } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
});

function BlogPage() {
  // Separa os 3 primeiros posts para o destaque e o resto para a lista
  const featuredPosts = BLOG_POSTS.slice(0, 3);
  const olderPosts = BLOG_POSTS.slice(3);

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Conteúdo Especializado
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-primary md:text-6xl">
            Blog Segure Aqui
          </h1>
        </div>

        {/* SEÇÃO 1: OS 3 GRANDES DESTAQUES */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to="/blog/$postId"
              params={{ postId: post.id }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase text-white backdrop-blur-sm">
                  Destaque
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-bold leading-tight text-primary group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground italic">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-primary">
                  Ler Agora <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* SEÇÃO 2: RESTANTE EM LISTA (Se houver mais de 3) */}
        {olderPosts.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="flex items-center gap-2 text-lg font-bold text-primary mb-8 border-b pb-4">
              <FileText className="text-accent" size={20} />
              Artigos Anteriores
            </h3>
            
            <div className="space-y-4">
              {olderPosts.map((post) => (
                <Link
                  key={post.id}
                  to="/blog/$postId"
                  params={{ postId: post.id }}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
                      {post.category}
                    </span>
                    <h4 className="font-bold text-primary group-hover:text-accent transition-colors">
                      {post.title}
                    </h4>
                    <span className="text-[10px] text-muted-foreground mt-1">
                      {post.date} • {post.readTime} de leitura
                    </span>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Caso não tenha posts */}
        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            Em breve, novos conteúdos para você.
          </div>
        )}
      </div>
    </main>
  );
}