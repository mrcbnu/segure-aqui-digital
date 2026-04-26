import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";

// Exemplo de dados dos posts (Isto depois pode vir de um CMS ou ficheiro JSON)
const POSTS = [
  {
    id: "seguro-auto-mais-barato",
    title: "5 dicas infalíveis para reduzir o preço do seu Seguro Auto",
    excerpt: "Saiba como o seu perfil e as coberturas escolhidas influenciam diretamente no valor final da sua apólice.",
    category: "Seguro Auto",
    date: "15 Mai, 2024",
    readTime: "5 min",
    image: "/banner/1.jpg", // Usa as fotos que já tens na pasta banner
  },
  {
    id: "importancia-seguro-vida",
    title: "Seguro de Vida: Porquê é o melhor investimento para a sua família",
    excerpt: "Muito além da cobertura de óbito, entenda como as coberturas em vida protegem o seu património.",
    category: "Planeamento",
    date: "10 Mai, 2024",
    readTime: "7 min",
    image: "/banner/2.jpg",
  }
];

export const Route = createFileRoute("/blog/")({
  component: BlogList,
});

function BlogList() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header do Blog */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">
            Blog <span className="text-accent">Segure Aqui</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Conteúdo especializado para te ajudar a proteger o que mais importa com inteligência.
          </p>
        </div>
      </section>

      {/* Grelha de Artigos */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <Link
              key={post.id}
              to="/blog/$postId"
              params={{ postId: post.id }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Imagem do Post */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary backdrop-blur-sm">
                  {post.category}
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </span>
                </div>
                
                <h3 className="mt-4 text-xl font-bold leading-tight text-primary transition-colors group-hover:text-accent">
                  {post.title}
                </h3>
                
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6">
                  <span className="flex items-center gap-2 text-sm font-bold text-primary">
                    Ler artigo completo <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}