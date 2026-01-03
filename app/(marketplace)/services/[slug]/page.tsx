import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ServiceRequestForm from '@/components/marketplace/ServiceRequestForm';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const supabase = await createClient();
  const { data: service } = await supabase
    .from('services')
    .select('title, description')
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single();

  return {
    title: service ? `${service.title} - Vivoly` : 'Serviço não encontrado',
    description: service?.description || 'Serviço de IA da Vivoly',
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const supabase = await createClient();

  const { data: service } = await supabase
    .from('services')
    .select(`
      *,
      categories (
        name,
        icon,
        slug
      )
    `)
    .eq('slug', params.slug)
    .eq('status', 'published')
    .single();

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <span className="mx-2 text-muted-foreground">/</span>
        <Link
          href="/services"
          className="text-muted-foreground hover:text-foreground"
        >
          Serviços
        </Link>
        <span className="mx-2 text-muted-foreground">/</span>
        <span className="text-foreground">{service.title}</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Header */}
          <div className="mb-8">
            {service.featured && (
              <div className="inline-block bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full mb-3">
                ⭐ Serviço em Destaque
              </div>
            )}

            {service.categories && (
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <span className="text-2xl">{service.categories.icon}</span>
                <span className="text-lg">{service.categories.name}</span>
              </div>
            )}

            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>

            <p className="text-xl text-muted-foreground">
              {service.description}
            </p>
          </div>

          {/* Metadata Cards */}
          {service.metadata && (
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {service.metadata.price_range && (
                <div className="border border-border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    Investimento
                  </div>
                  <div className="text-lg font-semibold">
                    💰 {service.metadata.price_range}
                  </div>
                </div>
              )}

              {service.metadata.delivery_time && (
                <div className="border border-border rounded-lg p-4">
                  <div className="text-sm text-muted-foreground mb-1">
                    Prazo de Entrega
                  </div>
                  <div className="text-lg font-semibold">
                    ⏱️ {service.metadata.delivery_time}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Features */}
          {service.metadata?.features && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">O que está incluído</h2>
              <ul className="space-y-3">
                {service.metadata.features.map(
                  (feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Process/How it Works */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Como Funciona</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Consulta Inicial</h3>
                  <p className="text-muted-foreground">
                    Entendemos suas necessidades e objetivos de negócio
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Proposta Personalizada</h3>
                  <p className="text-muted-foreground">
                    Criamos uma solução sob medida para seu caso específico
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Desenvolvimento</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe desenvolve a solução com acompanhamento contínuo
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Entrega e Suporte</h3>
                  <p className="text-muted-foreground">
                    Implementamos a solução e fornecemos suporte contínuo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Request Form */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-xl font-bold mb-4">
                Interessado neste serviço?
              </h3>
              <p className="text-muted-foreground mb-6">
                Preencha o formulário e entraremos em contato em até 24 horas
              </p>
              <ServiceRequestForm serviceId={service.id} serviceTitle={service.title} />
            </div>

            {/* Trust Signals */}
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Consultoria gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Resposta em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Serviços Relacionados</h2>
        <RelatedServices
          categoryId={service.category_id}
          currentServiceId={service.id}
        />
      </div>
    </div>
  );
}

async function RelatedServices({
  categoryId,
  currentServiceId,
}: {
  categoryId: string | null;
  currentServiceId: string;
}) {
  const supabase = await createClient();

  const { data: relatedServices } = await supabase
    .from('services')
    .select(`
      *,
      categories (
        name,
        icon
      )
    `)
    .eq('status', 'published')
    .eq('category_id', categoryId)
    .neq('id', currentServiceId)
    .limit(3);

  if (!relatedServices || relatedServices.length === 0) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {relatedServices.map((service) => (
        <Link
          key={service.id}
          href={`/services/${service.slug}`}
          className="border border-border rounded-lg p-6 hover:shadow-lg transition"
        >
          {service.categories && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>{service.categories.icon}</span>
              <span>{service.categories.name}</span>
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {service.description}
          </p>
          <div className="mt-3 text-primary text-sm font-medium">
            Ver detalhes →
          </div>
        </Link>
      ))}
    </div>
  );
}
