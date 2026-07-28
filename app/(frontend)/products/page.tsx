import Image from 'next/image';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import CategorySidebar from './_components/CategorySidebar';
import ProductGrid from './_components/ProductGrid';

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const selectedCategorySlug = resolvedSearchParams?.category;

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
            {/* Reads categories from Zustand store */}
            <CategorySidebar selectedCategorySlug={selectedCategorySlug} />

            {/* Reads & filters products from Zustand store */}
            <ProductGrid selectedCategorySlug={selectedCategorySlug} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
