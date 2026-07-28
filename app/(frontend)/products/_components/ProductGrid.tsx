import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { getPayload, type Where } from 'payload';
import config from '@/payload.config';
import type { Category, Media, Product } from '@/payload-types';
import { getProductSlug, getCategorySlug, getCategoryNameFromSlug } from '@/utils/productRoutes';

type Props = {
  selectedCategorySlug?: string;
};

function getMediaURL(media: number | Media | null | undefined, fallback = '/assets/bag.png') {
  return typeof media === 'object' && media?.url ? media.url : fallback;
}

function getCategoryName(category: number | Category) {
  return typeof category === 'object' ? category.name : 'Product';
}

function ProductCard({ product }: { product: Product }) {
  const categoryName = getCategoryName(product.category);
  const imageUrl = getMediaURL(product.coverImage);
  const productHref = `/products/${getProductSlug(product.specifications.code)}`;

  return (
    <Link
      href={productHref}
      className="group overflow-hidden rounded-lg border-3 border-bg-light bg-white transition hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="mb-2 text-sm text-gray-500">{categoryName}</p>
        <h3 className="mb-4 text-xl font-bold text-gray-900">{product.name}</h3>

        <div className="mb-6 space-y-1">
          {product.specifications.code && (
            <p className="text-sm text-gray-700">
              <span className="font-medium">Code:</span> {product.specifications.code}
            </p>
          )}
          <p className="text-sm text-gray-700">
            <span className="font-medium">Size:</span> H {product.specifications.height} x W{' '}
            {product.specifications.width} {product.specifications.unit}
          </p>
          {product.specifications.fabric && (
            <p className="text-sm text-gray-700">
              <span className="font-medium">Fabric:</span> {product.specifications.fabric}
            </p>
          )}
        </div>

        <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-bg-light/50 py-3 font-medium text-gray-700 transition group-hover:bg-[#E9F0EC]">
          View Product
          <ChevronRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

// Async Server Component — suspends independently while fetching products
export default async function ProductGrid({ selectedCategorySlug }: Props) {
  const payload = await getPayload({ config });
  let where: Where = { active: { equals: true } };

  if (selectedCategorySlug) {
    const categories = await payload.find({
      collection: 'category',
      limit: 100,
      overrideAccess: true,
    });
    
    const matched = categories.docs.find(
      (cat) => getCategorySlug(cat.name) === selectedCategorySlug,
    );

    if (matched) {
      where = {
        and: [
          { active: { equals: true } },
          { category: { equals: matched.id } },
        ],
      };
    }
  }

  const products = await payload.find({
    collection: 'products',
    where,
    depth: 2,
    limit: 100,
    sort: '-createdAt',
    overrideAccess: true,
  });

  const activeCategoryName = selectedCategorySlug
    ? getCategoryNameFromSlug(selectedCategorySlug)
    : 'All Bags';

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-primary-dark capitalize">
          {activeCategoryName}
        </h2>
        <p className="text-text-muted">{products.docs.length} Items</p>
      </div>

      {products.docs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.docs.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border-3 border-bg-light bg-white p-10 text-center">
          <h3 className="mb-2 text-xl font-semibold text-primary-dark">No products found</h3>
          <p className="text-text-muted">
            This category does not have active products yet. Please check back soon.
          </p>
        </div>
      )}
    </div>
  );
}
