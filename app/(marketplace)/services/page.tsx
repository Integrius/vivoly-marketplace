import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export const metadata = {
  title: 'Serviços - Vivoly Marketplace',
  description: 'Explore nossos serviços de IA e soluções personalizadas',
};

interface Service {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  featured: boolean;
  category_id: string | null;
  metadata: any;
  categories: {
    name: string;
    icon: string;
    slug: string;
  } | null;
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const supabase = await createClient();

  // Fetch categories for filter
  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  // Build query
  let query = supabase
    .from('services')
    .select(`
      *,
      categories (
        name,
        icon,
        slug
      )
    `)
    .eq('status', 'published')
    .order('featured', { ascending: false })
    .order('created_at', { ascending: false });

  // Filter by category if provided
  if (searchParams.category) {
    const { data: category } = await supabase
      .from('categories')
      .select('id')
      .eq('slug', searchParams.category)
      .single();

    if (category) {
      query = query.eq('category_id', category.id);
    }
  }

  const { data: services } = await query;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Soluções de IA personalizadas para transformar seu negócio
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <Link
            href="/services"
            className={`px-4 py-2 rounded-full border transition ${
              !searchParams.category
                ? 'bg-primary text-primary-foreground border-primary'
                : 'border-border hover:border-primary'
            }`}
          >
            Todos
          </Link>
          {categories?.map((category) => (
            <Link
              key={category.id}
              href={`/services?category=${category.slug}`}
              className={`px-4 py-2 rounded-full border transition ${
                searchParams.category === category.slug
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary'
              }`}
            >
              <span className="mr-1">{category.icon}</span>
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      {services && services.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service: Service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="border border-border rounded-lg p-6 hover:shadow-lg transition group"
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mb-3">
                  ⭐ Destaque
                </div>
              )}

              {/* Category */}
              {service.categories && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{service.categories.icon}</span>
                  <span>{service.categories.name}</span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Metadata */}
              {service.metadata && (
                <div className="space-y-2 text-sm">
                  {service.metadata.price_range && (
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">💰</span>
                      <span>{service.metadata.price_range}</span>
                    </div>
                  )}
                  {service.metadata.delivery_time && (
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">⏱️</span>
                      <span>{service.metadata.delivery_time}</span>
                    </div>
                  )}
                </div>
              )}

              {/* CTA */}
              <div className="mt-4 text-primary font-medium">
                Ver detalhes →
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Nenhum serviço encontrado nesta categoria.
          </p>
          <Link
            href="/services"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Ver todos os serviços
          </Link>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">
          Não encontrou o que procura?
        </h2>
        <p className="mb-6 opacity-90">
          Entre em contato e criaremos uma solução personalizada para você
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Fale Conosco
        </Link>
      </div>
    </div>
  );
}
