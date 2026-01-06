import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Target, Zap, Shield, Users, Lightbulb, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre a Vivoly | Especialistas em Inteligência Artificial',
  description: 'Conheça a Vivoly: empresa especializada em desenvolvimento de soluções SaaS com Inteligência Artificial. Nossa missão, valores e compromisso com excelência tecnológica.',
  keywords: ['Vivoly', 'sobre nós', 'inteligência artificial', 'SaaS', 'tecnologia', 'empresa de IA'],
  openGraph: {
    title: 'Sobre a Vivoly | Especialistas em Inteligência Artificial',
    description: 'Conheça a Vivoly: empresa especializada em desenvolvimento de soluções SaaS com Inteligência Artificial.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-50 hover:text-white mb-6 transition">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Início
          </Link>
          <h1 className="text-5xl font-bold mb-6">Sobre a Vivoly</h1>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
            Transformamos ideias em soluções de Inteligência Artificial que geram resultados reais para empresas de todos os tamanhos.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Nossa História */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desde o início de 2025, a Vivoly nasceu com uma missão clara: <strong>democratizar o acesso à Inteligência Artificial</strong> para empresas que buscam inovação e crescimento sustentável.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa equipe é formada por especialistas apaixonados por tecnologia, com foco em estudos aprofundados de IA e desenvolvimento de sistemas robustos. Acreditamos que a Inteligência Artificial não é apenas uma ferramenta, mas um <strong>catalisador de transformação</strong> que pode revolucionar a forma como empresas operam.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso primeiro grande case de sucesso, o <strong>Integrius CRM</strong>, demonstra nossa capacidade de entregar soluções SaaS completas com alta performance, confiabilidade e resultados mensuráveis.
            </p>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Missão, Visão e Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-primary rounded-card p-6 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Desenvolver soluções de Inteligência Artificial acessíveis, inovadoras e confiáveis que impulsionem o crescimento e a eficiência de nossos clientes.
              </p>
            </div>

            <div className="border-2 border-primary rounded-card p-6 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em desenvolvimento de soluções SaaS com IA, reconhecidos pela excelência técnica e impacto gerado em nossos clientes.
              </p>
            </div>

            <div className="border-2 border-primary rounded-card p-6 card-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Valores</h3>
              </div>
              <ul className="text-muted-foreground text-sm space-y-2">
                <li>✓ Excelência Técnica</li>
                <li>✓ Transparência</li>
                <li>✓ Inovação Constante</li>
                <li>✓ Compromisso com Resultados</li>
                <li>✓ Ética e Confiabilidade</li>
              </ul>
            </div>
          </div>
        </section>

        {/* O Que Nos Diferencia */}
        <section className="mb-16 bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-card border-2 border-primary/20">
          <h2 className="text-4xl font-bold mb-8 text-center">O Que Nos Diferencia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Zap className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Alta Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desenvolvemos sistemas otimizados com 99.9% de uptime, garantindo que seu negócio opere sem interrupções.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Code className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tecnologia de Ponta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos as mais modernas stacks de desenvolvimento e frameworks de IA para garantir soluções escaláveis e futuras.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Abordagem Personalizada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada cliente é único. Desenvolvemos soluções sob medida que atendem suas necessidades específicas e objetivos de negócio.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Segurança e Confiabilidade</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Seguimos as melhores práticas de segurança, conformidade com LGPD e proteção de dados dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nosso Case de Sucesso */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Nosso Case de Sucesso</h2>
          <div className="border-2 border-primary rounded-card p-8 card-shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary">Integrius CRM</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              O Integrius é um sistema SaaS completo para gestão imobiliária, 100% desenvolvido com Inteligência Artificial.
              Este projeto demonstra nossa capacidade de entregar soluções robustas, escaláveis e com resultados mensuráveis.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-emerald-50 rounded-card">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Aumento na Conversão de Leads</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-card">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Garantido</div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-card">
                <div className="text-4xl font-bold text-primary mb-2">2x</div>
                <div className="text-sm text-muted-foreground">Mais Rápido que Concorrentes</div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://integrius.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-card font-semibold hover:opacity-90 transition"
              >
                Conheça o Integrius →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-card p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Vamos Transformar seu Negócio Juntos?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Agende uma análise gratuita e descubra como nossas soluções de IA podem impulsionar seus resultados.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-card font-semibold hover:opacity-90 transition shadow-lg"
            >
              Falar com Especialista
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-card font-semibold hover:bg-white/10 transition"
            >
              Conheça Nossas Soluções
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
