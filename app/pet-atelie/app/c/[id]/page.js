import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategories, getCategory } from '@/lib/content';
import { href } from '@/lib/appBase';
import ItemRow from '../../components/ItemRow';

export function generateStaticParams() {
  return getCategories().map((c) => ({ id: c.id }));
}

export default function CategoryPage({ params }) {
  const cat = getCategory(params.id);
  if (!cat) notFound();
  return (
    <main className="fade-in">
      <div className="page-head">
        <Link href={href('')} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </Link>
        <div className="ph-ico">{cat.icon}</div>
        <div>
          <h2>{cat.name}</h2>
          <div className="ph-sub">{cat.count} {cat.count === 1 ? 'item' : 'itens'}</div>
        </div>
      </div>
      <div className="item-list" style={{ marginTop: 8 }}>
        {cat.items.map((it) => <ItemRow key={it.id} item={it} />)}
      </div>
    </main>
  );
}
