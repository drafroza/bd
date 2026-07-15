import { useState, useEffect } from 'react';
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
      experience: 1.5,
      awards: 4,
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
            backgroundImage: 'url(/images/homepage-logo.jpg)',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white fade-in-up">
          <div className="mb-6 animate-bounce">
            <img
              src="/images/homepage-logo.jpg"
              alt="Dr. Afroza Logo"
              className="h-20 w-20 mx-auto rounded-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Dr. Mst. Afroza Akter Nishy
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white/90">
            MBBS, FCPS Part-I (Obstetrics & Gynaecology)
          </p>
          <p className="text-md mb-6 text-white/90">
            Registered Medical Practitioner | BMDC Reg. No: 142636
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
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
              className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg border border-white/30"
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

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: 'Patients Cared', value: counters.patients, suffix: '+' },
              { icon: Heart, label: 'Years of Experience', value: counters.experience, suffix: '+' },
              { icon: Award, label: 'Academic Awards', value: counters.awards, suffix: '+' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <p className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-lg text-white/90">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="fade-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Professional Excellence in Women's Healthcare
              </h2>
              <p className="text-lg text-foreground mb-4">
                Dedicated and compassionate medical professional with a solid academic foundation from <strong>Rajshahi Medical College</strong>. Currently specializing in <strong>Obstetrics & Gynaecology</strong> (FCPS Part-I), I am committed to advancing women's healthcare through evidence-based clinical practice, empathy, and continuous learning.
              </p>
              <p className="text-lg text-foreground mb-8">
                With hands-on clinical experience in maternal-fetal medicine, obstetric emergencies, and comprehensive women's healthcare — including a comprehensive 52-week clinical rotation at Rajshahi Medical College Hospital and part-time medical officer experience at Hitech Multicare Hospital — I am equipped to handle diverse medical situations with professionalism and compassion.
              </p>
              <a
                href="/about"
                className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Read Full Biography
              </a>
            </div>

            {/* Right Image */}
            <div className="fade-in-right">
              <img
                src="/images/homepage-logo.jpg"
                alt="Dr. Afroza Professional Portrait"
                className="rounded-lg shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
            Key Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Clinical Experience',
                description: 'Part-Time Medical Officer at Hitech Multicare Hospital & Intern at RMCH with 52-week clinical rotation',
                icon: '\ud83c\udfe5',
              },
              {
                title: 'Professional Qualifications',
                description: 'MBBS from Rajshahi Medical College and FCPS Part-I in Obstetrics & Gynaecology',
                icon: '\ud83d\udcdc',
              },
              {
                title: '4+ Academic Awards',
                description: 'Best Performer Award RMCH, DBBL Merit Scholarship, and Government Board Scholarships',
                icon: '\ud83c\udfc6',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Connect?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you have medical inquiries, professional collaboration opportunities, or just want to learn more, I am here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Me
            </a>
            <a
              href="/resume"
              className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 shadow-lg border border-white/30"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
