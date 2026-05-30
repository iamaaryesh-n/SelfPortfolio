import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialIcon from './components/SocialIcon';
import './styles/base.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/footer.css';

const subtitleText = 'Engineering calm, practical systems for the web and AI.';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function useTypewriter(text, enabled) {
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!enabled) {
      setOutput('');
      return undefined;
    }

    setOutput('');
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setOutput(text.slice(0, index));
      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 42);

    return () => window.clearInterval(timer);
  }, [text, enabled]);

  return output;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const cursorRef = useRef(null);
  const typedSubtitle = useTypewriter(subtitleText, activeSection === 'home');

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return undefined;
    }

    let frame = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };

    const update = () => {
      cursor.style.transform = `translate(${target.x}px, ${target.y}px) translate(-50%, -50%)`;
      cursor.classList.toggle('is-active', target.active);
      frame = 0;
    };

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      target.active = true;
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    const onLeave = () => {
      target.active = false;
      cursor.classList.remove('is-active');
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openSection = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const button = event.currentTarget.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Message Ready';
    button.disabled = true;
    window.setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 1400);
  };

  return (
    <div className="app-shell">
      <div className="custom-cursor" ref={cursorRef} aria-hidden="true" />
      <Navbar
        headerScrolled={headerScrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        openSection={openSection}
        sections={sections}
      />

      <main className="app-main">
        <section className="content-shell" aria-label={`${activeSection} content`}>
          {activeSection === 'home' && <Hero typedSubtitle={typedSubtitle} openSection={openSection} />}
          {activeSection === 'about' && <About />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'projects' && <Projects openSection={openSection} />}
          {activeSection === 'contact' && <Contact activeSection={activeSection} onSubmit={onSubmit} />}

          <div className="content-watermark" aria-hidden="true">
            <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" fill="none">
              <circle cx="110" cy="110" r="72" stroke="#D4697A" strokeWidth="1.2" opacity="0.18" />
              <path d="M110 24c-18 14-29 33-29 53 0 24 13 44 29 56 16-12 29-32 29-56 0-20-11-39-29-53Z" fill="#D4697A" opacity="0.15" />
            </svg>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-copyright">© 2026 Aaryesh Namdeo</div>
          <div className="footer-social" aria-label="Social links">
            <a className="social-link" href="#" aria-label="GitHub">
              <SocialIcon type="github" />
              <span>GitHub</span>
            </a>
            <a className="social-link" href="#" aria-label="Gmail">
              <SocialIcon type="mail" />
              <span>Gmail</span>
            </a>
            <a className="social-link" href="#" aria-label="LinkedIn">
              <SocialIcon type="linkedin" />
              <span>LinkedIn</span>
            </a>
            <a className="social-link" href="#" aria-label="Instagram">
              <SocialIcon type="instagram" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
