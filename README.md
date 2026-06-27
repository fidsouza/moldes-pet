# Pet Ateliê — Landing page (Next.js + React)

Página de vendas dos 100 Moldes Profissionais de Roupas para Pets, pronta para rodar na Vercel.

> **Obs.:** a pasta já vem com um `node_modules/` e `.next/` gerados no ambiente de validação (Linux). Antes de rodar no seu Mac, apague essas duas pastas e rode `npm install` de novo para baixar os binários certos. No deploy pela Vercel isso não importa (elas são ignoradas pelo `.gitignore` e a Vercel instala tudo do zero).

## Rodar localmente

```bash
rm -rf node_modules .next   # só na primeira vez, p/ limpar o build do ambiente de validação
npm install
npm run dev
```

Abra http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Em https://vercel.com → **Add New → Project** → importe o repositório.
3. A Vercel detecta Next.js automaticamente. Clique em **Deploy**. Pronto.

(Alternativa por terminal: instale a CLI com `npm i -g vercel` e rode `vercel` dentro desta pasta.)

## Fotos da galeria

Coloque as 4 fotos em `public/imagens/` com EXATAMENTE estes nomes:

- `cachorro-roupa.jpg`
- `peca-pronta.jpg`
- `gato-vestido.jpg`
- `processo-costura.jpg`

## Personalizar

- **Link de checkout:** edite a constante `CHECKOUT_URL` no topo de `app/page.js`.
- **Textos, preço e bônus:** todos estão em arrays no início de `app/page.js`.
- **Cores e estilos:** em `app/globals.css` (variáveis no `:root`).

## Estrutura

```
app/
  layout.js     # <head>, fontes, metadados
  page.js       # toda a landing page (componente React)
  globals.css   # estilos
public/
  imagens/      # fotos da galeria
```
