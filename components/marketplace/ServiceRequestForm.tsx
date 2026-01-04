'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

interface ServiceRequestFormProps {
  serviceId: string;
  serviceTitle: string;
}

export default function ServiceRequestForm({
  serviceId,
  serviceTitle,
}: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    client_name: '',
    client_email: '',
    company_name: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const supabase = createClient();

    const { error } = await supabase.from('service_requests').insert({
      service_id: serviceId,
      client_name: formData.client_name,
      client_email: formData.client_email,
      company_name: formData.company_name || null,
      message: formData.message,
      status: 'pending',
    });

    if (error) {
      setStatus('error');
      setErrorMessage(error.message);
      return;
    }

    setStatus('success');
    setFormData({
      client_name: '',
      client_email: '',
      company_name: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-card p-6 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h4 className="font-semibold text-green-900 mb-2">
          Solicitação Enviada!
        </h4>
        <p className="text-sm text-green-700">
          Recebemos sua solicitação para <strong>{serviceTitle}</strong>.
          Entraremos em contato em breve!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label
          htmlFor="client_name"
          className="block text-sm font-medium mb-1"
        >
          Nome completo *
        </label>
        <input
          type="text"
          id="client_name"
          name="client_name"
          required
          value={formData.client_name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Seu nome"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="client_email"
          className="block text-sm font-medium mb-1"
        >
          Email *
        </label>
        <input
          type="email"
          id="client_email"
          name="client_email"
          required
          value={formData.client_email}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="seu@email.com"
        />
      </div>

      {/* Company (optional) */}
      <div>
        <label
          htmlFor="company_name"
          className="block text-sm font-medium mb-1"
        >
          Empresa (opcional)
        </label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          value={formData.company_name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Nome da empresa"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-border rounded-card focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Conte-nos sobre seu projeto e necessidades..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-card text-sm">
          {errorMessage || 'Erro ao enviar solicitação. Tente novamente.'}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary text-primary-foreground py-3 rounded-card font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : 'Solicitar Orçamento'}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Ao enviar, você concorda com nossa política de privacidade
      </p>
    </form>
  );
}
