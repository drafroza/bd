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
      image: '/manus-storage/Homepage and logo pic_42767fb2.jpg',
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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-white mt-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Gallery
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Professional photos and medical activities
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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
              className="w-full h-auto rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
            >
              <X size={24} className="text-primary" />
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
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
          <div className="inline-block px-8 py-4 bg-secondary-bg rounded-lg border-l-4 border-accent">
            <p className="text-foreground">
              Check back regularly for updated gallery content
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Collaborate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Interested in medical photography, documentation, or professional collaborations?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
