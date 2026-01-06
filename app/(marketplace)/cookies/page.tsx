import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Cookies | Vivoly',
  description: 'Política de Cookies da Vivoly. Entenda como utilizamos cookies e tecnologias similares.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-50 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Política de Cookies</h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">O Que São Cookies?</h2>
        <p className="text-muted-foreground mb-4">
          Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Tipos de Cookies Utilizados</h2>

        <div className="space-y-4">
          <div className="border border-border rounded-card p-4">
            <h3 className="font-bold mb-2">Cookies Necessários</h3>
            <p className="text-sm text-muted-foreground">Essenciais para o funcionamento do site.</p>
          </div>

          <div className="border border-border rounded-card p-4">
            <h3 className="font-bold mb-2">Cookies de Análise</h3>
            <p className="text-sm text-muted-foreground">Nos ajudam a entender como os visitantes usam o site.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 mt-8">Gerenciar Cookies</h2>
        <p className="text-muted-foreground">
          Você pode gerenciar suas preferências de cookies através do banner de consentimento ou nas configurações do seu navegador.
        </p>
      </div>
    </div>
  );
}
