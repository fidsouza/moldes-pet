/**
 * Sobe todos os arquivos de conteúdo para o Vercel Blob e atualiza
 * data/content.json com as URLs públicas da CDN.
 *
 * Uso:
 *   1. Coloque a pasta "100 MOLDES PETS 2" dentro de ./content-source/
 *      (ou ajuste SRC_DIR abaixo / variável CONTENT_DIR).
 *   2. Tenha o token do Blob:  export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_xxx"
 *      (pegue em Vercel > Storage > seu Blob store > .env.local)
 *   3. npm install
 *   4. npm run upload
 *
 * Pode rodar várias vezes — arquivos já enviados (com blobUrl preenchido)
 * são pulados, a não ser que você use FORCE=1.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { put } from '@vercel/blob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC_DIR = process.env.CONTENT_DIR || path.join(ROOT, 'content-source', '100 MOLDES PETS 2');
const MANIFEST = path.join(ROOT, 'data', 'content.json');
const FORCE = process.env.FORCE === '1';

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error('\n❌ Faltou o token. Rode:  export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."\n');
  process.exit(1);
}
if (!fs.existsSync(SRC_DIR)) {
  console.error(`\n❌ Pasta de conteúdo não encontrada: ${SRC_DIR}\n   Coloque "100 MOLDES PETS 2" em ./content-source/ ou defina CONTENT_DIR.\n`);
  process.exit(1);
}

const ctype = (ext) => ({
  pdf: 'application/pdf', mp4: 'video/mp4', jpg: 'image/jpeg',
  jpeg: 'image/jpeg', png: 'image/png',
}[ext.toLowerCase()] || 'application/octet-stream');

const data = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
let done = 0, skipped = 0, failed = 0;
const total = data.categories.reduce((s, c) => s + c.items.length, 0);

for (const cat of data.categories) {
  for (const item of cat.items) {
    if (item.blobUrl && !FORCE) { skipped++; continue; }
    const local = path.join(SRC_DIR, item.file);
    if (!fs.existsSync(local)) { console.warn('  ⚠️  sem arquivo local:', item.file); failed++; continue; }
    try {
      const body = fs.readFileSync(local);
      const key = `moldes/${item.id}.${item.ext}`;
      const res = await put(key, body, {
        access: 'public',
        token,
        contentType: ctype(item.ext),
        addRandomSuffix: false,
        allowOverwrite: true,
      });
      item.blobUrl = res.url;
      done++;
      fs.writeFileSync(MANIFEST, JSON.stringify(data, null, 2)); // salva incremental
      console.log(`  ✅ ${done + skipped}/${total}  ${item.file}`);
    } catch (e) {
      failed++;
      console.error('  ❌', item.file, '-', e.message);
    }
  }
}

console.log(`\nConcluído: ${done} enviados, ${skipped} já existentes, ${failed} falhas.`);
console.log('content.json atualizado. Faça commit e push para publicar.\n');
