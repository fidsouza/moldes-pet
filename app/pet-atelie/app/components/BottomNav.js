'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { APP_BASE, href } from '@/lib/appBase';

function Icon({ name }) {
  const c = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'home') return (<svg {...c}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>);
  if (name === 'search') return (<svg {...c}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>);
  return (<svg {...c}><path d="M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7" /><path d="M2 7h20v5H2z" /><path d="M12 22V7" /><path d="M12 7C12 7 11 3 8 3a2.5 2.5 0 0 0 0 5h4" /><path d="M12 7c0 0 1-4 4-4a2.5 2.5 0 0 1 0 5h-4" /></svg>);
}

export default function BottomNav() {
  const path = usePathname();
  const is = (p) => (p === '' ? path === APP_BASE : path.startsWith(href(p)));
  return (
    <nav className="bottom-nav">
      <Link href={href('')} className={is('') ? 'active' : ''}><Icon name="home" />Início</Link>
      <Link href={href('/buscar')} className={is('/buscar') ? 'active' : ''}><Icon name="search" />Buscar</Link>
      <Link href={href('/bonus')} className={is('/bonus') ? 'active' : ''}><Icon name="gift" />Bônus</Link>
    </nav>
  );
}
