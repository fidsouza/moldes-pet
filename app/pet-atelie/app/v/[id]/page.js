import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllItems, getItem, formatSize } from '@/lib/content';
import { href } from '@/lib/appBase';

export function generateStaticParams() {
  return getAllItems().map((it) => ({ id: it.id }));
}

export default function ViewerPage({ params }) {
  const item = getItem(params.id);
  if (!item) notFound();
  const url = item.blobUrl;

  return (
    <main className="fade-in">
      <div className="page-head">
        <Link href={href(`/c/${item.categoryId}`)} className="back-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </Link>
        <div style={{ minWidth: 0 }}>
          <h2 style={{ fontSize: 17, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</h2>
          <div className="ph-sub">{item.categoryIcon} {item.categoryName}{item.sizeBytes ? ` · ${formatSize(item.sizeBytes)}` : ''}</div>
        </div>
      </div>

      {!url ? (
        <div className="empty" style={{ marginTop: 16 }}>
          <div className="e-ico">📦</div>
          <b>Arquivo ainda não publicado</b>
          Rode o upload para o Vercel Blob (<code>npm run upload</code>) para liberar este material.
        </div>
      ) : (
        <div className="viewer">
          <div className="viewer-frame">
            {item.kind === 'video' ? (
              <video src={url} controls playsInline preload="metadata" />
            ) : item.kind === 'image' ? (
              <iframe src={url} title={item.title} />
            ) : (
              <iframe src={`${url}#view=FitH`} title={item.title} />
            )}
          </div>
          <div className="viewer-actions">
            <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M21 14v7H3V3h7" /></svg>
              Abrir em tela cheia
            </a>
            <a className="btn btn-ghost" href={url} download>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>
              Baixar
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
