import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * Design: Elegant Healthcare Luxury
 * About page with professional biography, mission, vision, and languages
 */
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 bg-gradient-to-r from-primary to-primary/80 text-white mt-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            About Me
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Professional Journey in Women&apos;s Healthcare
          </p>
        </div>
      </section>

      {/* Professional Biography */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Professional Biography</h2>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>
                I am Dr. Mst. Afroza Akter Nishy, a dedicated and compassionate medical professional with a solid academic foundation from <strong>Rajshahi Medical College</strong>. Currently specializing in <strong>Obstetrics & Gynaecology</strong> (FCPS Part-I), I am committed to advancing women&apos;s healthcare through evidence-based clinical practice, empathy, and continuous learning.
              </p>
              <p>
                My journey in medicine began with a passion for understanding the complexities of women&apos;s health and providing compassionate care to every patient. Throughout my medical education and clinical training, I have developed a deep appreciation for the importance of patient-centered care, ethical practice, and ongoing professional development.
              </p>
              <p>
                With hands-on clinical experience in maternal-fetal medicine, obstetric emergencies, and comprehensive women&apos;s healthcare, I am equipped to handle diverse medical situations with professionalism and compassion. My training at Rajshahi Medical College Hospital has provided me with the skills and knowledge necessary to deliver high-quality medical services.
              </p>
              <p>
                <strong>BMDC Registration No: 142636</strong> - Registered Medical Practitioner committed to maintaining the highest standards of medical ethics and professional conduct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Career Objective */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-foreground leading-relaxed">
                To provide compassionate, evidence-based medical care to women at all stages of life, with a commitment to improving maternal and reproductive health outcomes through clinical excellence, patient education, and continuous professional development.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be a trusted healthcare provider known for delivering high-quality obstetric and gynecological care, advancing women&apos;s health through research and innovation, and contributing to the development of healthcare systems in Bangladesh.
              </p>
            </div>

            {/* Career Objective */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary mb-4">Career Objective</h3>
              <p className="text-foreground leading-relaxed">
                To pursue specialized training in Obstetrics & Gynaecology, establish a successful medical practice, and contribute to advancing women&apos;s healthcare through clinical expertise, research, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              {
                language: 'Bengali',
                proficiency: 'Native Proficiency',
                description: 'Fluent in reading, writing, and speaking',
              },
              {
                language: 'English',
                proficiency: 'Full Professional Fluency',
                description: 'Proficient in medical terminology and communication',
              },
              {
                language: 'Hindi & Urdu',
                proficiency: 'Working Conversational Proficiency',
                description: 'Able to communicate in professional settings',
              },
              {
                language: 'Arabic',
                proficiency: 'Professional Reading and Comprehension',
                description: 'Capable of understanding medical literature',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-secondary-bg rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {item.language}
                </h3>
                <p className="font-semibold text-accent mb-2">
                  {item.proficiency}
                </p>
                <p className="text-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Research Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Maternal-Fetal Medicine',
                description: 'Advanced understanding of pregnancy complications and fetal health management',
              },
              {
                title: 'Reproductive Endocrinology',
                description: 'Study of hormonal factors affecting reproductive health and fertility',
              },
              {
                title: 'Gynecological Oncology',
                description: 'Clinical research in cancer prevention and treatment in women',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Interests */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Clinical Interests</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Maternal Health & Pregnancy Care',
                'Obstetric Emergencies',
                'Reproductive Health',
                'Women\'s Preventive Care',
                'Gynecological Disorders',
                'Patient Education & Counseling',
              ].map((interest, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-foreground font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Interested in discussing healthcare, professional opportunities, or collaborations?
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
