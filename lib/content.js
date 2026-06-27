import data from '@/data/content.json';

export function getContent() {
  return data;
}

export function getCategories() {
  return data.categories;
}

export function getCategory(id) {
  return data.categories.find((c) => c.id === id) || null;
}

export function getAllItems() {
  return data.categories.flatMap((c) =>
    c.items.map((it) => ({ ...it, categoryId: c.id, categoryName: c.name, categoryIcon: c.icon }))
  );
}

export function getItem(id) {
  for (const c of data.categories) {
    const it = c.items.find((x) => x.id === id);
    if (it) return { ...it, categoryId: c.id, categoryName: c.name, categoryIcon: c.icon };
  }
  return null;
}

export function getProduct() {
  return data.product;
}

export function formatSize(bytes) {
  if (!bytes) return '';
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return mb.toFixed(1) + ' MB';
  return Math.max(1, Math.round(bytes / 1024)) + ' KB';
}
