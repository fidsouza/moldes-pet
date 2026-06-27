import Link from 'next/link';
import { formatSize } from '@/lib/content';
import { href } from '@/lib/appBase';

const LABEL = { pdf: 'PDF', video: 'Vídeo', image: 'Imagem' };

export default function ItemRow({ item }) {
  const thumb = item.kind === 'pdf' ? 'PDF' : item.kind === 'video' ? '▶' : '🖼';
  return (
    <Link href={href(`/v/${item.id}`)} className="item-row">
      <div className={`item-thumb ${item.kind}`}>{thumb}</div>
      <div className="item-main">
        <div className="item-title">{item.title}</div>
        <div className="item-meta">
          {LABEL[item.kind] || 'Arquivo'}
          {item.sizeBytes ? ` · ${formatSize(item.sizeBytes)}` : ''}
          {item.categoryName ? ` · ${item.categoryName}` : ''}
        </div>
      </div>
      <svg className="item-chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    </Link>
  );
}
