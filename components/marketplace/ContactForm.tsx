'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Simulate API call for now
      // TODO: Integrate with Supabase or Email API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // For now, just log to console
      console.log('Form submitted:', formData);

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato por email.');
      console.error('Error submitting form:', error);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2 text-emerald-600">Mensagem Enviada com Sucesso!</h3>
        <p className="text-muted-foreground mb-6">
          Obrigado pelo seu contato. Nossa equipe irá analisar sua solicitação e responderá em até 24 horas úteis.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-primary hover:underline font-medium"
        >
          Enviar nova mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nome Completo <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          placeholder="João Silva"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          placeholder="joao@empresa.com"
        />
      </div>

      {/* Company and Phone - Side by Side */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-2">
            Empresa
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="Nome da Empresa"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          Assunto <span className="text-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-white"
        >
          <option value="">Selecione um assunto</option>
          <option value="analise-gratuita">Análise Gratuita</option>
          <option value="desenvolvimento-saas">Desenvolvimento de SaaS</option>
          <option value="automacao-ia">Automação com IA</option>
          <option value="consultoria">Consultoria Técnica</option>
          <option value="integracao">Integração de Sistemas</option>
          <option value="suporte">Suporte Técnico</option>
          <option value="outro">Outro</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
          placeholder="Descreva como podemos ajudar seu negócio..."
        />
        <p className="text-xs text-muted-foreground mt-2">
          Quanto mais detalhes você fornecer, melhor poderemos entender suas necessidades.
        </p>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border-2 border-red-200 rounded-card p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-card font-semibold hover:opacity-90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Enviar Mensagem
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <p className="text-xs text-muted-foreground text-center">
        Ao enviar este formulário, você concorda com nossa{' '}
        <a href="/privacy" className="text-primary hover:underline">
          Política de Privacidade
        </a>
        . Seus dados são protegidos pela LGPD.
      </p>
    </form>
  );
}
