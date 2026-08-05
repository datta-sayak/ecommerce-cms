export function getProductSlug(productCode: string) {
  // Convert to lowercase for URL slugs, preserve original structure
  const normalized = String(productCode).trim().toLowerCase();
  // Just encode it - preserves hyphens, spaces become %20
  return encodeURIComponent(normalized);
}

export function getProductCodeFromSlug(slug: string) {
  // Simply decode - the original structure is preserved
  return decodeURIComponent(slug);
}

export function getCategorySlug(categoryName: string) {
  // Normalize: lowercase, trim, replace spaces with hyphens, then encode
  return encodeURIComponent(String(categoryName).trim().toLowerCase().replace(/\s+/g, '-'));
}

export function getCategoryNameFromSlug(slug: string) {
  const decodedSlug = decodeURIComponent(slug);
  return decodedSlug.replace(/-/g, ' ');
}

export function normalizeCategorySlug(slug: string) {
  const decoded = decodeURIComponent(slug);
  return decoded.trim().toLowerCase();
}
