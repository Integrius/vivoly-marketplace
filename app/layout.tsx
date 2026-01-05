import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vivoly - Soluções de Inteligência Artificial e SaaS Personalizados | IA para Negócios",
  description: "Desenvolvemos SaaS com Inteligência Artificial que transformam negócios. Especialistas em IA desde 2025. CRM Integrius com IA para gestão imobiliária. Alta performance e confiabilidade garantidas.",
  keywords: [
    "inteligência artificial",
    "IA para empresas",
    "SaaS personalizado",
    "desenvolvimento IA",
    "CRM com IA",
    "CRM imobiliário",
    "Integrius",
    "automação inteligente",
    "soluções AI",
    "machine learning",
    "software com IA",
    "transformação digital",
    "IA Brasil"
  ],
  openGraph: {
    title: "Vivoly - Soluções de IA que Transformam Negócios",
    description: "Especialistas em desenvolvimento de SaaS com Inteligência Artificial. Conheça o Integrius CRM e nossas soluções personalizadas.",
    type: "website",
    locale: "pt_BR",
    url: "https://vivoly.com.br",
    siteName: "Vivoly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivoly - Inteligência Artificial para Negócios",
    description: "Desenvolvemos SaaS personalizados com IA. Alta performance, confiabilidade e resultados comprovados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://vivoly.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
