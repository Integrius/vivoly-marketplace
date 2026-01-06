import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Vivoly',
  description:
    'Política de Privacidade da Vivoly. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = '05 de Janeiro de 2026';

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-50 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Home
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-10 w-10" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Política de Privacidade
              </h1>
            </div>
            <p className="text-xl text-emerald-50">
              Seu compromisso com a transparência e proteção de dados pessoais
            </p>
            <p className="text-sm text-emerald-100 mt-4">
              Última atualização: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <strong>Vivoly</strong> ("<strong>nós</strong>", "<strong>nosso</strong>" ou "<strong>nossa</strong>")
              está comprometida em proteger sua privacidade e seus dados pessoais.
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos
              e protegemos suas informações quando você utiliza nosso site{' '}
              <strong>vivoly.com.br</strong> e nossos serviços.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Esta política está em conformidade com a <strong>Lei Geral de Proteção
              de Dados (LGPD - Lei nº 13.709/2018)</strong> e outras legislações
              aplicáveis de proteção de dados.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* Section 1 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">1. Dados Que Coletamos</h2>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.1. Dados Fornecidos por Você</h3>
              <p className="text-muted-foreground mb-4">
                Coletamos informações que você nos fornece voluntariamente ao:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Solicitar nossos serviços através de formulários</li>
                <li>Entrar em contato conosco por email ou telefone</li>
                <li>Assinar nossa newsletter</li>
                <li>Criar uma conta em nossa plataforma (quando disponível)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Tipos de dados:</strong> Nome, email, telefone, empresa, cargo, mensagem/descrição da necessidade.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.2. Dados Coletados Automaticamente</h3>
              <p className="text-muted-foreground mb-4">
                Quando você acessa nosso site, coletamos automaticamente:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Dados de navegação:</strong> Páginas visitadas, tempo de permanência, origem do acesso</li>
                <li><strong>Dados técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional, dispositivo</li>
                <li><strong>Cookies e tecnologias similares:</strong> Conforme nossa Política de Cookies</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">2. Como Usamos Seus Dados</h2>
              </div>

              <p className="text-muted-foreground mb-4">
                Utilizamos seus dados pessoais para as seguintes finalidades:
              </p>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-card p-4">
                  <h4 className="font-semibold mb-2">a) Prestação de Serviços</h4>
                  <p className="text-sm text-muted-foreground">
                    Processar suas solicitações, fornecer serviços de desenvolvimento
                    de SaaS e IA, gerenciar projetos e manter comunicação sobre o andamento.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-card p-4">
                  <h4 className="font-semibold mb-2">b) Comunicação</h4>
                  <p className="text-sm text-muted-foreground">
                    Responder suas dúvidas, enviar atualizações sobre serviços,
                    compartilhar conteúdo relevante (blog, novidades) mediante seu consentimento.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-card p-4">
                  <h4 className="font-semibold mb-2">c) Melhorias e Análises</h4>
                  <p className="text-sm text-muted-foreground">
                    Analisar como nosso site é utilizado, identificar problemas técnicos,
                    melhorar a experiência do usuário e desenvolver novos recursos.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-card p-4">
                  <h4 className="font-semibold mb-2">d) Segurança</h4>
                  <p className="text-sm text-muted-foreground">
                    Detectar e prevenir fraudes, abusos, atividades ilegais e
                    proteger a segurança de nossos sistemas.
                  </p>
                </div>

                <div className="bg-muted/50 rounded-card p-4">
                  <h4 className="font-semibold mb-2">e) Cumprimento Legal</h4>
                  <p className="text-sm text-muted-foreground">
                    Cumprir obrigações legais, responder a processos judiciais
                    e solicitações de autoridades competentes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">3. Bases Legais (LGPD)</h2>
              </div>

              <p className="text-muted-foreground mb-4">
                Processamos seus dados pessoais com base nas seguintes hipóteses legais
                previstas na LGPD:
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Consentimento:</strong> Quando você autoriza expressamente
                    o uso de seus dados (ex: newsletter, marketing)
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Execução de contrato:</strong> Para fornecer os serviços
                    solicitados por você
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Legítimo interesse:</strong> Para melhorar nossos serviços,
                    prevenir fraudes e garantir segurança
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Cumprimento de obrigação legal:</strong> Quando exigido por lei
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">4. Compartilhamento de Dados</h2>
              </div>

              <p className="text-muted-foreground mb-4">
                <strong>Não vendemos seus dados pessoais.</strong> Podemos compartilhar
                suas informações apenas nas seguintes situações:
              </p>

              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Prestadores de serviços:</strong> Empresas que nos auxiliam
                    (hospedagem, email, analytics) sob obrigação de confidencialidade
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Requisições legais:</strong> Quando exigido por lei ou ordem judicial
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Proteção de direitos:</strong> Para proteger nossos direitos,
                    propriedade e segurança
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <div>
                    <strong>Transações corporativas:</strong> Em caso de fusão, aquisição
                    ou venda de ativos
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">5. Segurança dos Dados</h2>
              </div>

              <p className="text-muted-foreground mb-4">
                Implementamos medidas técnicas e organizacionais apropriadas para
                proteger seus dados pessoais contra acesso não autorizado, perda,
                destruição ou alteração:
              </p>

              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Criptografia de dados em trânsito (SSL/TLS)</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento de segurança contínuo</li>
                <li>Backups regulares</li>
                <li>Treinamento de equipe em proteção de dados</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="border-l-4 border-primary pl-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">6. Seus Direitos (LGPD)</h2>
              </div>

              <p className="text-muted-foreground mb-4">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border rounded-card p-4">
                  <h4 className="font-semibold mb-2">✓ Confirmação e Acesso</h4>
                  <p className="text-sm text-muted-foreground">
                    Confirmar se tratamos seus dados e acessá-los
                  </p>
                </div>
                <div className="border border-border rounded-card p-4">
                  <h4 className="font-semibold mb-2">✓ Correção</h4>
                  <p className="text-sm text-muted-foreground">
                    Corrigir dados incompletos, inexatos ou desatualizados
                  </p>
                </div>
                <div className="border border-border rounded-card p-4">
                  <h4 className="font-semibold mb-2">✓ Anonimização/Bloqueio</h4>
                  <p className="text-sm text-muted-foreground">
                    Solicitar anonimização ou bloqueio de dados desnecessários
                  </p>
                </div>
                <div className="border border-border rounded-card p-4">
                  <h4 className="font-semibold mb-2">✓ Eliminação</h4>
                  <p className="text-sm text-muted-foreground">
                    Solicitar exclusão de dados tratados com consentimento
                  </p>
                </div>
                <div className="border border-border rounded-card p-4">
                  <h4 className="font-semibold mb-2">✓ Portabilidade</h4>
                  <p className="text-sm text-muted-foreground">
                    Solicitar dados em formato estruturado
                  </p>
                </div>
                <div className="border border-border rounded-card p-4">
                  <h4 className="font-semibold mb-2">✓ Revogação de Consentimento</h4>
                  <p className="text-sm text-muted-foreground">
                    Retirar consentimento a qualquer momento
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-card p-6">
                <h4 className="font-semibold mb-2 text-emerald-900">
                  Como Exercer Seus Direitos
                </h4>
                <p className="text-sm text-emerald-800">
                  Para exercer qualquer um desses direitos, entre em contato conosco
                  através do email:{' '}
                  <a
                    href="mailto:privacidade@vivoly.com.br"
                    className="font-semibold underline"
                  >
                    privacidade@vivoly.com.br
                  </a>
                </p>
                <p className="text-sm text-emerald-800 mt-2">
                  Responderemos sua solicitação em até <strong>15 dias úteis</strong>.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold mb-4">7. Retenção de Dados</h2>
              <p className="text-muted-foreground">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir
                as finalidades descritas nesta política, ou conforme exigido por lei.
              </p>
              <p className="text-muted-foreground mt-4">
                Após esse período, seus dados serão eliminados ou anonimizados de forma segura.
              </p>
            </section>

            {/* Section 8 */}
            <section className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold mb-4">8. Cookies e Tecnologias</h2>
              <p className="text-muted-foreground">
                Utilizamos cookies e tecnologias similares conforme descrito em nossa{' '}
                <Link href="/cookies" className="text-primary font-semibold hover:underline">
                  Política de Cookies
                </Link>.
              </p>
            </section>

            {/* Section 9 */}
            <section className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold mb-4">9. Alterações na Política</h2>
              <p className="text-muted-foreground">
                Podemos atualizar esta Política de Privacidade periodicamente.
                Notificaremos você sobre mudanças significativas através do site
                ou por email. A data da última atualização será sempre indicada no topo da política.
              </p>
            </section>

            {/* Section 10 */}
            <section className="border-l-4 border-primary pl-6">
              <h2 className="text-2xl font-bold mb-4">10. Contato</h2>
              <p className="text-muted-foreground mb-4">
                Para questões sobre esta Política de Privacidade ou sobre o tratamento
                de seus dados pessoais:
              </p>

              <div className="bg-muted/50 rounded-card p-6 space-y-3">
                <div>
                  <strong>Vivoly</strong>
                </div>
                <div>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacidade@vivoly.com.br" className="text-primary hover:underline">
                    privacidade@vivoly.com.br
                  </a>
                </div>
                <div>
                  <strong>Email Geral:</strong>{' '}
                  <a href="mailto:contato@vivoly.com.br" className="text-primary hover:underline">
                    contato@vivoly.com.br
                  </a>
                </div>
                <div>
                  <strong>Site:</strong>{' '}
                  <a href="https://vivoly.com.br" className="text-primary hover:underline">
                    vivoly.com.br
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-card p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">
              Dúvidas sobre Privacidade?
            </h3>
            <p className="text-emerald-50 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre
              como protegemos seus dados.
            </p>
            <a
              href="mailto:privacidade@vivoly.com.br"
              className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-card font-semibold hover:bg-emerald-50 transition"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
