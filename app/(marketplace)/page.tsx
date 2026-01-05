import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function HomePage() {
  const supabase = await createClient();

  // Fetch featured services
  const { data: featuredServices } = await supabase
    .from('services')
    .select(`
      *,
      categories (
        name,
        icon
      )
    `)
    .eq('status', 'published')
    .eq('featured', true)
    .limit(3);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
          Vivoly AI Services
        </h1>
        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Transforme seu negócio com soluções baseadas em Inteligência Artificial.
          SaaS personalizados e consultorias especializadas.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/services"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all text-lg"
          >
            Explorar Serviços
          </Link>
          <Link
            href="/contact"
            className="border-2 border-border px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all text-lg"
          >
            Fale Conosco
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Serviços em Destaque</h2>
          <Link
            href="/services"
            className="text-primary hover:underline font-semibold text-lg"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServices && featuredServices.length > 0 ? (
            featuredServices.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="border border-border rounded-card p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-200 group relative"
              >
                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    ⭐ Destaque
                  </div>
                )}

                {service.categories && (
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <span className="text-2xl">{service.categories.icon}</span>
                    <span className="text-sm font-medium">{service.categories.name}</span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Trust Signals */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span className="font-medium">5.0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>✓</span>
                    <span>Verificado</span>
                  </div>
                </div>

                <div className="text-primary font-semibold text-sm">
                  Ver detalhes →
                </div>
              </Link>
            ))
          ) : (
            // Fallback static cards
            [
              {
                title: "Desenvolvimento SaaS",
                description:
                  "Criação de soluções SaaS completas com IA integrada",
                icon: "💻",
              },
              {
                title: "Consultoria em IA",
                description:
                  "Estratégia e implementação de soluções de Inteligência Artificial",
                icon: "🧠",
              },
              {
                title: "Soluções Personalizadas",
                description:
                  "Desenvolvemos a solução perfeita para seu caso específico",
                icon: "⚙️",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border border-border rounded-card p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-200 relative"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>

                {/* Trust Signals */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span className="font-medium">5.0</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>✓</span>
                    <span>Verificado</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-card card-shadow-lg p-12 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Pronto para começar?
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed">
          Entre em contato e descubra como podemos ajudar seu negócio
        </p>
        <Link
          href="/services"
          className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all text-lg"
        >
          Solicitar Orçamento
        </Link>
      </section>
    </div>
  );
}
