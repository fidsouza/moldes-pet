import "./globals.css";

export const metadata = {
  title: "Pet Ateliê — 100 Moldes Profissionais de Roupas para Pets",
  description:
    "Costure roupas de pet com acabamento profissional e transforme sua costura em renda. 100 moldes prontos para imprimir + 7 bônus, por apenas R$10.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
