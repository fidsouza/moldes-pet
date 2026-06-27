// Configuração da landing Pet Ateliê (usada por server e client components).

// ID do Pixel do Facebook (Meta).
export const PIXEL_ID = "2141924806651822";

// Link do checkout (Hotmart, Kiwify, etc.). Configure NEXT_PUBLIC_CHECKOUT_URL na Vercel
// (Project → Settings → Environment Variables). Enquanto não definida, usa "#".
export const CHECKOUT_URL = process.env.NEXT_PUBLIC_CHECKOUT_URL || "#";
