import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { X } from 'lucide-react';

/**
 * Design: Elegant Healthcare Luxury
 * Gallery page with professional photos and medical activities
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryItems = [
    {
      id: 1,
      title: 'Professional Portrait',
      category: 'Professional',
      image: '/images/homepage-logo.jpg',
      description: 'Professional medical practitioner portrait',
    },
    {
      id: 2,
      title: 'World Sight Day 2024',
      category: 'Medical Activities',
      image: '/images/rally-photos.jpg',
      description: 'Active participation in World Sight Day campaign for child eye care',
    },
    {
      id: 3,
      title: 'During Surgery',
      category: 'Medical Activities',
      image: '/images/during-surgery.jpg',
      description: 'Professional medical practice and surgical expertise',
    },
    {
      id: 4,
      title: 'Scientific Seminar Award',
      category: 'Awards & Recognition',
      image: '/images/award-seminar.jpg',
      description: 'Recognition at Scientific Seminar on Overview of Use of Insulin in DM',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-black bg-white pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-[0.7fr_1fr] md:items-end md:gap-16">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]"><span className="mr-3 inline-block h-3 w-3 bg-[#e30613]" aria-hidden="true" />04 / Gallery</p>
          <div><h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.08em] text-[#111111] md:text-8xl">A visual record of learning.</h1><p className="mt-7 max-w-xl border-l-2 border-[#e30613] pl-5 text-sm leading-7 text-[#4b4b4b]">Professional photos, medical activities, and moments of recognition.</p></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative cursor-pointer overflow-hidden border border-black transition-colors duration-200 hover:border-[#e30613]"
                onClick={() => setSelectedImage(item.image)}
                onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedImage(item.image); } }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.title} image`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover grayscale transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-2 flex-col justify-end bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 pt-24 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-2">
                    {item.category}
                  </p>
                  <p className="text-sm text-gray-100">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Gallery"
              className="w-full border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image viewer"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center bg-white transition-colors duration-200 hover:bg-[#e30613] hover:text-white"
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Photo Categories */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Photo Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Professional Photos',
                description: 'High-quality professional portraits and medical practitioner photography',
                count: '1+',
              },
              {
                title: 'Medical Activities',
                description: 'Documentation of medical campaigns, seminars, and healthcare initiatives',
                count: '2+',
              },
            ].map((category, idx) => (
              <div key={idx} className="border border-black bg-white p-8 transition-colors duration-200 hover:bg-[#f4f4f4]">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {category.title}
                </h3>
                <p className="text-foreground mb-4">
                  {category.description}
                </p>
                <p className="text-lg font-semibold text-accent">
                  {category.count} Photos
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Updates */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            More Coming Soon
          </h2>
          <p className="text-xl text-foreground max-w-2xl mx-auto mb-8">
            Additional professional photos and medical activity documentation will be added regularly to showcase ongoing clinical work and professional engagement.
          </p>
          <div className="inline-block border-l-2 border-[#e30613] bg-[#f4f4f4] px-8 py-4">
            <p className="text-foreground">
              Check back regularly for updated gallery content
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-black bg-[#e30613] py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Collaborate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Interested in medical photography, documentation, or professional collaborations?
          </p>
          <a
            href="#/contact"
            className="inline-flex min-h-14 items-center bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
