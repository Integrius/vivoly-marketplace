import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Termos de Uso | Vivoly',
  description: 'Termos de Uso da Vivoly. Leia os termos e condições de uso do nosso site e serviços.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const lastUpdated = '06 de Janeiro de 2026';

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-50 hover:text-white mb-6 transition">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Termos de Uso</h1>
          </div>
          <p className="text-emerald-100">Última atualização: {lastUpdated}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bem-vindo à Vivoly. Ao acessar e utilizar este site (vivoly.com.br), você concorda em cumprir
            e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer
            parte destes termos, por favor, não utilize nosso site.
          </p>
        </section>

        {/* 1. Aceitação dos Termos */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">1.</span> Aceitação dos Termos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Ao acessar ou usar o site da Vivoly, você concorda com estes Termos de Uso e com nossa
            Política de Privacidade. Reservamo-nos o direito de modificar estes termos a qualquer momento,
            e tais modificações entrarão em vigor imediatamente após sua publicação no site.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            É sua responsabilidade revisar periodicamente estes termos para verificar eventuais alterações.
            O uso continuado do site após a publicação de alterações constitui sua aceitação dessas alterações.
          </p>
        </section>

        {/* 2. Descrição dos Serviços */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">2.</span> Descrição dos Serviços
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A Vivoly oferece serviços de desenvolvimento de soluções SaaS (Software as a Service) com
            Inteligência Artificial, incluindo mas não limitado a:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
            <li>Desenvolvimento de software personalizado com IA</li>
            <li>Automação inteligente de processos empresariais</li>
            <li>Consultoria em Inteligência Artificial</li>
            <li>Integração de sistemas</li>
            <li>Suporte técnico e manutenção</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Os serviços específicos, preços e condições serão estabelecidos em contratos individuais
            entre a Vivoly e cada cliente.
          </p>
        </section>

        {/* 3. Uso do Site */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">3.</span> Uso Permitido do Site
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Você concorda em usar o site apenas para fins legais e de acordo com estes Termos. Você concorda em não:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>Usar o site de qualquer forma que viole leis locais, nacionais ou internacionais</li>
            <li>Transmitir material malicioso, vírus ou qualquer código de natureza destrutiva</li>
            <li>Tentar obter acesso não autorizado ao site, servidores ou redes conectadas</li>
            <li>Interferir ou interromper o site ou servidores conectados</li>
            <li>Copiar, reproduzir ou distribuir conteúdo do site sem autorização expressa</li>
            <li>Usar ferramentas automatizadas (bots, scrapers) sem permissão</li>
          </ul>
        </section>

        {/* 4. Propriedade Intelectual */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">4.</span> Propriedade Intelectual
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Todo o conteúdo presente neste site, incluindo mas não limitado a textos, gráficos, logos,
            ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade
            da Vivoly ou de seus fornecedores de conteúdo e é protegido pelas leis brasileiras e
            internacionais de direitos autorais.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            A marca "Vivoly" e todos os logos relacionados são marcas comerciais ou marcas registradas da
            Vivoly. Você não pode usar essas marcas sem a permissão prévia por escrito da Vivoly.
          </p>
        </section>

        {/* 5. Conteúdo do Usuário */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">5.</span> Conteúdo Enviado por Usuários
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Ao enviar informações através de formulários de contato ou outros meios no site, você garante que:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
            <li>As informações fornecidas são verdadeiras e precisas</li>
            <li>Você possui os direitos necessários sobre o conteúdo enviado</li>
            <li>O conteúdo não viola direitos de terceiros</li>
            <li>O conteúdo não é ilegal, ofensivo ou prejudicial</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            A Vivoly reserva-se o direito de remover qualquer conteúdo que considere inadequado ou que viole
            estes Termos de Uso.
          </p>
        </section>

        {/* 6. Privacidade e Proteção de Dados */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">6.</span> Privacidade e Proteção de Dados (LGPD)
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            A Vivoly está comprometida com a proteção de seus dados pessoais de acordo com a Lei Geral de
            Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Para informações detalhadas sobre como coletamos, usamos e protegemos seus dados pessoais,
            consulte nossa{' '}
            <Link href="/privacy" className="text-primary hover:underline font-medium">
              Política de Privacidade
            </Link>{' '}
            e nossa{' '}
            <Link href="/cookies" className="text-primary hover:underline font-medium">
              Política de Cookies
            </Link>
            .
          </p>
        </section>

        {/* 7. Isenção de Garantias */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">7.</span> Isenção de Garantias
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            O site e seu conteúdo são fornecidos "no estado em que se encontram" e "conforme disponíveis",
            sem garantias de qualquer tipo, expressas ou implícitas. A Vivoly não garante que:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>O site estará disponível ininterruptamente ou livre de erros</li>
            <li>Defeitos serão corrigidos imediatamente</li>
            <li>O site ou servidores estão livres de vírus ou outros componentes prejudiciais</li>
            <li>As informações no site são completas, precisas ou atualizadas</li>
          </ul>
        </section>

        {/* 8. Limitação de Responsabilidade */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">8.</span> Limitação de Responsabilidade
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Em nenhuma circunstância a Vivoly, seus diretores, funcionários ou afiliados serão responsáveis por:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-3">
            <li>Danos diretos, indiretos, incidentais, especiais ou consequenciais</li>
            <li>Perda de lucros, receitas, dados ou uso</li>
            <li>Interrupção de negócios</li>
            <li>Custos de obtenção de serviços substitutos</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Esta limitação se aplica mesmo que a Vivoly tenha sido informada da possibilidade de tais danos.
          </p>
        </section>

        {/* 9. Links para Sites de Terceiros */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">9.</span> Links para Sites de Terceiros
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Nosso site pode conter links para sites de terceiros que não são operados pela Vivoly. Não temos
            controle sobre o conteúdo, políticas de privacidade ou práticas desses sites e não assumimos
            responsabilidade por eles. Recomendamos que você leia os termos e condições e políticas de
            privacidade de qualquer site de terceiro que visitar.
          </p>
        </section>

        {/* 10. Modificações do Site */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">10.</span> Modificações do Site e Serviços
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Vivoly reserva-se o direito de modificar, suspender ou descontinuar, temporária ou
            permanentemente, o site ou qualquer serviço a que ele se conecta, com ou sem aviso prévio e sem
            responsabilidade para você.
          </p>
        </section>

        {/* 11. Lei Aplicável */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">11.</span> Lei Aplicável e Jurisdição
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estes Termos de Uso são regidos e interpretados de acordo com as leis da República Federativa
            do Brasil. Qualquer disputa decorrente destes termos será submetida à jurisdição exclusiva dos
            tribunais brasileiros.
          </p>
        </section>

        {/* 12. Contrato Completo */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">12.</span> Acordo Integral
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estes Termos de Uso, juntamente com nossa Política de Privacidade e Política de Cookies,
            constituem o acordo integral entre você e a Vivoly em relação ao uso do site e substituem todos
            os acordos anteriores ou contemporâneos.
          </p>
        </section>

        {/* 13. Divisibilidade */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">13.</span> Divisibilidade
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível por um
            tribunal competente, as disposições restantes permanecerão em pleno vigor e efeito.
          </p>
        </section>

        {/* Contact Section */}
        <section className="border-t border-border pt-10 mt-12">
          <h2 className="text-2xl font-bold mb-4">Contato</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-card p-6 border-2 border-primary/20">
            <p className="text-muted-foreground mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:contato@vivoly.com.br" className="text-primary hover:underline">
                contato@vivoly.com.br
              </a>
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Website:</strong>{' '}
              <a href="https://vivoly.com.br" className="text-primary hover:underline">
                vivoly.com.br
              </a>
            </p>
            <p className="text-muted-foreground">
              <strong>Compromisso de Resposta:</strong> Até 15 dias úteis
            </p>
          </div>
        </section>

        {/* Last Updated Notice */}
        <div className="mt-12 p-6 bg-muted rounded-card text-center">
          <p className="text-sm text-muted-foreground">
            Estes Termos de Uso foram atualizados em <strong>{lastUpdated}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
