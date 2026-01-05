export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Vivoly",
    "alternateName": "Vivoly AI Services",
    "url": "https://vivoly.com.br",
    "logo": "https://vivoly.com.br/logo.png",
    "description": "Desenvolvemos SaaS com Inteligência Artificial que transformam negócios. Especialistas em IA desde 2025.",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Brasil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contato@vivoly.com.br",
      "availableLanguage": ["Portuguese"]
    },
    "sameAs": [
      "https://vivoly.com.br"
    ],
    "knowsAbout": [
      "Inteligência Artificial",
      "Machine Learning",
      "SaaS Development",
      "CRM Systems",
      "Business Automation",
      "AI Solutions"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Integrius CRM",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "description": "Análise gratuita disponível"
    },
    "description": "CRM Imobiliário com IA que revoluciona a gestão de propriedades com automação inteligente e decisões baseadas em dados.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    },
    "featureList": [
      "Automação inteligente de processos",
      "Análise preditiva de mercado",
      "Gestão inteligente de leads",
      "Alta performance garantida",
      "99.9% de uptime",
      "Aumento de 40% em conversões"
    ],
    "provider": {
      "@type": "Organization",
      "name": "Vivoly"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Desenvolvimento de Software com Inteligência Artificial",
    "provider": {
      "@type": "Organization",
      "name": "Vivoly"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Soluções de IA",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento SaaS",
            "description": "Criação de soluções SaaS completas com IA integrada"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automação Inteligente",
            "description": "Automatize processos com Inteligência Artificial e aumente a eficiência"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soluções Personalizadas",
            "description": "Desenvolvemos a solução perfeita para seu caso específico"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vivoly.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Serviços",
        "item": "https://vivoly.com.br/services"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é a Vivoly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Vivoly é uma empresa especializada em criar e desenvolver soluções baseadas em inteligência artificial. Desde 2025, desenvolvemos SaaS personalizados com IA que transformam negócios."
        }
      },
      {
        "@type": "Question",
        "name": "O que é o Integrius CRM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Integrius é um CRM imobiliário totalmente desenvolvido com Inteligência Artificial, que oferece automação inteligente, análise preditiva de mercado e gestão de leads, aumentando conversões em até 40%."
        }
      },
      {
        "@type": "Question",
        "name": "Quais serviços a Vivoly oferece?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferecemos Desenvolvimento de SaaS com IA, Automação Inteligente de processos e Soluções Personalizadas adaptadas às necessidades específicas de cada cliente."
        }
      },
      {
        "@type": "Question",
        "name": "Como posso solicitar uma análise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você pode solicitar uma análise gratuita através do nosso formulário de contato. Garantimos resposta em até 24 horas."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
