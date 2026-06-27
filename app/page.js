import Link from "next/link";

// Cada produto novo é só um item aqui + uma pasta em app/<slug>/
const products = [
  {
    slug: "pet-atelie",
    name: "Pet Ateliê — 100 Moldes de Roupas para Pets",
    desc: "100 moldes profissionais prontos para imprimir + 7 bônus para costurar, vender e lucrar.",
    price: "R$10",
  },
];

export const metadata = { title: "Nossos produtos" };

export default function Hub() {
  return (
    <main className="hub">
      <div className="wrap">
        <span className="eyebrow">Produtos digitais</span>
        <h1>Escolha seu produto</h1>
        <p className="hub-sub">Acesso imediato e vitalício. Pagamento único.</p>
        <div className="hub-grid">
          {products.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="hub-card">
              <span className="hub-price">{p.price}</span>
              <h2>{p.name}</h2>
              <p>{p.desc}</p>
              <span className="hub-cta">Ver oferta →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
