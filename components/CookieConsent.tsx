'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Cookie preferences state
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('vivoly-cookie-consent');
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (e) {
        console.error('Error loading cookie preferences:', e);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(necessaryOnly);
  };

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('vivoly-cookie-consent', JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);

    // Here you would initialize analytics/marketing scripts based on preferences
    if (prefs.analytics) {
      // Initialize Google Analytics
      console.log('Analytics enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing cookies
      console.log('Marketing cookies enabled');
    }
  };

  const handlePreferenceChange = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-primary shadow-2xl z-50 animate-in slide-in-from-bottom duration-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2 text-foreground">
                🍪 Utilizamos Cookies
              </h3>
              <p className="text-sm text-foreground leading-relaxed">
                Este site utiliza cookies para melhorar sua experiência de navegação,
                personalizar conteúdo e analisar nosso tráfego. Ao clicar em
                "Aceitar Todos", você concorda com o uso de todos os cookies.
                Você pode gerenciar suas preferências clicando em "Personalizar".
              </p>
              <div className="mt-2 flex gap-4 text-xs">
                <Link
                  href="/privacy"
                  className="text-primary hover:underline"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="/cookies"
                  className="text-primary hover:underline"
                >
                  Política de Cookies
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 border-2 border-border rounded-card text-sm font-medium hover:bg-muted transition"
              >
                Personalizar
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 border-2 border-primary text-primary rounded-card text-sm font-medium hover:bg-primary hover:text-primary-foreground transition"
              >
                Apenas Necessários
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-card text-sm font-medium hover:opacity-90 transition"
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border-2 border-border rounded-card max-w-2xl w-full max-h-[80vh] overflow-y-auto card-shadow-lg">
            {/* Header */}
            <div className="border-b border-border p-6 flex items-center justify-between sticky top-0 bg-background">
              <h2 className="text-2xl font-bold">Preferências de Cookies</h2>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 hover:bg-muted rounded-card transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <p className="text-muted-foreground">
                Usamos cookies para melhorar sua experiência em nosso site.
                Você pode escolher quais tipos de cookies deseja permitir.
              </p>

              {/* Necessary Cookies */}
              <div className="border border-border rounded-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Cookies Necessários</h3>
                  <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Sempre Ativo
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Esses cookies são essenciais para o funcionamento do site
                  e não podem ser desativados. Eles são geralmente definidos
                  apenas em resposta a ações feitas por você.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border border-border rounded-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Cookies de Análise</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => handlePreferenceChange('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Permitem-nos contar visitas e fontes de tráfego para que
                  possamos medir e melhorar o desempenho do nosso site.
                  Exemplo: Google Analytics.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="border border-border rounded-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Cookies de Marketing</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => handlePreferenceChange('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Usados para rastrear visitantes em sites. A intenção é
                  exibir anúncios relevantes e envolventes para o usuário
                  individual.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="border border-border rounded-card p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Cookies Funcionais</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={() => handlePreferenceChange('functional')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                  </label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Permitem que o site forneça funcionalidade e personalização
                  aprimoradas, como vídeos e chat ao vivo.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-border p-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-4 py-2 border-2 border-border rounded-card text-sm font-medium hover:bg-muted transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => savePreferences(preferences)}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-card text-sm font-medium hover:opacity-90 transition"
              >
                Salvar Preferências
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
