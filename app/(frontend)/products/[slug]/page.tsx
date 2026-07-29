import Header from '../../sections/Header';
import Footer from '../../sections/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import config from '@/payload.config';
import type { Category, Media, Product } from '@/payload-types';
import { getProductCodeFromSlug, getProductSlug, getCategorySlug } from '@/utils/productRoutes';
import ProductTabs from '../_components/ProductTabs';
import ProductGallery from '../_components/ProductGallery';

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
  const relatedProducts = await getRelatedProducts(product);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-white">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-12">
          <Link
            href="/products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-black transition hover:opacity-70"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start gap-12">
            {/* Left side: Sticky Image */}
            <div className="lg:w-1/2 lg:sticky lg:top-24">
              <ProductGallery images={gallery} productName={product.name} />
            </div>

            {/* Right side: Product Info */}
            <div className="lg:w-1/2">
              <h1 className="mb-2 text-3xl font-bold leading-tight text-black md:text-5xl">
                {product.name}
              </h1>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                {product.shortDescription}
              </p>
              
              <ProductTabs 
                description={product.longDescription || product.shortDescription} 
                highlights={product.productHighlights}
                productName={product.name}
                specifications={{
                  code: product.specifications.code,
                  fabric: product.specifications.fabric,
                  height: product.specifications.height,
                  width: product.specifications.width,
                  weight: product.specifications.weight,
                  unit: product.specifications.unit,
                  category: category?.name,
                }} 
              />
            </div>
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
                className="text-sm font-semibold text-black transition hover:opacity-70"
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
                  <h3 className="font-bold text-black">{relatedProduct.name}</h3>
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
