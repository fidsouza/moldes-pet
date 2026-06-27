import './infoapp.css';
import PwaRegister from './pwa-register';
import BottomNav from './components/BottomNav';

export const metadata = {
  title: '100 Moldes Pets — Biblioteca de Moldes',
  description: 'Sua biblioteca completa de moldes profissionais de roupas para pets. Costure, venda e lucre.',
  manifest: '/pet-atelie/app/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '100 Moldes Pets',
  },
  icons: {
    icon: '/icons/icon-192.png',
    apple: '/icons/icon-192.png',
  },
};

export const viewport = {
  themeColor: '#008118',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function AppLayout({ children }) {
  return (
    <div className="infoapp">
      <div className="app-shell">{children}</div>
      <BottomNav />
      <PwaRegister />
    </div>
  );
}
