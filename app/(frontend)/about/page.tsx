import Image from 'next/image';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const flags = [
  { src: '/assets/Flags/Germany.png', alt: 'Germany flag' },
  { src: '/assets/Flags/Malaysia.png', alt: 'Malaysia flag' },
  { src: '/assets/Flags/United%20States%20of%20America.png', alt: 'United States flag' },
  { src: '/assets/Flags/Spain.png', alt: 'Spain flag' },
  { src: '/assets/Flags/Dominican%20Republic.png', alt: 'Dominican Republic flag' },
  { src: '/assets/Flags/Mexico.png', alt: 'Mexico flag' },
];

const processSteps = [
  {
    number: '01',
    title: 'Raw Material Sourcing',
    description: 'Premium certified jute, cotton, and canvas from trusted suppliers',
    icon: '/assets/raw-material.png',
  },
  {
    number: '02',
    title: 'Precision Manufacturing',
    description: 'Skilled craftsmanship with strict quality protocols',
    icon: '/assets/manufacturing-icon.png',
  },
  {
    number: '03',
    title: 'Quality Testing',
    description: 'Multi-stage inspection ensuring compliance with international standards',
    icon: '/assets/quality-icon.png',
  },
  {
    number: '04',
    title: 'Customization',
    description: 'Design, size, printing, and labelling as per client requirements',
    icon: '/assets/customization-icon.png',
  },
  {
    number: '05',
    title: 'Export Packaging',
    description: 'Industry-grade packaging designed for international transit',
    icon: '/assets/packaging-icon.png',
  },
  {
    number: '06',
    title: 'Global Shipping',
    description: 'Reliable logistics partners ensuring timely worldwide delivery',
    icon: '/assets/shipping-icon.png',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden border-b-2 border-bg-light bg-white px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-primary-dark md:text-4xl lg:text-[2.35rem]">
            About <span className="text-primary-green">Soujata Exim</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-6 text-text-muted md:text-lg">
            Leading manufacturer of eco-friendly jute, cotton & canvas bags. Craftsmanship
            meets modern design. Sustainable packaging worldwide.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbf8] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <Image
          src="/background-detail.png"
          alt="Background pattern"
          fill
          className="pointer-events-none object-cover opacity-2"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto h-[22rem] w-full max-w-[34rem] lg:max-w-none">
            <div className="absolute left-4 top-10 h-80 w-40 rounded-2xl border border-[#e6e4de] bg-white shadow-[0_10px_30px_rgba(11,42,28,0.06)] md:left-6 md:h-84 md:w-54" />
            <div className="absolute bottom-8 left-20 h-44 w-[16rem] rounded-2xl border border-[#e6e4de] bg-white shadow-[0_10px_30px_rgba(11,42,28,0.06)] md:left-24 md:h-52 md:w-[22rem]" />
          </div>

          <div className="relative max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary-dark md:text-4xl">
              The Story Behind <span className="text-primary-green">Every Stitch</span>
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-text-muted md:text-lg">
              <p>
                Founded in West Bengal, Soujata Exim has grown from a small unit to a globally
                recognized exporter of sustainable bags. Our mission is to provide high-quality,
                earth-conscious alternatives to plastic and leather.
              </p>
              <p>
                Today, we export across Europe, North America, and Asia, serving retail chains,
                packaging companies, organic brands, and corporate gifting firms. Our
                manufacturing combines skilled craftsmanship with ethical practices for consistent
                quality.
              </p>
              <p>
                As both manufacturer and exporter, we control quality, pricing, and delivery,
                ensuring partners receive the best value and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8 md:py-14 lg:px-12 border-2 border-bg-light">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[1.35rem] bg-primary-green px-6 py-7 text-white md:px-8 md:py-8">
            <Image 
              src="/assets/leaf.png" 
              alt="Leaf icon" 
              width={72} 
              height={72} 
              className="absolute right-5 top-4" 
            />
            <h3 className="text-2xl font-bold md:text-3xl">Our Mission</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 md:text-base">
              Founded in West Bengal, Soujata Exim grew from a small unit to a global sustainable
              bag exporter. Our core mission: affordable, earth-conscious alternatives to plastic
              and leather.
            </p>
          </article>

          <article className="relative overflow-hidden rounded-[1.35rem] border-2 border-bg-light bg-[#fafaf7] px-6 py-7 md:px-8 md:py-8">
            <Image 
              src="/assets/vision.png" 
              alt="Vision icon" 
              width={72} 
              height={72} 
              className="absolute right-5 top-4" 
            />
            <h3 className="text-2xl font-bold text-primary-dark md:text-3xl">Our Vision</h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-text-muted md:text-base">
              To become the most trusted name in sustainable bag exports, recognized globally for
              quality, innovation, and customer focus. We aim to expand to 50+ countries with
              ethical craftsmanship.
            </p>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbf8] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <Image
          src="/background-detail.png"
          alt="Background pattern"
          fill
          className="pointer-events-none object-cover opacity-2"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-dark md:text-4xl">
            Meet the <span className="text-primary-green">Founder</span>
          </h2>
          <p className="mt-4 text-base text-text-muted md:text-lg">The vision behind Soujata Exim</p>

          <div className="mx-auto mt-10 max-w-2xl rounded-[1.35rem] border-2 border-bg-light bg-white px-6 py-8 md:px-10 md:py-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d9d9d9] md:h-20 md:w-20">
              <span className="sr-only">Founder image placeholder</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-primary-dark">Founder Name</h3>
            <p className="mt-1 text-base font-semibold text-primary-green">Founder &amp; Managing Director</p>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-text-muted md:text-base">
              With deep expertise in jute, cotton, and canvas, our founder established Soujata
              Exim to deliver sustainable, high-quality bags worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8 md:py-16 lg:px-12 border-2 border-bg-light">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-dark md:text-4xl">
            Our <span className="text-primary-green">Manufacturing</span> Process
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-6 text-text-muted md:text-lg">
            From raw materials to export-ready products, every step is carefully controlled
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border-2 border-bg-light bg-white px-5 py-6 text-left"
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ecf7f0]">
                    <Image 
                      src={step.icon} 
                      alt="" 
                      width={24} 
                      height={24} 
                      className="h-6 w-6 object-contain" 
                    />
                  </div>
                  <span className="text-3xl font-semibold text-[#efefea]">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#fbfbf8] px-4 py-12 md:px-8 md:py-16 lg:px-12">
        <Image
          src="/background-detail.png"
          alt="Background pattern"
          fill
          className="pointer-events-none object-cover opacity-2"
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-dark md:text-4xl">
            <span className="text-primary-green">Global</span> Export Network
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-6 text-text-muted md:text-lg">
            We proudly serve customers across 10+ countries with reliable logistics, export-ready
            documentation, and dedicated support for international buyers.
          </p>

          <div className="mt-10 rounded-[1.5rem] border-2 border-bg-light bg-white px-6 py-8 md:px-10 md:py-10">
            <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
              {flags.map((flag) => (
                <div key={flag.alt} className="flex items-center justify-center">
                  <Image
                    src={flag.src}
                    alt={flag.alt}
                    width={74}
                    height={50}
                    className="h-12 w-auto object-contain md:h-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
