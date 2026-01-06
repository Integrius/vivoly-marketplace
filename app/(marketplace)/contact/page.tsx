import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone, Clock, Send } from 'lucide-react';
import ContactForm from '@/components/marketplace/ContactForm';

export const metadata: Metadata = {
  title: 'Contato | Vivoly - Entre em Contato Conosco',
  description: 'Entre em contato com a Vivoly. Agende uma análise gratuita e descubra como nossas soluções de IA podem transformar seu negócio.',
  keywords: ['contato', 'Vivoly', 'análise gratuita', 'suporte', 'fale conosco'],
  openGraph: {
    title: 'Contato | Vivoly',
    description: 'Entre em contato com a Vivoly para uma análise gratuita de suas necessidades em IA.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-50 hover:text-white mb-6 transition">
            <ArrowLeft className="h-4 w-4" />
            Voltar para Início
          </Link>
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl opacity-90 max-w-3xl leading-relaxed">
            Estamos prontos para transformar seu negócio com Inteligência Artificial. Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Information - 2 columns */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Nossa equipe está pronta para entender suas necessidades e apresentar soluções personalizadas de IA para seu negócio.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="border border-border rounded-card p-4 card-shadow hover:card-shadow-hover transition-all">
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:contato@vivoly.com.br"
                      className="text-muted-foreground hover:text-primary transition"
                    >
                      contato@vivoly.com.br
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-card p-4 card-shadow hover:card-shadow-hover transition-all">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Localização</h3>
                    <p className="text-muted-foreground">
                      Brasil
                      <br />
                      Atendimento 100% remoto
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-card p-4 card-shadow hover:card-shadow-hover transition-all">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Resposta em até 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-card p-6 border-2 border-primary/20">
              <h3 className="font-bold mb-4 text-lg">Por Que Nos Escolher?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg flex-shrink-0">✓</span>
                  <span><strong>Análise Gratuita:</strong> Avaliamos suas necessidades sem compromisso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg flex-shrink-0">✓</span>
                  <span><strong>Resposta Rápida:</strong> Retornamos em até 24 horas úteis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg flex-shrink-0">✓</span>
                  <span><strong>Soluções Personalizadas:</strong> Desenvolvemos sob medida para seu negócio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary text-lg flex-shrink-0">✓</span>
                  <span><strong>Suporte Contínuo:</strong> Acompanhamento em todas as etapas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div className="md:col-span-3">
            <div className="border-2 border-primary rounded-card p-8 card-shadow-lg bg-white">
              <div className="flex items-center gap-3 mb-6">
                <Send className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold">Solicite uma Análise Gratuita</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário abaixo com suas informações e descreva como podemos ajudar seu negócio. Nossa equipe analisará sua solicitação e entrará em contato com uma proposta personalizada.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
