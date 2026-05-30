import React, { useEffect } from 'react';

function Contact({ activeSection, onSubmit }) {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.L) return undefined;
    if (activeSection !== 'contact') return undefined;

    const mapEl = document.getElementById('leaflet-map');
    if (!mapEl) return undefined;

    const lat = 22.719568;
    const lng = 75.857727;

    const map = window.L.map(mapEl, { scrollWheelZoom: false, attributionControl: false, zoomControl: false }).setView([lat, lng], 13);

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const marker = window.L.marker([lat, lng]).addTo(map);
    marker.bindPopup('Indore, Madhya Pradesh').openPopup();

    setTimeout(() => {
      try {
        map.invalidateSize();
      } catch (e) {
        // ignore
      }
    }, 200);

    const wheelHandler = (ev) => {
      if (!(ev.ctrlKey || ev.metaKey)) return;
      if (ev.cancelable) ev.preventDefault();
      ev.stopPropagation();

      if (ev.deltaY < 0) {
        map.zoomIn();
      } else {
        map.zoomOut();
      }
    };

    mapEl.addEventListener('wheel', wheelHandler, { passive: false, capture: true });

    return () => {
      try {
        mapEl.removeEventListener('wheel', wheelHandler, { capture: true });
        map.remove();
      } catch (e) {
        // ignore
      }
    };
  }, [activeSection]);

  return (
    <div className="container content-panel panel-detail panel-contact">
      <div className="section-header contact-section-title">
        <h2>Contact</h2>
        <p>Have an idea, project, or opportunity in mind?<br/>I'd love to hear from you and explore how we can work together.</p>
      </div>

      <div className="contact-layout">
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
                <div className="contact-heading">Address</div>
                <div className="contact-value">Sagar Boys Hostel, Opp. Svvv, Indore - 453555</div>
              </div>
            </div>

            <div className="contact-info-card info-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.8.29 1.56.5 2.31a2 2 0 0 1-.45 1.94L8.9 9.9a16 16 0 0 0 6 6l1.92-1.92a2 2 0 0 1 1.94-.45c.75.21 1.51.38 2.31.5A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contact-content">
                <div className="contact-heading">Call Us</div>
                <div className="contact-value">+91 7248979986</div>
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
                <div className="contact-heading">Email Us</div>
                <div className="contact-value">aaryesh364.com</div>
              </div>
            </div>

            <div className="map-wrap contact-map">
              <div id="leaflet-map" className="contact-leaflet-map" />
            </div>
          </div>
        </aside>

        <div className="contact-panel contact-form-panel php-email-form">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Your Email</label>
                <input id="email" name="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="field full">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Project inquiry, internship, or collaboration" />
              </div>
              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Write your message here..." />
              </div>
            </div>
            <button className="btn submit-btn" type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;