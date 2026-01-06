import Header from '@/components/marketplace/Header';
import Footer from '@/components/marketplace/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
