import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, BookOpen, Briefcase, Star, Download } from 'lucide-react';

/**
 * Design: Elegant Healthcare Luxury
 * Resume page with interactive timeline, education, experience, and skills
 */
export default function Resume() {
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
            Resume & Experience
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            MBBS, FCPS Part-I | BMDC Reg. No: 142636 | Clinical Experience & Qualifications
          </p>
          <a
            href="/CV-Dr.Afroza.pdf"
            download="CV-Dr.Afroza.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 flex items-center gap-3">
            <BookOpen className="w-10 h-10 text-accent" />
            Education
          </h2>

          <div className="space-y-8 max-w-3xl">
            {[
              {
                degree: 'FCPS Part-I (Obstetrics & Gynaecology)',
                institution: 'Bangladesh College of Physicians and Surgeons (BCPS)',
                year: '2026',
                details: 'Specialized postgraduate qualification in Obstetrics and Gynaecology',
              },
              {
                degree: 'MBBS',
                institution: 'Rajshahi Medical College',
                university: 'Rajshahi Medical University',
                year: '2023',
                details: 'Bachelor of Medicine, Bachelor of Surgery with comprehensive clinical training',
              },
              {
                degree: 'HSC (Science)',
                institution: 'Rajshahi New Govt. Degree College',
                board: 'Rajshahi Board',
                year: '2017',
                details: 'Higher Secondary Certificate with science specialization',
              },
              {
                degree: 'SSC (Science)',
                institution: 'Maskatadighi Multilateral High School',
                board: 'Rajshahi Board',
                year: '2015',
                details: 'Secondary School Certificate with science specialization',
              },
            ].map((edu, idx) => (
              <div key={idx} className="relative pl-8 pb-8 border-l-2 border-accent">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-white" />
                <div className="bg-secondary-bg p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-primary">
                      {edu.degree}
                    </h3>
                    <span className="text-accent font-semibold text-lg">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.university}
                    </p>
                  )}
                  {edu.board && (
                    <p className="text-sm text-muted-foreground mb-2">
                      {edu.board}
                    </p>
                  )}
                  <p className="text-foreground">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 flex items-center gap-3">
            <Briefcase className="w-10 h-10 text-accent" />
            Clinical Experience
          </h2>

          <div className="space-y-8 max-w-3xl">
            {[
              {
                position: 'Part-Time Medical Officer',
                institution: 'Hitech Multicare Hospital Limited',
                location: 'Dhaka Cantonment, Dhaka',
                period: 'October 2025 – April 2026',
                responsibilities: [
                  'Managed outdoor and indoor patient departments',
                  'Provided primary and emergency medical care',
                  'Assisted senior consultants in clinical rounds',
                  'Handled emergency triaging and stabilized acute cases',
                ],
              },
              {
                position: 'Intern Doctor',
                institution: 'Rajshahi Medical College Hospital (RMCH)',
                location: 'Rajshahi',
                period: 'July 2024 – July 2025',
                responsibilities: [
                  'Completed 52-week comprehensive clinical rotation',
                  'Overall performance rating: Very Good',
                  'Medicine (19 weeks) under Prof. Dr. Mohammad Hasan Tarik',
                  'Surgery (19 weeks) under Assoc. Prof. Dr. Md. Moniruzzaman Sarkar',
                  'Obstetrics & Gynaecology (14 weeks) under Prof. Dr. Mst. Rokeya Khatun',
                  'Hands-on experience in NVD, C-sections, and obstetric emergencies',
                ],
              },
            ].map((exp, idx) => (
              <div key={idx} className="relative pl-8 pb-8 border-l-2 border-accent">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-white" />
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-primary">
                      {exp.position}
                    </h3>
                    <span className="text-accent font-semibold text-sm whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-1">
                    {exp.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, ridx) => (
                      <li key={ridx} className="flex items-start gap-3 text-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Clinical Skills & Competencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                category: 'Medical & Surgical Skills',
                skills: [
                  'Antenatal & Postnatal Care (ANC/PNC)',
                  'Normal Delivery Management',
                  'Obstetric First Aid',
                  'Minor Surgical Procedures',
                  'Post-operative Care',
                  'ECG Interpretation',
                  'Diagnostic Lab Report Analysis',
                  'Emergency Resuscitation',
                  'Basic Life Support (BLS)',
                ],
              },
              {
                category: 'Interpersonal Skills',
                skills: [
                  'Compassionate Patient Communication',
                  'Patient Counseling',
                  'Multidisciplinary Team Collaboration',
                  'Critical Decision Making',
                  'Medical Ethics',
                  'Detailed Clinical Documentation',
                  'High-Pressure Environment Management',
                  'Professional Conduct',
                ],
              },
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-secondary-bg p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.skills.map((skill, sidx) => (
                    <li key={sidx} className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 flex items-center gap-3">
            <Award className="w-10 h-10 text-accent" />
            Awards & Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Best Performer Award',
                issuer: 'Rajshahi Medical College Hospital (RMCH)',
                description: 'Awarded a prestigious crest for outstanding dedication and clinical performance in Medicine Unit-III during internship',
              },
              {
                title: 'Dutch-Bangla Bank (DBBL) Merit Scholarship',
                issuer: 'Bangladesh',
                description: 'Highly competitive 5-year scholarship (2017–2022) maintained throughout the MBBS program for consistent academic excellence',
              },
              {
                title: 'Government Board Scholarship - JSC',
                issuer: 'Rajshahi Board',
                description: 'Recipient of Board Merit Scholarship for top-tier results in Junior School Certificate (2013)',
              },
              {
                title: 'Government Board Scholarship - SSC & HSC',
                issuer: 'Rajshahi Board',
                description: 'Recipient of Board Merit Scholarships for exceptional performance in Secondary School Certificate (2015) and Higher Secondary Certificate (2017)',
              },
            ].map((award, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <Award className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {award.title}
                    </h3>
                    <p className="text-sm text-accent font-semibold">
                      {award.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-foreground">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seminars & Training */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Seminars & Training</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Endocrinology Seminar',
                topic: 'Overview of Use of Insulin in Diabetes Mellitus',
                venue: 'Medicine Unit-III, Rajshahi Medical College Hospital',
              },
              {
                title: 'World Sight Day 2024',
                topic: 'Child Eye Care and Vision Health Campaign',
                venue: 'Active Participant',
              },
            ].map((seminar, idx) => (
              <div key={idx} className="bg-secondary-bg p-8 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {seminar.title}
                </h3>
                <p className="text-foreground font-semibold mb-2">
                  {seminar.topic}
                </p>
                <p className="text-sm text-muted-foreground">
                  {seminar.venue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in Professional Collaboration?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Available for professional consultations, residency programs, and Medical Officer positions in the field of Obstetrics and Gynaecology
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
