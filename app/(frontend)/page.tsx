import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import ProductCategories from './sections/ProductCategories';
import CraftingSection from './sections/CraftingSection';
import PopularBags from './sections/PopularBags';
import Certifications from './sections/Certifications';
import BehindOurCraft from './sections/BehindOurCraft';
import Testimonials from './sections/Testimonials';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductCategories />
      <CraftingSection />
      <PopularBags />
      <Certifications />
      <BehindOurCraft />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}