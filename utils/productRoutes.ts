export function getProductSlug(productCode: string) {
  return encodeURIComponent(String(productCode).trim().replace(/\s+/g, '-'));
}

export function getProductCodeFromSlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  return decodedSlug.replace(/-/g, ' ');
}

export function getCategorySlug(categoryName: string) {
  return encodeURIComponent(String(categoryName).trim().toLowerCase().replace(/\s+/g, '-'));
}

export function getCategoryNameFromSlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  return decodedSlug.replace(/-/g, ' ');
}
