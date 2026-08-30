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
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-black bg-white pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-[0.7fr_1fr] md:items-end md:gap-16">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#e30613]"><span className="mr-3 inline-block h-3 w-3 bg-[#e30613]" aria-hidden="true" />03 / Resume</p>
          <div><h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.08em] text-[#111111] md:text-8xl">A record of practice.</h1><p className="mt-7 max-w-xl border-l-2 border-[#e30613] pl-5 text-sm leading-7 text-[#4b4b4b]">MBBS, FCPS Part-I · BMDC Reg. No: 142636 · Clinical experience &amp; qualifications</p><a href="/CV-Dr.Afroza.pdf" download="CV-Dr.Afroza.pdf" className="mt-8 inline-flex min-h-14 items-center gap-3 bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#e30613] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e30613]"><Download className="h-5 w-5" aria-hidden="true" />Download CV</a></div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="mb-12 flex items-center gap-4 text-4xl font-black tracking-[-0.07em] text-primary md:text-6xl"><BookOpen className="h-8 w-8 text-accent" aria-hidden="true" />Education</h2>

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
              <div key={idx} className="relative border-l-2 border-[#e30613] pb-8 pl-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 bg-[#e30613]" />
                <div className="border border-black bg-[#f4f4f4] p-6">
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
              <div key={idx} className="relative border-l-2 border-[#e30613] pb-8 pl-8">
                <div className="absolute -left-[9px] top-0 h-4 w-4 bg-[#e30613]" />
                <div className="border border-black bg-white p-6">
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
              <div key={idx} className="border border-black bg-[#f4f4f4] p-8">
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
              <div key={idx} className="border border-black bg-white p-8 transition-colors duration-200 hover:bg-[#f4f4f4]">
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
              <div key={idx} className="border-l-2 border-[#e30613] bg-[#f4f4f4] p-8">
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
      <section className="border-t border-black bg-[#e30613] py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in Professional Collaboration?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Available for professional consultations, residency programs, and Medical Officer positions in the field of Obstetrics and Gynaecology
          </p>
          <a
            href="#/contact"
            className="inline-flex min-h-14 items-center bg-[#111111] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white hover:text-[#111111] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
          >
            Contact Me
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
