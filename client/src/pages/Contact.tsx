import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

/**
 * Design: Elegant Healthcare Luxury
 * Contact page with contact information and communication channels
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
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Professional consultations and inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {/* Phone */}
            <div className="bg-secondary-bg p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <Phone className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">Call</h3>
              <a
                href="tel:+8801797321210"
                className="text-lg text-foreground hover:text-accent transition-colors duration-300 font-semibold"
              >
                +880 1797 321210
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Available for professional consultations
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
                Professional inquiries welcome
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-secondary-bg p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300">
              <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-3">WhatsApp</h3>
              <a
                href="https://wa.me/8801797321210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground hover:text-accent transition-colors duration-300 font-semibold"
              >
                +880 1797 321210
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Quick messaging available
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-secondary-bg p-8 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Location</h3>
                <p className="text-lg text-foreground mb-4">
                  Jhalakathi Sadar, Jhalakathi, Bangladesh
                </p>
                <a
                  href="https://www.google.com/maps/place/Rajshahi+Medical+College+Hospital,Rajshahi,+medical+college+road,+laxmipur,+6000/@24.3712881,88.5872372,17z/data=!4m6!3m5!1s0x39fbef02d4899947:0x6c5031675c0796a8!8m2!3d24.372019!4d88.5864259!16zL20vMDVqajYx?utm_campaign=ml-ardi&g_ep=Eg1tbF8yMDI2MDYyOV8wIOC7DCoASAJQAQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
                >
                  View on Google Maps
                </a>
              </div>
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
            Preferred Communication Channels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'For Urgent Medical Consultations',
                method: 'Call or WhatsApp',
                contact: '+880 1797 321210',
                response: 'Immediate response',
              },
              {
                title: 'For Professional Inquiries',
                method: 'Email',
                contact: 'drafroza99@gmail.com',
                response: 'Response within 24 hours',
              },
              {
                title: 'For Quick Messages',
                method: 'WhatsApp',
                contact: '+880 1797 321210',
                response: 'Response within 1 hour',
              },
              {
                title: 'For Detailed Discussions',
                method: 'Phone Call',
                contact: '+880 1797 321210',
                response: 'By appointment',
              },
            ].map((channel, idx) => (
              <div key={idx} className="bg-secondary-bg p-6 rounded-lg border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {channel.title}
                </h3>
                <p className="text-foreground mb-2">
                  <strong>Method:</strong> {channel.method}
                </p>
                <p className="text-foreground mb-2">
                  <strong>Contact:</strong> {channel.contact}
                </p>
                <p className="text-sm text-accent font-semibold">
                  {channel.response}
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
            <a
              href="tel:+8801797321210"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="https://wa.me/8801797321210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Chat
            </a>

            <a
              href="mailto:drafroza99@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Send Email
            </a>

            <a
              href="https://www.google.com/maps/place/Rajshahi+Medical+College+Hospital,Rajshahi,+medical+college+road,+laxmipur,+6000/@24.3712881,88.5872372,17z/data=!4m6!3m5!1s0x39fbef02d4899947:0x6c5031675c0796a8!8m2!3d24.372019!4d88.5864259!16zL20vMDVqajYx?utm_campaign=ml-ardi&g_ep=Eg1tbF8yMDI2MDYyOV8wIOC7DCoASAJQAQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MapPin size={20} />
              View Location
            </a>
          </div>
        </div>
      </section>

      {/* Response Time Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Response Time</h2>
            <div className="space-y-4">
              <p>
                I am committed to responding to all professional inquiries promptly. Expected response times:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Emergency calls: Immediate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>WhatsApp messages: Within 1 hour</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Email inquiries: Within 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">•</span>
                  <span>Scheduled consultations: By appointment</span>
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
