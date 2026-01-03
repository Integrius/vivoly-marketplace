export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Vivoly AI Services
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transforme seu negócio com soluções baseadas em Inteligência Artificial.
          SaaS personalizados e consultorias especializadas.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
            Explorar Serviços
          </button>
          <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-accent transition">
            Fale Conosco
          </button>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Desenvolvimento SaaS",
              description: "Criação de soluções SaaS completas com IA integrada",
              icon: "💻",
            },
            {
              title: "Consultoria em IA",
              description: "Estratégia e implementação de soluções de Inteligência Artificial",
              icon: "🧠",
            },
            {
              title: "Soluções Personalizadas",
              description: "Desenvolvemos a solução perfeita para seu caso específico",
              icon: "⚙️",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para começar?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Entre em contato e descubra como podemos ajudar seu negócio
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
          Solicitar Orçamento
        </button>
      </section>
    </div>
  );
}
