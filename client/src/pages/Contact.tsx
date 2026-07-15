import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

/**
 * Design: Elegant Healthcare Luxury
 * Contact page with contact information and communication channels
 * WhatsApp is the primary contact method
 */
export default function Contact() {
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
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            MBBS, FCPS Part-I | BMDC Reg. No: 142636 | Jhalakathi Sadar, Jhalakathi, Bangladesh
          </p>
        </div>
      </section>

      {/* Primary Contact - WhatsApp */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border-l-4 border-green-600">
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="w-16 h-16 text-green-600 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Preferred Contact Method</h2>
                <p className="text-foreground">WhatsApp for fastest response</p>
              </div>
            </div>
            <a
              href="https://wa.me/dr.afroza.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              💬 Open WhatsApp Chat
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              WhatsApp: wa.me/dr.afroza.bd | Response within 1 hour
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {/* WhatsApp - Primary */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-2 border-green-600 text-center hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/dr.afroza.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-green-600 hover:text-green-700 transition-colors duration-300 font-bold"
              >
                wa.me/dr.afroza.bd
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Quick messaging - Response within 1 hour
              </p>
            </div>

            {/* Email */}
            <div className="bg-secondary-bg p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Email</h3>
              <a
                href="mailto:drafroza99@gmail.com"
                className="text-lg text-foreground hover:text-accent transition-colors duration-300 font-semibold break-all"
              >
                drafroza99@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Professional inquiries - Response within 24 hours
              </p>
            </div>

          {/* Location */}
          <div className="bg-secondary-bg p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-3">Location</h3>
            <p className="text-lg text-foreground font-semibold">
              Jhalakathi Sadar, Jhalakathi, Bangladesh
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Available for professional consultations
            </p>
          </div>
          </div>


        </div>
      </section>

      {/* BMDC Registration */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">Professional Registration</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">BMDC Registration Number</p>
                <p className="text-2xl font-bold text-accent">142636</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className="text-lg text-foreground">Registered Medical Practitioner</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Specialization</p>
                <p className="text-lg text-foreground">Obstetrics & Gynaecology (FCPS Part-I)</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 italic">
              Committed to maintaining the highest standards of medical ethics and professional conduct as per BMDC guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Communication Channels */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Communication Channels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'For Quick Messages',
                method: 'WhatsApp',
                contact: 'wa.me/dr.afroza.bd',
                response: 'Response within 1 hour',
                icon: '💬',
              },
              {
                title: 'For Professional Inquiries',
                method: 'Email',
                contact: 'drafroza99@gmail.com',
                response: 'Response within 24 hours',
                icon: '📧',
              },
              {
                title: 'For Detailed Discussions',
                method: 'WhatsApp Call',
                contact: 'wa.me/dr.afroza.bd',
                response: 'By appointment',
                icon: '\ud83d\udcde',
              },
            ].map((channel, idx) => (
              <div key={idx} className="bg-secondary-bg p-6 rounded-lg border-l-4 border-accent hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{channel.icon}</span>
                  <h3 className="text-xl font-bold text-primary">
                    {channel.title}
                  </h3>
                </div>
                <p className="text-foreground mb-2">
                  <strong>Method:</strong> {channel.method}
                </p>
                <p className="text-foreground mb-2">
                  <strong>Contact:</strong> {channel.contact}
                </p>
                <p className="text-sm text-accent font-semibold">
                  ⏱️ {channel.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section className="py-16 md:py-24 bg-secondary-bg">
        <div className="container">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* WhatsApp - Primary CTA */}
            <a
              href="https://wa.me/dr.afroza.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg md:col-span-2"
            >
              <MessageCircle size={24} />
              💬 WhatsApp Chat (Recommended)
            </a>

            <a
              href="mailto:drafroza99@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Send Email
            </a>


          </div>
        </div>
      </section>

      {/* Response Time Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Response Time & Availability</h2>
            <div className="space-y-4">
              <p>
                I am committed to responding to all professional inquiries promptly. Expected response times:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>WhatsApp messages:</strong> Within 1 hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Email inquiries:</strong> Within 24 hours</span>
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Emergency consultations:</strong> By appointment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
