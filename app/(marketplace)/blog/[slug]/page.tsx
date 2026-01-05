import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, blogPosts } from "@/lib/blog-posts";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Artigo não encontrado | Vivoly",
    };
  }

  return {
    title: `${post.title} | Blog Vivoly`,
    description: post.description,
    keywords: [post.category, ...post.tags, "Vivoly", "Inteligência Artificial"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://vivoly.com.br/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://vivoly.com.br/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Schema.org Article Structured Data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://vivoly.com.br",
    },
    publisher: {
      "@type": "Organization",
      name: "Vivoly",
      logo: {
        "@type": "ImageObject",
        url: "https://vivoly.com.br/logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vivoly.com.br/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "pt-BR",
  };

  // Related posts (same category or tags)
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category || p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <>
      {/* Schema.org Article Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-background">
        {/* Article Header */}
        <article>
          <header className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-emerald-50 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Voltar para o blog
                </Link>

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {post.title}
                </h1>

                {/* Description */}
                <p className="text-xl text-emerald-50 mb-6 leading-relaxed">
                  {post.description}
                </p>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 text-sm text-emerald-50">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => (
                          <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>
                        ),
                        p: ({ children }) => (
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            {children}
                          </p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground">
                            {children}
                          </ol>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-foreground">
                            {children}
                          </strong>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="text-primary hover:underline font-medium"
                          >
                            {children}
                          </a>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                            {children}
                          </blockquote>
                        ),
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-lg font-bold mb-4">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-card text-sm font-medium"
                        >
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Box */}
                  <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-card p-8 card-shadow-lg">
                    <h3 className="text-2xl font-bold mb-3">
                      Gostou deste conteúdo?
                    </h3>
                    <p className="text-emerald-50 mb-6">
                      Transforme conhecimento em ação. Descubra como a Vivoly
                      pode desenvolver soluções de IA personalizadas para o seu
                      negócio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/services"
                        className="bg-white text-emerald-600 text-center px-6 py-3 rounded-card font-semibold hover:bg-emerald-50 transition"
                      >
                        Conhecer Nossos Serviços
                      </Link>
                      <Link
                        href="/#contact"
                        className="border-2 border-white text-white text-center px-6 py-3 rounded-card font-semibold hover:bg-white hover:text-emerald-600 transition"
                      >
                        Agendar Análise Gratuita
                      </Link>
                    </div>
                  </div>

                  {/* Related Posts */}
                  {relatedPosts.length > 0 && (
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold mb-6">
                        Artigos Relacionados
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        {relatedPosts.map((relatedPost) => (
                          <Link
                            key={relatedPost.slug}
                            href={`/blog/${relatedPost.slug}`}
                            className="border border-border rounded-card p-4 card-shadow hover:card-shadow-hover transition-all duration-200 group"
                          >
                            <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium mb-2">
                              {relatedPost.category}
                            </span>
                            <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {relatedPost.description.slice(0, 100)}...
                            </p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-6">
                  {/* Table of Contents - Could be enhanced with actual headings extraction */}
                  <div className="border border-border rounded-card p-4 card-shadow sticky top-4">
                    <h3 className="font-bold mb-3 text-sm">Compartilhar</h3>
                    <div className="flex flex-col gap-2">
                      <button className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        Twitter
                      </button>
                      <button className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        LinkedIn
                      </button>
                      <button className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        Facebook
                      </button>
                      <button className="text-left text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                        WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* About Vivoly */}
                  <div className="border border-border rounded-card p-4 card-shadow">
                    <h3 className="font-bold mb-3 text-sm">Sobre a Vivoly</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Especialistas em desenvolvimento de SaaS com Inteligência
                      Artificial. Criamos soluções personalizadas que
                      transformam negócios.
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
