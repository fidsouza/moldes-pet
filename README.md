# Pet Ateliê — App único (landing + área de membros)

Um **único app Next.js**, um **único domínio**. A landing de vendas e o
infoapp (área de membros / PWA) agora vivem juntos:

| URL | O que é |
|-----|---------|
| `seu-dominio.com.br/` | Hub (lista de produtos) |
| `seu-dominio.com.br/pet-atelie` | **Landing page** de vendas |
| `seu-dominio.com.br/pet-atelie/app` | **Infoapp** — biblioteca de moldes (PWA) |
| `seu-dominio.com.br/pet-atelie/app/buscar` | Busca de moldes |
| `seu-dominio.com.br/pet-atelie/app/bonus` | Bônus & aulas |
| `seu-dominio.com.br/pet-atelie/app/c/[id]` | Categoria |
| `seu-dominio.com.br/pet-atelie/app/v/[id]` | Visualizador do arquivo |

A landing tem um link discreto no rodapé ("Já é aluno? Acessar a área de
membros") que leva para `/pet-atelie/app`.

## Estrutura

```
app/
  layout.js            layout raiz (html/body + fontes da landing)
  globals.css          estilos da LANDING (globais)
  page.js              hub multi-produto  (/)
  pet-atelie/
    page.js            landing de vendas   (/pet-atelie)
    StickyCta.jsx
    app/               INFOAPP aninhado    (/pet-atelie/app/*)
      layout.js        layout do app (wrapper .infoapp + BottomNav + PWA)
      infoapp.css      estilos do infoapp ISOLADOS sob .infoapp
      page.js          início do app
      buscar/ bonus/ c/[id]/ v/[id]/   rotas internas
      components/      BottomNav, ItemRow
      pwa-register.js  registra o service worker
lib/
  content.js           índice do conteúdo (lê data/content.json)
  appBase.js           APP_BASE = '/pet-atelie/app' + helper href()
data/content.json      categorias, itens e URLs dos arquivos no Vercel Blob
public/
  icons/               ícones do PWA
  pet-atelie/app/      manifest.webmanifest + sw.js (escopo /pet-atelie/app)
scripts/upload-to-blob.mjs   sobe PDFs/vídeos e preenche as URLs
```

### Por que o CSS não conflita

A landing e o infoapp tinham `globals.css` próprios com classes de mesmo nome
(`.btn`, `.hero`, `.cat-grid`…) e variáveis em conflito. Solução:

- `app/globals.css` (landing) continua **global**.
- `app/pet-atelie/app/infoapp.css` tem **todos os seletores prefixados com
  `.infoapp`**, e o infoapp inteiro é renderizado dentro de
  `<div className="infoapp">`. Assim os estilos do app só valem dentro dele.

### Mudar o slug do produto

Se um dia o produto não for mais `pet-atelie`, ajuste em **dois lugares**:
1. `lib/appBase.js` → `APP_BASE`
2. nomes das pastas `app/pet-atelie/` e `public/pet-atelie/`
3. `start_url`/`scope` em `public/pet-atelie/app/manifest.webmanifest` e
   `BASE` em `public/pet-atelie/app/sw.js`, e o caminho em `pwa-register.js`.

## Rodar localmente

```bash
rm -rf node_modules .next   # só na 1ª vez, p/ limpar build de outro ambiente
npm install
npm run dev                 # http://localhost:3000
```

## Publicar os arquivos (PDFs/vídeos) no Vercel Blob

```bash
# 1. coloque a pasta "100 MOLDES PETS 2" em ./content-source/
# 2. export BLOB_READ_WRITE_TOKEN="vercel_blob_rw_xxx"
npm run upload
```

## Deploy (Vercel)

Suba o repositório e importe na Vercel — `npm run build` e pronto. As pastas
`node_modules/` e `.next/` são ignoradas pelo `.gitignore`.
