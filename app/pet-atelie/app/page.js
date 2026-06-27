import Link from 'next/link';
import { getCategories, getProduct } from '@/lib/content';
import { href } from '@/lib/appBase';

export default function Home() {
  const product = getProduct();
  const cats = getCategories();
  const video = cats.filter((c) => c.type === 'video');
  const moldes = cats.filter((c) => c.type === 'moldes');
  const bonus = cats.filter((c) => c.type === 'bonus');

  return (
    <main className="fade-in">
      <header className="hero">
        <div className="eyebrow">Biblioteca Digital</div>
        <h1>{product.title}</h1>
        <p>{product.tagline}</p>
        <div className="stats">
          <div className="stat"><b>{product.moldeCount}</b><span>Moldes</span></div>
          <div className="stat"><b>{moldes.length}</b><span>Categorias</span></div>
          <div className="stat"><b>7+</b><span>Bônus</span></div>
        </div>
      </header>

      <Link href={href('/buscar')} className="search-wrap" style={{ display: 'block' }}>
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
        <div className="search-input" style={{ color: 'var(--muted)', paddingTop: 16, paddingBottom: 16 }}>Buscar um molde…</div>
      </Link>

      {video.length > 0 && (
        <section className="section">
          <div className="section-title">Comece por aqui</div>
          <div className="cat-grid">
            {video.map((c) => <CatCard key={c.id} c={c} />)}
            {bonus.map((c) => <CatCard key={c.id} c={c} />)}
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-title">Moldes por categoria</div>
        <div className="cat-grid">
          {moldes.map((c) => <CatCard key={c.id} c={c} />)}
        </div>
      </section>
    </main>
  );
}

function CatCard({ c }) {
  return (
    <Link href={href(`/c/${c.id}`)} className="cat-card">
      <div className="cat-ico">{c.icon}</div>
      <div className="cat-name">{c.name}</div>
      <div className="cat-count"><b>{c.count}</b> {c.count === 1 ? 'item' : 'itens'}</div>
    </Link>
  );
}
