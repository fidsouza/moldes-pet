// Prefixo de rota do infoapp (área de membros).
// A landing fica em /pet-atelie e o app em /pet-atelie/app.
// Se mudar o slug do produto, altere só aqui.
export const APP_BASE = '/pet-atelie/app';

// Monta uma URL interna do app a partir de um caminho relativo.
// href('') -> /pet-atelie/app   |   href('/buscar') -> /pet-atelie/app/buscar
export function href(path = '') {
  if (!path || path === '/') return APP_BASE;
  return APP_BASE + (path.startsWith('/') ? path : '/' + path);
}
