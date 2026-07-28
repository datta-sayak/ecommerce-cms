import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Menu } from 'lucide-react';
import { getPayload, type Where } from 'payload';
import config from '@/payload.config';
import type { Category, Media, Product } from '@/payload-types';
import { getProductSlug, getCategorySlug, getCategoryNameFromSlug } from '@/utils/productRoutes';

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

function getMediaURL(media: number | Media | null | undefined, fallback = '/assets/bag.png') {
  return typeof media === 'object' && media?.url ? media.url : fallback;
}

function getCategoryName(category: number | Category) {
  return typeof category === 'object' ? category.name : 'Product';
}

async function getCategories() {
  const payload = await getPayload({ config });

  const categories = await payload.find({
    collection: 'category',
    depth: 1,
    overrideAccess: true,
  });

  return categories.docs;
}

async function getProducts(categorySlug?: string) {
  const payload = await getPayload({ config });
  let where: Where = {
    active: {
      equals: true,
    },
  };

  if (categorySlug) {
    // Get all categories and find the one matching the slug
    const categories = await payload.find({
      collection: 'category',
      limit: 100,
      overrideAccess: true,
    });

    const matchedCategory = categories.docs.find(
      (cat) => getCategorySlug(cat.name) === categorySlug
    );

    if (matchedCategory) {
      where = {
        and: [
          {
            active: {
              equals: true,
            },
          },
          {
            category: {
              equals: matchedCategory.id,
            },
          },
        ],
      };
    }
  }

  const products = await payload.find({
    collection: 'products',
    where,
    depth: 2,
    limit: 100,
    overrideAccess: true,
    sort: '-createdAt',
  });

  return products.docs;
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

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedCategorySlug = resolvedSearchParams?.category;
  const [categories, products] = await Promise.all([getCategories(), getProducts(selectedCategorySlug)]);
  
  const activeCategoryName = selectedCategorySlug
    ? getCategoryNameFromSlug(selectedCategorySlug)
    : 'All Bags';

  return (
    <main className="min-h-screen">
      <Header />

      <section className="border-2 border-bg-light bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-12">
          <h1 className="mb-4 text-3xl font-bold text-primary-dark md:text-4xl">
            Our Product <span className="text-primary-green">Catalogue</span>
          </h1>
          <p className="mx-auto max-w-3xl text-base text-text-muted md:text-lg">
            Explore our wide range of eco-friendly, biodegradable bags. From heavy-duty jute
            shoppers to soft cotton totes, find the perfect sustainable packaging for your brand.
          </p>
        </div>
      </section>

      <section className="relative py-12">
        <Image
          src="/background-detail.png"
          alt="background"
          fill
          className="pointer-events-none object-cover opacity-2"
          quality={75}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row">
            <aside className="shrink-0 lg:w-64">
              <div className="sticky top-8 rounded-lg border-3 border-bg-light bg-white p-6">
                <div className="mb-6 flex items-center gap-2">
                  <Menu className="h-5 w-5 text-primary-green" />
                  <h2 className="text-xl font-semibold text-primary-dark">Categories</h2>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/products"
                      className={`block rounded-lg px-4 py-2 transition ${
                        !selectedCategorySlug
                          ? 'bg-primary-green font-semibold text-white'
                          : 'text-gray-700 hover:bg-[#E9F0EC]'
                      }`}
                    >
                      All Bags
                    </Link>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/products?category=${getCategorySlug(category.name)}`}
                        className={`block rounded-lg px-4 py-2 transition ${
                          getCategorySlug(category.name) === selectedCategorySlug
                            ? 'bg-primary-green font-semibold text-white'
                            : 'text-gray-700 hover:bg-[#E9F0EC]'
                        }`}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-primary-dark">{activeCategoryName}</h2>
                <p className="text-text-muted">{products.length} Items</p>
              </div>

              {products.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
