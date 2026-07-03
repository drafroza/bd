import { useEffect, useState } from 'react';
import { Download, Award, Users, Heart } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Design: Elegant Healthcare Luxury
 * Home page with hero section, introduction, statistics, and featured sections
 */
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [counters, setCounters] = useState({
    patients: 0,
    experience: 0,
    awards: 0,
  });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Animate counters
  useEffect(() => {
    const targets = {
      patients: 500,
      experience: 2,
      awards: 5,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        patients: Math.floor(targets.patients * progress),
        experience: Math.floor(targets.experience * progress * 10) / 10,
        awards: Math.floor(targets.awards * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/manus-storage/hero-background_61e70b8e.png)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white fade-in-up">
          <div className="mb-6 animate-bounce">
            <img
              src="/manus-storage/dr-afroza-logo_34ab733b.png"
              alt="Dr. Afroza Logo"
              className="h-20 w-20 mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Dr. Mst. Afroza Akter Nishy
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100">
            MBBS, FCPS Part-I (Obstetrics & Gynaecology)
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Dedicated to advancing women's healthcare through evidence-based clinical practice, empathy, and continuous learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-sm"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Professional Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Professional Profile
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="text-lg leading-relaxed">
                  A dedicated and compassionate medical professional with a solid academic foundation from <strong>Rajshahi Medical College</strong>. Currently specializing in <strong>Obstetrics & Gynaecology</strong> (FCPS Part-I).
                </p>
                <p className="text-lg leading-relaxed">
                  With hands-on clinical experience in maternal-fetal medicine, obstetric emergencies, and comprehensive women's healthcare, I am committed to providing evidence-based treatment with a personal touch.
                </p>
                <p className="text-lg leading-relaxed">
                  <strong>BMDC Registration No: 142636</strong>
                </p>
              </div>

              {/* Download CV Button */}
              <a
                href="/CV - Dr. Afroza.PDF"
                download
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Right Image */}
            <div className="fade-in-right">
              <img
                src="/manus-storage/professional-portrait-placeholder_49663b80.png"
                alt="Dr. Afroza Professional Portrait"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FCPS Part-I Highlight */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              FCPS Part-I Achievement
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Successfully completed FCPS Part-I (Obstetrics & Gynaecology) from Bangladesh College of Physicians and Surgeons in 2026
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Clinical Excellence',
                description: 'Comprehensive training in obstetric and gynecological care',
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: 'Board Certified',
                description: 'Recognized qualification from BCPS',
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: 'Patient-Centered',
                description: 'Dedicated to compassionate and evidence-based care',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="flex justify-center mb-4 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {counters.patients}+
              </div>
              <p className="text-lg opacity-90">
                Patients Cared For
              </p>
            </div>
            <div className="fade-in-up">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {counters.experience}+
              </div>
              <p className="text-lg opacity-90">
                Years of Clinical Experience
              </p>
            </div>
            <div className="fade-in-up">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                {counters.awards}+
              </div>
              <p className="text-lg opacity-90">
                Awards & Recognitions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Services & Expertise
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Comprehensive women's healthcare services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Antenatal & Postnatal Care',
              'Normal Delivery Management',
              'Obstetric First Aid',
              'ECG Interpretation',
              'Emergency Resuscitation',
              'Patient Counseling',
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-secondary-bg p-6 rounded-lg border-l-4 border-accent hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service}
                </h3>
                <p className="text-foreground opacity-80">
                  Professional medical service with compassionate care
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Preview Section */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">
                Best Performer Award
              </h3>
              <p className="text-foreground">
                Rajshahi Medical College Hospital - Outstanding dedication and clinical performance in Medicine Unit-III during internship
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">
                Merit Scholarship
              </h3>
              <p className="text-foreground">
                Dutch-Bangla Bank (DBBL) - 5-year competitive scholarship (2017-2022) for consistent academic excellence
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/resume">
              <a className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                View Full Resume
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Healthcare Needs?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch for professional medical consultations and healthcare services
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Contact Me Today
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
