import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

/*
  ─────────────────────────────────────────────────
  SETUP (one-time, 5 minutes):
  1. Go to https://www.emailjs.com and create a free account
  2. Add a Service (Gmail recommended) → copy SERVICE_ID
  3. Create an Email Template → copy TEMPLATE_ID
     Template variables to use: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
  4. Go to Account → API Keys → copy PUBLIC_KEY
  5. Replace the three constants below
  ─────────────────────────────────────────────────
*/
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact({ activeSection }) {
  const formRef = useRef(null);
  const mapInitialized = useRef(false);

  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  /* ── LEAFLET MAP ── */
  useEffect(() => {
    if (typeof window === 'undefined' || !window.L) return undefined;
    if (activeSection !== 'contact') return undefined;
    if (mapInitialized.current) return undefined;

    const mapEl = document.getElementById('leaflet-map');
    if (!mapEl) return undefined;

    mapInitialized.current = true;

    const lat = 22.719568;
    const lng = 75.857727;

    const map = window.L.map(mapEl, {
      scrollWheelZoom: false,
      attributionControl: false,
      zoomControl: false,
    }).setView([lat, lng], 13);

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    const marker = window.L.marker([lat, lng]).addTo(map);
    marker.bindPopup('Indore, Madhya Pradesh').openPopup();

    setTimeout(() => {
      try { map.invalidateSize(); } catch (e) { /* ignore */ }
    }, 200);

    const wheelHandler = (ev) => {
      if (!(ev.ctrlKey || ev.metaKey)) return;
      if (ev.cancelable) ev.preventDefault();
      ev.stopPropagation();
      if (ev.deltaY < 0) map.zoomIn();
      else map.zoomOut();
    };

    mapEl.addEventListener('wheel', wheelHandler, { passive: false, capture: true });

    return () => {
      try {
        mapEl.removeEventListener('wheel', wheelHandler, { capture: true });
        map.remove();
        mapInitialized.current = false;
      } catch (e) { /* ignore */ }
    };
  }, [activeSection]);

  /* ── FORM SUBMIT ── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const form = formRef.current;
    const name    = form.from_name.value.trim();
    const email   = form.from_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMsg('Please fill in all fields before sending.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <div className="container content-panel panel-detail panel-contact">
      <div className="section-header contact-section-title">
        <h2>Contact</h2>
        <p>
          Have an idea, project, or opportunity in mind?<br />
          I'd love to hear from you and explore how we can work together.
        </p>
      </div>

      <div className="contact-layout">

        {/* ── LEFT: Info + Map ── */}
        <aside className="contact-panel info-wrap">
          <div className="contact-stack">

            <div className="contact-info-card info-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
                  <circle cx="12" cy="10" r="2.2" />
                </svg>
              </div>
              <div className="contact-content">
                <div className="contact-heading">Location</div>
                <div className="contact-value">Sagar Boys Hostel, Opp. SVVV, Indore — 453555</div>
              </div>
            </div>

            <div className="contact-info-card info-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.8.29 1.56.5 2.31a2 2 0 0 1-.45 1.94L8.9 9.9a16 16 0 0 0 6 6l1.92-1.92a2 2 0 0 1 1.94-.45c.75.21 1.51.38 2.31.5A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-content">
                <div className="contact-heading">Phone</div>
                <a className="contact-value contact-link" href="tel:+917248979986">+91 72489 79986</a>
              </div>
            </div>

            <div className="contact-info-card info-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </div>
              <div className="contact-content">
                <div className="contact-heading">Email</div>
                <a className="contact-value contact-link" href="mailto:aaryesh364@gmail.com">
                  aaryesh364@gmail.com
                </a>
              </div>
            </div>

            <div className="map-wrap contact-map">
              <div id="leaflet-map" className="contact-leaflet-map" />
            </div>

          </div>
        </aside>

        {/* ── RIGHT: Form ── */}
        <div className="contact-panel contact-form-panel php-email-form">
          <form
            className="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-grid">
              <div className="field">
                <label htmlFor="from_name">Your Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Aaryesh Namdeo"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="from_email">Your Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="field full">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, internship, or collaboration"
                  required
                />
              </div>
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  required
                />
              </div>
            </div>

            {/* Status feedback */}
            {status === 'error' && (
              <div className="form-feedback form-feedback--error">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {errorMsg}
              </div>
            )}
            {status === 'success' && (
              <div className="form-feedback form-feedback--success">
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></svg>
                Message sent! I'll get back to you soon.
              </div>
            )}

            <button
              className="btn submit-btn"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="btn-spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;