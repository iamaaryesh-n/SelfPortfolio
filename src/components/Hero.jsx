import React, { useState, useEffect, useRef } from 'react';
import portfolioImage from '../assets/avtar.png';

function Hero({ openSection }) {
  const roles = [
    'Full Stack Developer',
    'Engineering Student · AI Builder',
    'MERN · Python · ML',
    'Building real-world systems',
  ];

  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, 90);
      } else {
        // Pause at end before deleting
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => i + 1);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);
  return (
    <div className="container hero-grid content-panel panel-home">
      <div className="hero-copy">
        <div className="hero-badge" aria-label="Open to Internships & Collaborations">
          <span className="hero-badge-icon" aria-hidden="true">🌸</span>
          <span>Open to Internships &amp; Collaborations</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-intro">Hi, I'm</span>
          <span className="hero-name">Aaryesh Namdeo</span>
        </h1>
        <div className="hero-subtitle" aria-live="polite">
          <span>{displayText}</span>
          <span className="typing-caret" aria-hidden="true" />
        </div>
        <p className="hero-desc">I’m a third-year Computer Science Engineering student passionate about building modern web applications and solving real-world problems through technology. My focus is on creating practical, scalable solutions while continuously expanding my knowledge of software development and intelligent systems.</p>
        <div className="cta-row">
          <button className="btn" type="button" onClick={() => openSection('projects')}>
            View Projects
          </button>
          <button className="btn secondary" type="button" onClick={() => openSection('contact')}>
            Get In Touch
          </button>
        </div>
        {/* Stats cards removed as requested */}
      </div>

      <div className="portrait-panel portrait-panel-image">
        <div className="portrait-frame portrait-frame-image">
          <img className="portrait-image" src={portfolioImage} alt="Aaryesh Namdeo" />
        </div>
        {/* portrait meta removed per request */}
      </div>
    </div>
  );
}

export default Hero;