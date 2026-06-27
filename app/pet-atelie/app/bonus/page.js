import Link from 'next/link';
import { getCategories } from '@/lib/content';
import { href } from '@/lib/appBase';
import ItemRow from '../components/ItemRow';

export default function BonusPage() {
  const cats = getCategories().filter((c) => c.type === 'bonus' || c.type === 'video');
  return (
    <main className="fade-in">
      <div className="page-head">
        <Link href={href('')} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </Link>
        <div className="ph-ico">🎁</div>
        <div><h2>Bônus & Aulas</h2><div className="ph-sub">Materiais extras do seu acesso</div></div>
      </div>
      {cats.map((c) => (
        <section className="section" key={c.id}>
          <div className="section-title">{c.icon} {c.name}</div>
          <div className="item-list">
            {c.items.map((it) => <ItemRow key={it.id} item={it} />)}
          </div>
        </section>
      ))}
    </main>
  );
}
