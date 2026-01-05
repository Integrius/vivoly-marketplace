'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <Image
              src="/logo.png"
              alt="Vivoly Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Início
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Serviços
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Sobre
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground hover:text-primary transition"
            >
              Contato
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="/services"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-card text-sm font-medium hover:opacity-90 transition"
          >
            Ver Serviços
          </Link>
        </div>
      </div>
    </header>
  );
}
