'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllItems } from '@/lib/content';
import { href } from '@/lib/appBase';
import ItemRow from '../components/ItemRow';

const ALL = getAllItems();

function norm(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export default function SearchPage() {
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const t = norm(q.trim());
    if (!t) return [];
    return ALL.filter((it) => norm(it.title).includes(t) || norm(it.categoryName).includes(t)).slice(0, 60);
  }, [q]);

  return (
    <main className="fade-in">
      <div className="page-head">
        <Link href={href('')} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </Link>
        <div><h2>Buscar molde</h2><div className="ph-sub">{ALL.length} arquivos disponíveis</div></div>
      </div>

      <div className="search-wrap" style={{ marginTop: 10 }}>
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
        <input
          autoFocus
          className="search-input"
          placeholder="Ex.: vestido, casaco, bandana…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>

      {q.trim() === '' ? (
        <div className="empty" style={{ marginTop: 18 }}>
          <div className="e-ico">🔎</div>
          <b>Digite para buscar</b>
          Encontre qualquer molde pelo nome ou categoria.
        </div>
      ) : results.length === 0 ? (
        <div className="empty" style={{ marginTop: 18 }}>
          <div className="e-ico">😕</div>
          <b>Nada encontrado</b>
          Tente outro termo, como “capa” ou “gato”.
        </div>
      ) : (
        <div className="item-list" style={{ marginTop: 16 }}>
          {results.map((it) => <ItemRow key={it.id} item={it} />)}
        </div>
      )}
    </main>
  );
}
