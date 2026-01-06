import Link from 'next/link';
import Image from 'next/image';
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
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent leading-[1.3] pb-2">
              Soluções de Inteligência Artificial que Transformam Negócios
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              Desenvolvemos <strong>SaaS personalizados com IA</strong> que impulsionam resultados reais.
              Desde 2025, especializados em criar sistemas inteligentes com excelência em tecnologia,
              confiabilidade e performance.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              <strong>Destaque:</strong> Integrius - CRM Imobiliário com IA que revoluciona a gestão de propriedades
              com automação inteligente e decisões baseadas em dados.
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <Link
                href="/services"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all text-lg shadow-lg"
              >
                Conheça Nossas Soluções
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-all text-lg"
              >
                Solicite uma Análise Gratuita
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-card overflow-hidden card-shadow-lg">
            <Image
              src="/heropic.png"
              alt="Dashboard de Inteligência Artificial da Vivoly mostrando analytics, gráficos e métricas em tempo real - Plataforma SaaS com IA"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex justify-center gap-8 flex-wrap text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏆</span>
            <span>Especialistas em IA desde 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span>Alta Performance Garantida</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>Confiabilidade Comprovada</span>
          </div>
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
                className="border-[3px] border-primary rounded-card p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-200 group card-folded overflow-hidden"
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
                title: "Automação Inteligente",
                description:
                  "Automatize processos com Inteligência Artificial e aumente a eficiência",
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
                className="border-[3px] border-primary rounded-card p-6 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-200 card-folded overflow-hidden"
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

      {/* About Vivoly Section */}
      <section className="py-16 bg-secondary/30 -mx-4 px-4 rounded-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Por Que Escolher a Vivoly?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-card card-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">
                🎯 Expertise Especializada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Desde o início de 2025, nossa equipe dedica estudos aprofundados em Inteligência Artificial,
                desenvolvendo soluções que combinam inovação tecnológica com aplicações práticas de negócio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card card-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">
                ✅ Resultados Comprovados
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                O Integrius, nosso CRM imobiliário com IA, demonstra nossa capacidade de entregar sistemas
                com excelentes níveis de confiabilidade, performance e retorno sobre investimento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card card-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">
                🚀 Inovação Constante
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Múltiplos projetos em desenvolvimento e estudo garantem que estamos sempre na vanguarda
                da tecnologia, trazendo as melhores soluções de IA para nossos clientes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-card card-shadow">
              <h3 className="text-xl font-bold mb-3 text-primary">
                🤝 Compromisso com a Qualidade
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Seguimos rigorosas diretrizes de tecnologia, confiabilidade e seriedade em cada projeto,
                garantindo soluções robustas e escaláveis para seu negócio.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-card border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Nosso Case de Sucesso: Integrius CRM
            </h3>
            <p className="text-center text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              Sistema SaaS completo para gestão imobiliária, 100% desenvolvido com Inteligência Artificial.
              Automatização de processos, análise preditiva de mercado e gestão inteligente de leads que
              aumenta conversões em até 40%.
            </p>
            <div className="flex justify-center gap-6 flex-wrap text-sm">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-muted-foreground">↑ Conversão</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2x</div>
                <div className="text-muted-foreground">Mais Rápido</div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://integrius.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-card font-semibold hover:opacity-90 transition-all shadow-lg"
              >
                Visite o Integrius →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-card card-shadow-lg p-12 text-center mt-16">
        <h2 className="text-4xl font-bold mb-4">
          Pronto para Transformar seu Negócio com IA?
        </h2>
        <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
          Agende uma análise gratuita e descubra como nossas soluções de Inteligência Artificial
          podem otimizar seus processos, reduzir custos e aumentar receitas.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/services"
            className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all text-lg shadow-lg"
          >
            Ver Todas as Soluções
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all text-lg"
          >
            Falar com Especialista
          </Link>
        </div>
      </section>
    </div>
  );
}
