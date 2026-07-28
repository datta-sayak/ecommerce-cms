import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronRight, Leaf, Package, Ruler } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Category, Media, Product } from '@/payload-types';
import { getProductCodeFromSlug, getProductSlug, getCategorySlug } from '@/utils/productRoutes';

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getMedia(media: number | Media | null | undefined) {
  return typeof media === 'object' ? media : null;
}

function getMediaURL(media: number | Media | null | undefined, fallback = '/assets/bag.png') {
  return getMedia(media)?.url || fallback;
}

function getCategory(category: number | Category | null | undefined) {
  return typeof category === 'object' ? category : null;
}

function getGallery(product: Product) {
  const mediaItems = [product.coverImage, ...(product.gallery || [])]
    .map((item) => getMedia(item))
    .filter((item): item is Media => Boolean(item?.url));
  const seen = new Set<number>();

  return mediaItems.filter((item) => {
    if (seen.has(item.id)) {
      return false;
    }

    seen.add(item.id);
    return true;
  });
}

async function getProduct(slug: string) {
  const payload = await getPayload({ config });
  
  try {
    const productCode = getProductCodeFromSlug(slug);

    const result = await payload.find({
      collection: 'products',
      where: {
        'specifications.code': { equals: productCode },
      },
      depth: 2,
      limit: 1,
      overrideAccess: true,
    });

    const product = result.docs[0];
    if (!product || !product.active) {
      return null;
    }

    return product;
  } catch {
    return null;
  }
}

async function getRelatedProducts(product: Product) {
  const category = getCategory(product.category);

  if (!category) {
    return [];
  }

  const payload = await getPayload({ config });
  const result = await payload.find({
    collection: 'products',
    where: {
      and: [
        { active: { equals: true } },
        { category: { equals: category.id } },
        { id: { not_equals: product.id } },
      ],
    },
    depth: 2,
    limit: 3,
    overrideAccess: true,
  });

  return result.docs;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Soujata Exim',
    };
  }

  return {
    title: `${product.name} | Soujata Exim`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://soujataexim.com/products/${getProductSlug(product.specifications.code)}`,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const category = getCategory(product.category);
  const gallery = getGallery(product);
  const heroImage = gallery[0];
  const relatedProducts = await getRelatedProducts(product);
  const dimensions = `H ${product.specifications.height} x W ${product.specifications.width} ${product.specifications.unit}`;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden border-b border-bg-light bg-white">
        <Image
          src="/background-detail.png"
          alt="background"
          fill
          className="pointer-events-none object-cover opacity-2"
          priority
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary-green transition hover:text-primary-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border-3 border-bg-light bg-gray-100">
                <Image
                  src={heroImage?.url || getMediaURL(product.coverImage)}
                  alt={heroImage?.alt || product.name}
                  fill
                  sizes="(min-width: 1024px) 52vw, 92vw"
                  className="object-cover"
                  priority
                />
              </div>

              {gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {gallery.slice(1, 5).map((image) => (
                    <div
                      key={image.id}
                      className="relative aspect-square overflow-hidden rounded-lg border border-bg-light bg-gray-100"
                    >
                      <Image
                        src={image.url || '/assets/bag.png'}
                        alt={image.alt || product.name}
                        fill
                        sizes="(min-width: 1024px) 12vw, 24vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                {category && (
                  <Link
                    href={`/products?category=${getCategorySlug(category.name)}`}
                    className="rounded-full bg-[#E9F0EC] px-4 py-2 text-sm font-semibold text-primary-green transition hover:bg-primary-green hover:text-white"
                  >
                    {category.name}
                  </Link>
                )}
                {product.featured && (
                  <span className="rounded-full bg-primary-dark px-4 py-2 text-sm font-semibold text-white">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight text-primary-dark md:text-5xl">
                {product.name}
              </h1>
              <p className="mb-8 text-base leading-7 text-text-muted md:text-lg">
                {product.shortDescription}
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                {product.specifications.code && (
                  <div className="rounded-lg border border-bg-light bg-white p-4">
                    <Package className="mb-3 h-5 w-5 text-primary-green" />
                    <p className="text-xs font-semibold uppercase text-gray-500">Code</p>
                    <p className="mt-1 font-bold text-primary-dark">
                      {product.specifications.code}
                    </p>
                  </div>
                )}
                <div className="rounded-lg border border-bg-light bg-white p-4">
                  <Ruler className="mb-3 h-5 w-5 text-primary-green" />
                  <p className="text-xs font-semibold uppercase text-gray-500">Size</p>
                  <p className="mt-1 font-bold text-primary-dark">{dimensions}</p>
                </div>
                {product.specifications.fabric && (
                  <div className="rounded-lg border border-bg-light bg-white p-4">
                    <Leaf className="mb-3 h-5 w-5 text-primary-green" />
                    <p className="text-xs font-semibold uppercase text-gray-500">Fabric</p>
                    <p className="mt-1 font-bold text-primary-dark">
                      {product.specifications.fabric}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-green px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Enquire About This Product
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-lg border border-primary-dark px-6 py-3 font-semibold text-primary-dark transition hover:bg-primary-dark hover:text-white"
                >
                  Browse Catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-primary-dark">Product Details</h2>
            <div className="space-y-5 text-base leading-7 text-text-muted">
              <p>{product.longDescription || product.shortDescription}</p>
              {category?.description && <p>{category.description}</p>}
            </div>
          </div>

          <aside className="rounded-lg border border-bg-light bg-[#F8FAF9] p-6">
            <h2 className="mb-5 text-xl font-bold text-primary-dark">Specifications</h2>
            <dl className="space-y-4">
              {product.specifications.code && (
                <div className="flex items-start justify-between gap-4 border-b border-bg-light pb-3">
                  <dt className="text-sm text-gray-500">Product Code</dt>
                  <dd className="text-right text-sm font-semibold text-primary-dark">
                    {product.specifications.code}
                  </dd>
                </div>
              )}
              {product.specifications.fabric && (
                <div className="flex items-start justify-between gap-4 border-b border-bg-light pb-3">
                  <dt className="text-sm text-gray-500">Fabric</dt>
                  <dd className="text-right text-sm font-semibold text-primary-dark">
                    {product.specifications.fabric}
                  </dd>
                </div>
              )}
              <div className="flex items-start justify-between gap-4 border-b border-bg-light pb-3">
                <dt className="text-sm text-gray-500">Height</dt>
                <dd className="text-right text-sm font-semibold text-primary-dark">
                  {product.specifications.height} {product.specifications.unit}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4 border-b border-bg-light pb-3">
                <dt className="text-sm text-gray-500">Width</dt>
                <dd className="text-right text-sm font-semibold text-primary-dark">
                  {product.specifications.width} {product.specifications.unit}
                </dd>
              </div>
              {category && (
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-sm text-gray-500">Category</dt>
                  <dd className="text-right text-sm font-semibold text-primary-dark">
                    {category.name}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-[#F8FAF9] py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold text-primary-dark">Built For Responsible Brands</h2>
              <p className="mt-2 max-w-2xl text-text-muted">
                Practical bag construction with sustainable materials, export-ready finishing, and
                flexible options for retail and promotional use.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {['Eco-friendly material choices', 'Custom branding available', 'Bulk export support'].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-green" />
                  <span className="font-semibold text-primary-dark">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-primary-dark">Related Products</h2>
            {category && (
              <Link
                href={`/products?category=${getCategorySlug(category.name)}`}
                className="text-sm font-semibold text-primary-green transition hover:text-primary-dark"
              >
                View Category
              </Link>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                href={`/products/${getProductSlug(relatedProduct.specifications.code)}`}
                className="group overflow-hidden rounded-lg border border-bg-light bg-white transition hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <Image
                    src={getMediaURL(relatedProduct.coverImage)}
                    alt={relatedProduct.name}
                    fill
                    sizes="(min-width: 768px) 30vw, 92vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="mb-2 text-sm text-gray-500">
                    {getCategory(relatedProduct.category)?.name || 'Product'}
                  </p>
                  <h3 className="font-bold text-primary-dark">{relatedProduct.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
