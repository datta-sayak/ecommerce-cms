import Link from 'next/link';
import { Menu } from 'lucide-react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { getCategorySlug } from '@/utils/productRoutes';

type Props = {
  selectedCategorySlug?: string;
};

export default async function CategorySidebar({ selectedCategorySlug }: Props) {
  const payload = await getPayload({ config });
  
  const categories = await payload.find({
    collection: 'category',
    depth: 1,
    limit: 100,
    overrideAccess: true,
  });

  return (
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

          {categories.docs.map((category) => (
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
  );
}
