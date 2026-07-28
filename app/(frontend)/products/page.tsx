import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Image from 'next/image';

export default function ProductsPage() {
  const categories = [
    'All Bags',
    'Jute Shopping Bags (Large)',
    'Jute Promotional Bags',
    'Cotton Bags',
    'Jute Wine / Bottle Bags',
    'Jute Fruit & Vegetable Bag',
    'Jute Beach Bags',
    'Jute Drawstring Bags',
  ];

  const products = [
    {
      id: 1,
      name: 'Shopping Product',
      category: 'Jute Shopping Bag (Large)',
      code: 'SB-2W-04',
      size: '13.4 × W 20 × L 13.50 cm',
      image: '/images/img1.jpg',
    },
    {
      id: 2,
      name: 'Fruit & Vegetable Bag',
      category: 'Jute Fruit & Vegetable Bag',
      code: 'FV-2W-03',
      size: '19×20 cm W × 16×20 cm',
      image: '/images/img2.jpg',
    },
    {
      id: 3,
      name: 'Shopping Bag',
      category: 'Cotton Bags',
      code: 'CB-2W-04',
      size: '12 × 6 W 39 × 6 13 H',
      image: '/images/img3.jpg',
    },
    {
      id: 4,
      name: 'Shopping Product',
      category: 'Jute Shopping Bag (Large)',
      code: 'SB-2W-04',
      size: '13.4 × W 20 × L 13.50 cm',
      image: '/images/img1.jpg',
    },
    {
      id: 5,
      name: 'Fruit & Vegetable Bag',
      category: 'Jute Fruit & Vegetable Bag',
      code: 'FV-2W-03',
      size: '19×20 cm W × 16×20 cm',
      image: '/images/img2.jpg',
    },
    {
      id: 6,
      name: 'Shopping Bag',
      category: 'Cotton Bags',
      code: 'CB-2W-04',
      size: '12 × 6 W 39 × 6 13 H',
      image: '/images/img3.jpg',
    },
    {
      id: 7,
      name: 'Shopping Product',
      category: 'Jute Shopping Bag (Large)',
      code: 'SB-2W-04',
      size: '13.4 × W 20 × L 13.50 cm',
      image: '/images/img1.jpg',
    },
    {
      id: 8,
      name: 'Fruit & Vegetable Bag',
      category: 'Jute Fruit & Vegetable Bag',
      code: 'FV-2W-03',
      size: '19×20 cm W × 16×20 cm',
      image: '/images/img2.jpg',
    },
    {
      id: 9,
      name: 'Shopping Bag',
      category: 'Cotton Bags',
      code: 'CB-2W-04',
      size: '12 × 6 W 39 × 6 13 H',
      image: '/images/img3.jpg',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-12 bg-white border-2 border-bg-light">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
            Our Product <span className="text-primary-green">Catalogue</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted max-w-3xl mx-auto">
            Explore our wide range of eco-friendly, biodegradable bags. 
            From heavy-duty jute shoppers to soft cotton totes, find the perfect sustainable packaging for your brand.
          </p>
        </div>
      </section>

      <section className="py-12 relative">
        {/* Background Image */}
        <Image
          src="/background-detail.png"
          alt="background"
          fill
          className="pointer-events-none object-cover opacity-2"
          quality={75}
        />
        
        <div className="max-w-7xl z-10 relative mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Categories */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-white border-3 border-bg-light rounded-lg p-6 sticky top-8">
                <div className="flex items-center gap-2 mb-6">
                  <svg 
                    className="w-5 h-5 text-primary-green" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  </svg>
                  <h2 className="text-xl font-semibold text-primary-dark">Categories</h2>
                </div>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-lg transition ${
                          index === 0
                            ? 'bg-primary-green text-white font-semibold'
                            : 'text-gray-700 hover:bg-[#E9F0EC]'
                        }`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-primary-dark">All Bags</h2>
                <p className="text-text-muted">{products.length} Items</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border-3 border-bg-light rounded-2xl overflow-hidden hover:shadow-lg transition group"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {product.name}
                      </h3>
                      <div className="space-y-1 mb-6">
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Code:</span> {product.code}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Size:</span> {product.size}
                        </p>
                      </div>
                      <button className="w-full py-3 bg-bg-light/50 text-gray-700 font-medium rounded-lg hover:bg-[#E9F0EC] transition cursor-pointer">
                        View Product
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
