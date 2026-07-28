<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Dr. Afroza</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-dark: #0d1117;
            --bg-card: #161b22;
            --bg-card-hover: #1c2128;
            --border: #30363d;
            --text-primary: #e6edf3;
            --text-secondary: #8b949e;
            --accent-gold: #d4a574;
            --accent-gold-light: #e8c9a0;
            --telegram: #229ed9;
            --telegram-hover: #1a8bc2;
            --success: #3fb950;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-dark);
            color: var(--text-primary);
            line-height: 1.6;
            min-height: 100vh;
        }

        /* Header */
        .header {
            text-align: center;
            padding: 80px 40px 60px;
            background: linear-gradient(180deg, #161b22 0%, var(--bg-dark) 100%);
        }

        .header h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.2rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 16px;
            letter-spacing: -0.5px;
        }

        .header .subtitle {
            font-size: 1rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.8;
        }

        /* Container */
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 0 40px 80px;
        }

        /* Cards */
        .card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: 16px;
            padding: 48px;
            margin-bottom: 32px;
            transition: all 0.3s ease;
        }

        .card:hover {
            border-color: var(--accent-gold);
            box-shadow: 0 8px 32px rgba(212, 165, 116, 0.1);
        }

        .card-title {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .card-desc {
            color: var(--text-secondary);
            font-size: 0.95rem;
            margin-bottom: 28px;
            line-height: 1.7;
        }

        /* Telegram Button */
        .telegram-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background: var(--telegram);
            color: white;
            font-size: 1.05rem;
            font-weight: 600;
            padding: 16px 40px;
            border-radius: 12px;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .telegram-btn:hover {
            background: var(--telegram-hover);
            transform: translateY(-3px);
            box-shadow: 0 12px 32px rgba(34, 158, 217, 0.3);
        }

        .telegram-btn svg {
            width: 24px;
            height: 24px;
            fill: currentColor;
        }

        .response-time {
            display: inline-block;
            margin-top: 16px;
            font-size: 0.9rem;
            color: var(--accent-gold);
            font-weight: 500;
        }

        /* Quick Actions Grid */
        .actions-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 0;
        }

        .action-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 18px 28px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }

        .action-btn.telegram {
            background: var(--telegram);
            color: white;
        }

        .action-btn.telegram:hover {
            background: var(--telegram-hover);
            transform: translateY(-3px);
            box-shadow: 0 12px 32px rgba(34, 158, 217, 0.3);
        }

        .action-btn.email {
            background: rgba(212, 165, 116, 0.15);
            color: var(--accent-gold);
            border: 1.5px solid var(--accent-gold);
        }

        .action-btn.email:hover {
            background: rgba(212, 165, 116, 0.25);
            transform: translateY(-3px);
            box-shadow: 0 12px 32px rgba(212, 165, 116, 0.2);
        }

        .action-btn svg {
            width: 22px;
            height: 22px;
            fill: currentColor;
        }

        /* Feedback Form */
        .feedback-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .form-group label {
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--text-secondary);
        }

        .form-group input,
        .form-group textarea {
            background: var(--bg-dark);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 14px 18px;
            color: var(--text-primary);
            font-family: 'Inter', sans-serif;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            outline: none;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: var(--accent-gold);
            box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
            color: #484f58;
        }

        .form-group textarea {
            min-height: 140px;
            resize: vertical;
        }

        .submit-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: var(--accent-gold);
            color: var(--bg-dark);
            font-size: 1.05rem;
            font-weight: 600;
            padding: 16px 32px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 12px;
            align-self: flex-start;
        }

        .submit-btn:hover {
            background: var(--accent-gold-light);
            transform: translateY(-3px);
            box-shadow: 0 12px 32px rgba(212, 165, 116, 0.25);
        }

        .submit-btn svg {
            width: 22px;
            height: 22px;
            fill: currentColor;
        }

        /* Success Message */
        .success-message {
            display: none;
            text-align: center;
            padding: 60px 40px;
        }

        .success-message.active {
            display: block;
        }

        .success-message svg {
            width: 72px;
            height: 72px;
            fill: var(--success);
            margin-bottom: 20px;
        }

        .success-message h3 {
            font-size: 1.6rem;
            color: var(--text-primary);
            margin-bottom: 12px;
            font-family: 'Playfair Display', serif;
        }

        .success-message p {
            color: var(--text-secondary);
            font-size: 1rem;
        }

        /* Contact Info */
        .contact-info {
            text-align: center;
            padding: 40px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 12px;
            border: 1px solid var(--border);
        }

        .contact-info h3 {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-primary);
        }

        .contact-info p {
            color: var(--text-secondary);
            font-size: 0.95rem;
        }

        /* Footer */
        .footer {
            background: #0a0c10;
            padding: 60px 40px;
            margin-top: 80px;
            border-top: 1px solid var(--border);
        }

        .footer-container {
            max-width: 900px;
            margin: 0 auto;
        }

        .footer-top {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 60px;
            margin-bottom: 50px;
        }

        .footer-section h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.3rem;
            margin-bottom: 16px;
            color: var(--text-primary);
            font-weight: 600;
        }

        .footer-section p {
            color: var(--text-secondary);
            font-size: 0.9rem;
            line-height: 1.8;
            margin-bottom: 0;
        }

        .footer-links {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .footer-links li {
            margin-bottom: 12px;
        }

        .footer-links a {
            color: var(--text-secondary);
            text-decoration: none;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .footer-links a:hover {
            color: var(--accent-gold);
            padding-left: 4px;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 40px;
            border-top: 1px solid var(--border);
        }

        .footer-bottom p {
            color: #484f58;
            font-size: 0.85rem;
            margin-bottom: 6px;
        }

        .footer-bottom .heart {
            color: #f85149;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .header {
                padding: 60px 20px 40px;
            }

            .header h1 {
                font-size: 2.2rem;
            }

            .container {
                padding: 0 20px 60px;
            }

            .card {
                padding: 32px;
                margin-bottom: 24px;
            }

            .actions-grid {
                grid-template-columns: 1fr;
                gap: 16px;
            }

            .card-title {
                font-size: 1.4rem;
            }

            .footer {
                padding: 40px 20px;
            }

            .footer-top {
                grid-template-columns: 1fr;
                gap: 40px;
            }
        }
    </style>
</head>
<body>

    <!-- Header -->
    <header class="header">
        <h1>Get in Touch</h1>
        <p class="subtitle">MBBS, FCPS Part-I | BMDC Reg. No: 142636 | Jhalakathi Sadar, Jhalakathi, Bangladesh</p>
    </header>

    <div class="container">

        <!-- Preferred Contact: Telegram -->
        <div class="card">
            <div class="card-title">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--telegram);">
                    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 6.498a2.25 2.25 0 0 0 .123 4.283l3.888 1.262a.75.75 0 0 1 .54.72v4.653a.75.75 0 0 0 1.5 0v-3.75a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 .75.75v3.75a.75 0 0 0 1.5 0v-4.653a.75.75 0 0 1 .54-.72l3.888-1.262a2.25 2.25 0 0 0 .123-4.283l-16.5-6.498a2.242 2.242 0 0 0-1.022-.215z"/>
                </svg>
                Preferred Contact Method
            </div>
            <p class="card-desc">Get in touch via Telegram for the fastest response. I typically reply within 1 hour during business hours.</p>
            <a href="https://t.me/Dr_Afroza_Akter_Nishy" target="_blank" class="telegram-btn">
                <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Open Telegram Chat
            </a>
            <div class="response-time">⚡ Response within 1 hour</div>
        </div>

        <!-- Quick Actions -->
        <div class="card">
            <div class="card-title" style="justify-content: center; margin-bottom: 28px;">Quick Actions</div>
            <div class="actions-grid">
                <a href="https://t.me/Dr_Afroza_Akter_Nishy" target="_blank" class="action-btn telegram">
                    <svg viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    Telegram
                </a>
                <a href="mailto:drafroza99@gmail.com" class="action-btn email">
                    <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    Email
                </a>
            </div>
        </div>

        <!-- Send Feedback Form -->
        <div class="card" id="feedbackCard">
            <div class="card-title" style="margin-bottom: 12px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-gold);">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                Send Feedback
            </div>
            <p class="card-desc">Share your thoughts, suggestions, or inquiries. Your feedback is valuable and will be reviewed promptly.</p>
            
            <form class="feedback-form" id="feedbackForm" action="https://formsubmit.co/drafroza99@gmail.com" method="POST">
                <!-- FormSubmit Configuration -->
                <input type="hidden" name="_subject" value="New Feedback from Website - Dr. Afroza">
                <input type="hidden" name="_template" value="table">
                <input type="hidden" name="_captcha" value="false">
                <input type="hidden" name="_next" value="https://your-website.vercel.app/contact.html?feedback=success">
                
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="What is this feedback about?" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Your Feedback</label>
                    <textarea id="message" name="message" placeholder="Write your feedback here..." required></textarea>
                </div>
                
                <button type="submit" class="submit-btn">
                    <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    Send Feedback
                </button>
            </form>

            <!-- Success Message -->
            <div class="success-message" id="successMessage">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <h3>Feedback Sent Successfully!</h3>
                <p>Thank you for reaching out. I will review your feedback and get back to you soon.</p>
            </div>
        </div>

        <!-- Contact Info -->
        <div class="card">
            <div class="card-title" style="justify-content: center; margin-bottom: 24px;">Location</div>
            <div class="contact-info">
                <h3>📍 Office Location</h3>
                <p>Jhalakathi Sadar, Jhalakathi, Bangladesh</p>
            </div>
        </div>

    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-section">
                    <h3>Dr. Afroza</h3>
                    <p>MBBS, FCPS Part-I (Obstetrics & Gynaecology). Dedicated medical professional with a commitment to evidence-based clinical practice, empathy, and continuous learning.</p>
                </div>
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/resume">Resume</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Dr. Afroza. All rights reserved. | BMDC Reg. No: 142636</p>
                <p>Made with <span class="heart">❤</span> for healthcare excellence</p>
            </div>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('feedbackForm');
            const successMessage = document.getElementById('successMessage');
            const feedbackCard = document.getElementById('feedbackCard');

            // Check for success parameter in URL on page load
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('feedback') === 'success') {
                form.style.display = 'none';
                successMessage.classList.add('active');
            }
        });
    </script>
</body>
</html>
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
