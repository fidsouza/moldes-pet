import Link from 'next/link';
import { href } from '@/lib/appBase';

export default function NotFound() {
  return (
    <main className="fade-in">
      <div className="empty" style={{ marginTop: 60 }}>
        <div className="e-ico">🐾</div>
        <b>Página não encontrada</b>
        O conteúdo que você procura não existe.
        <div style={{ marginTop: 18 }}>
          <Link href={href('')} className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 22px' }}>Voltar ao início</Link>
        </div>
      </div>
    </main>
  );
}
