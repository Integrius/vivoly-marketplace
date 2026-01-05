import { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getAllCategories, getAllTags } from "@/lib/blog-posts";
import { Calendar, Clock, Tag, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Inteligência Artificial e Automação | Vivoly",
  description:
    "Artigos especializados sobre Inteligência Artificial, automação empresarial, CRM inteligente e SaaS. Aprenda com especialistas e descubra como IA pode transformar seu negócio.",
  keywords: [
    "blog inteligência artificial",
    "artigos sobre IA",
    "automação empresarial",
    "CRM inteligente",
    "blog SaaS",
    "gestão com IA",
    "blog tecnologia",
    "IA para empresas",
  ],
  openGraph: {
    title: "Blog - Inteligência Artificial e Automação | Vivoly",
    description:
      "Artigos especializados sobre IA, automação e transformação digital para empresas.",
    url: "https://vivoly.com.br/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://vivoly.com.br/blog",
  },
};

export default function BlogPage() {
  const categories = getAllCategories();
  const tags = getAllTags();
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Blog de Inteligência Artificial
            </h1>
            <p className="text-xl text-emerald-50 leading-relaxed">
              Insights, tendências e guias práticos sobre como a IA está
              transformando negócios. Aprenda com especialistas e descubra
              estratégias para implementar automação inteligente na sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Artigos Recentes</h2>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-border rounded-card p-6 card-shadow hover:card-shadow-hover transition-all duration-200 group"
                >
                  {/* Post Header */}
                  <div className="mb-4">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </Link>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "pt-BR",
                            {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} de leitura</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground border border-border px-2 py-1 rounded-card"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Ler artigo completo
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="border border-border rounded-card p-6 card-shadow">
              <h3 className="text-xl font-bold mb-4">Categorias</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button className="text-muted-foreground hover:text-primary transition-colors w-full text-left py-1">
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags Cloud */}
            <div className="border border-border rounded-card p-6 card-shadow">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="inline-flex items-center gap-1 text-sm border border-border px-3 py-1 rounded-card hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-card p-6 card-shadow-lg">
              <h3 className="text-xl font-bold mb-3">
                Receba Conteúdo Exclusivo
              </h3>
              <p className="text-emerald-50 mb-4 text-sm">
                Inscreva-se para receber artigos, guias e novidades sobre IA
                direto no seu email.
              </p>
              <Link
                href="/services"
                className="block w-full bg-white text-emerald-600 text-center px-4 py-2 rounded-card font-medium hover:bg-emerald-50 transition"
              >
                Falar com Especialista
              </Link>
            </div>

            {/* About */}
            <div className="border border-border rounded-card p-6 card-shadow">
              <h3 className="text-xl font-bold mb-3">Sobre o Blog</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Compartilhamos conhecimento prático sobre Inteligência
                Artificial, automação e transformação digital. Todos os artigos
                são escritos por nossa equipe de especialistas com experiência
                real em implementação de IA para negócios.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Implementar IA no Seu Negócio?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Transforme conhecimento em ação. Desenvolvemos SaaS personalizados
            com IA que geram resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-emerald-600 px-8 py-3 rounded-card font-semibold hover:bg-emerald-50 transition card-shadow-lg"
            >
              Ver Nossos Serviços
            </Link>
            <Link
              href="/#contact"
              className="border-2 border-white text-white px-8 py-3 rounded-card font-semibold hover:bg-white hover:text-emerald-600 transition"
            >
              Agendar Análise Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
