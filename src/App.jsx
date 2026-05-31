import { useCallback, useEffect, useRef, useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
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
  { id: 'resume', label: 'Resume' },
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
  const [showLoader, setShowLoader] = useState(true);
  const handleLoaderDone = useCallback(() => setShowLoader(false), []);
  const getInitialSection = () => {
    try {
      const hash = window.location.hash.replace('#', '');
      const valid = ['home', 'about', 'resume', 'skills', 'projects', 'contact'];
      return valid.includes(hash) ? hash : 'home';
    } catch (e) {
      return 'home';
    }
  };

  const [activeSection, setActiveSection] = useState(getInitialSection);
  const cursorRef = useRef(null);
  const contentShellRef = useRef(null);
  const edgeScrollRef = useRef({
    edgeScrollCount: 0,
    isInScrollSession: false,
    sessionTimer: null,
    resetTimer: null,
    navCooldownTimer: null,
    isNavigating: false,
    pendingScrollDirection: null,
    lastEdgeDirection: null,
  });
  const typedSubtitle = useTypewriter(subtitleText, activeSection === 'home');

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const container = contentShellRef.current;
    if (!container) return undefined;

    const state = edgeScrollRef.current;
    const touchState = {
      startX: 0,
      startY: 0,
      lastX: 0,
      lastY: 0,
      active: false,
      tracking: false,
    };

    const clearEdgeScrollState = () => {
      state.edgeScrollCount = 0;
      state.isInScrollSession = false;
      state.lastEdgeDirection = null;
      if (state.sessionTimer) {
        window.clearTimeout(state.sessionTimer);
        state.sessionTimer = null;
      }
      if (state.resetTimer) {
        window.clearTimeout(state.resetTimer);
        state.resetTimer = null;
      }
    };

    const clearNavigationCooldown = () => {
      state.isNavigating = false;
      if (state.navCooldownTimer) {
        window.clearTimeout(state.navCooldownTimer);
        state.navCooldownTimer = null;
      }
    };

    const isInsideLeafletMap = (target) => {
      if (!(target instanceof Element)) return false;
      return Boolean(target.closest('#leaflet-map'));
    };

    const isTouchPointInsideLeafletMap = (touch) => {
      if (!touch) return false;
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      return isInsideLeafletMap(target);
    };

    const getNextSection = (direction) => {
      const currentIndex = sections.findIndex((section) => section.id === activeSection);
      if (currentIndex < 0) return null;

      const nextIndex = direction === 'down' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex < 0 || nextIndex >= sections.length) return null;

      return sections[nextIndex]?.id ?? null;
    };

    const triggerNavigation = (direction) => {
      state.edgeScrollCount = 0;
      state.isInScrollSession = false;
      state.lastEdgeDirection = null;
      if (state.sessionTimer) {
        window.clearTimeout(state.sessionTimer);
        state.sessionTimer = null;
      }
      if (state.resetTimer) {
        window.clearTimeout(state.resetTimer);
        state.resetTimer = null;
      }

      state.isNavigating = true;
      if (state.navCooldownTimer) {
        window.clearTimeout(state.navCooldownTimer);
      }
      state.navCooldownTimer = window.setTimeout(() => {
        state.isNavigating = false;
        state.navCooldownTimer = null;
      }, 1000);

      const targetSection = getNextSection(direction);
      if (targetSection) {
        state.pendingScrollDirection = direction === 'down' ? 'top' : 'bottom';
        openSection(targetSection);
      }
    };

    const resetIfAwayFromEdge = () => {
      const atTop = container.scrollTop <= 1;
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;
      if (!atTop && !atBottom) {
        clearEdgeScrollState();
      }
    };

    const onWheel = (event) => {
      if (state.isNavigating) {
        event.preventDefault();
        return;
      }

      if (isInsideLeafletMap(event.target)) return;

      const deltaMagnitude = Math.abs(event.deltaY);
      if (deltaMagnitude < 12) return;

      const direction = event.deltaY > 0 ? 'down' : event.deltaY < 0 ? 'up' : null;
      if (!direction) return;

      const atTop = container.scrollTop <= 1;
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;
      const atEdge = (direction === 'down' && atBottom) || (direction === 'up' && atTop);

      if (!atEdge) {
        clearEdgeScrollState();
        return;
      }

      event.preventDefault();

      if (!state.isInScrollSession) {
        state.isInScrollSession = true;

        if (state.lastEdgeDirection !== direction) {
          state.edgeScrollCount = 0;
          state.lastEdgeDirection = direction;
        }

        state.edgeScrollCount += 1;

        if (state.resetTimer) {
          window.clearTimeout(state.resetTimer);
        }
        state.resetTimer = window.setTimeout(() => {
          clearEdgeScrollState();
        }, 900);
      }

      if (state.sessionTimer) {
        window.clearTimeout(state.sessionTimer);
      }
      state.sessionTimer = window.setTimeout(() => {
        state.isInScrollSession = false;
      }, 120);

      if (state.edgeScrollCount >= 2) {
        triggerNavigation(direction);
      }
    };

    const onTouchStart = (event) => {
      if (event.touches.length !== 1) {
        touchState.tracking = false;
        touchState.active = false;
        return;
      }

      const touch = event.touches[0];
      if (isTouchPointInsideLeafletMap(touch)) {
        touchState.tracking = false;
        touchState.active = false;
        return;
      }

      touchState.startX = touch.clientX;
      touchState.startY = touch.clientY;
      touchState.lastX = touch.clientX;
      touchState.lastY = touch.clientY;
      touchState.active = true;
      touchState.tracking = true;
    };

    const onTouchMove = (event) => {
      if (!touchState.tracking || event.touches.length !== 1) return;

      const touch = event.touches[0];
      const deltaX = touch.clientX - touchState.startX;
      const deltaY = touch.clientY - touchState.startY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX > absY && absX > 18) {
        touchState.tracking = false;
        touchState.active = false;
        return;
      }

      touchState.lastX = touch.clientX;
      touchState.lastY = touch.clientY;
    };

    const onTouchEnd = () => {
      if (!touchState.tracking || !touchState.active || state.isNavigating) {
        touchState.tracking = false;
        touchState.active = false;
        return;
      }

      const deltaY = touchState.lastY - touchState.startY;
      const deltaX = touchState.lastX - touchState.startX;
      const absY = Math.abs(deltaY);
      const absX = Math.abs(deltaX);

      touchState.tracking = false;
      touchState.active = false;

      if (absY < 70 || absY < absX) return;

      const direction = deltaY < 0 ? 'down' : 'up';
      const atTop = container.scrollTop <= 1;
      const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 1;
      const atEdge = (direction === 'down' && atBottom) || (direction === 'up' && atTop);

      if (atEdge) {
        triggerNavigation(direction);
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('scroll', resetIfAwayFromEdge, { passive: true });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });
    container.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('scroll', resetIfAwayFromEdge);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      container.removeEventListener('touchcancel', onTouchEnd);
      clearEdgeScrollState();
      clearNavigationCooldown();
    };
  }, [activeSection]);

  useEffect(() => {
    const shell = contentShellRef.current;
    const state = edgeScrollRef.current;
    if (!shell) return undefined;

    const timer = window.requestAnimationFrame(() => {
      if (state.pendingScrollDirection === 'top') {
        shell.scrollTop = 0;
      } else if (state.pendingScrollDirection === 'bottom') {
        shell.scrollTop = shell.scrollHeight;
      } else {
        shell.scrollTop = 0;
      }
      state.pendingScrollDirection = null;
    });

    return () => window.cancelAnimationFrame(timer);
  }, [activeSection]);

  // Apply staggered reveal animations to all elements inside the current
  // content panel when the active section changes — exclude the home
  // `portrait-image` so the artwork does not animate.
  useEffect(() => {
    // small delay so the DOM for the new section has rendered
    const timer = setTimeout(() => {
      try {
        const panel = document.querySelector('.content-panel');
        if (!panel) return;

        // collect visible elements inside the panel, excluding the portrait image
        const all = Array.from(panel.querySelectorAll('*'))
          .filter((el) => {
            if (!(el instanceof HTMLElement)) return false;
            if (el.classList.contains('portrait-image')) return false;
            // don't animate the Leaflet map or anything inside the map container
            if (el.id === 'leaflet-map') return false;
            if (el.closest && el.closest('.contact-map')) return false;
            // also avoid animating ancestors of the map (they can contain transforms that break Leaflet)
            try {
              if (el.querySelector && el.querySelector('#leaflet-map')) return false;
            } catch (e) {
              // ignore
            }
            // skip global decor or shapes
            if (el.closest && el.closest('.page-decor')) return false;
            // skip elements with no layout size
            const rect = el.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) return false;
            return true;
          });

        let delay = 20; // start small
        for (const el of all) {
          // reset any previous inline animation so it restarts
          el.style.animation = 'none';
          el.style.opacity = '0';
          el.style.transform = 'translateY(10px)';
          // apply staggered fadeUp animation (defined in CSS)
          el.style.animation = `fadeUp 0.32s cubic-bezier(.2,.9,.2,1) both`;
          el.style.animationDelay = `${delay}ms`;
          delay += 20; // stagger step
        }
      } catch (e) {
        // ignore
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return undefined;
    }

    let frame = 0;
    let lastTrailTime = 0;
    let lastTrailX = window.innerWidth / 2;
    let lastTrailY = window.innerHeight / 2;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };

    const spawnLeafTrail = (x, y) => {
      const leaf = document.createElement('span');
      const drift = (Math.random() * 44 - 22).toFixed(2);
      const fall = (108 + Math.random() * 68).toFixed(2);
      const spin = (Math.random() * 180 - 90).toFixed(2);
      const scale = (0.7 + Math.random() * 0.35).toFixed(2);
      const startRotate = (Math.random() * 60 - 30).toFixed(2);

      leaf.className = 'leaf-trail';
      leaf.style.left = `${x}px`;
      leaf.style.top = `${y}px`;
      leaf.style.setProperty('--leaf-drift', `${drift}px`);
      leaf.style.setProperty('--leaf-fall', `${fall}px`);
      leaf.style.setProperty('--leaf-spin', `${spin}deg`);
      leaf.style.setProperty('--leaf-scale', scale);
      leaf.style.setProperty('--leaf-rotate', `${startRotate}deg`);
      document.body.appendChild(leaf);

      window.setTimeout(() => {
        leaf.remove();
      }, 1500);
    };

    const update = () => {
      cursor.style.transform = `translate(${target.x}px, ${target.y}px) translate(-50%, -50%)`;
      cursor.classList.toggle('is-active', target.active);
      frame = 0;
    };

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
      target.active = true;

      const now = performance.now();
      const distance = Math.hypot(target.x - lastTrailX, target.y - lastTrailY);
      // Increase density: allow more frequent spawns and on smaller movements.
      if (now - lastTrailTime > 80 && distance > 18) {
        spawnLeafTrail(target.x, target.y);
        // occasionally spawn an extra leaf nearby for a denser effect
        if (Math.random() < 0.35) {
          const ox = (Math.random() * 24) - 12;
          const oy = (Math.random() * 24) - 12;
          spawnLeafTrail(target.x + ox, target.y + oy);
        }
        lastTrailTime = now;
        lastTrailX = target.x;
        lastTrailY = target.y;
      }

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
      {showLoader && <Loader onDone={handleLoaderDone} />}
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
        <section ref={contentShellRef} className="content-shell" aria-label={`${activeSection} content`}>
          {/* Global decorative shapes (appear behind all pages) */}
          <div className="page-decor" aria-hidden="true">
            <span className="shape s1" />
            <span className="shape s2" />
            <span className="shape s3" />
          </div>
          {activeSection === 'home' && <Hero typedSubtitle={typedSubtitle} openSection={openSection} />}
          {activeSection === 'about' && <About />}
          {activeSection === 'resume' && <Resume />}
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
            <a className="social-link" href="https://github.com/iamaaryesh-n" aria-label="GitHub" target="_blank" rel="noreferrer">
              <SocialIcon type="github" />
              <span>GitHub</span>
            </a>
            <a className="social-link" href="mailto:aaryesh364@gmail.com" aria-label="Gmail">
              <SocialIcon type="mail" />
              <span>Gmail</span>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/aaryesh-namdeo-29294a1b4/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <SocialIcon type="linkedin" />
              <span>LinkedIn</span>
            </a>
            <a className="social-link" href="https://www.instagram.com/iamaaryesh_n/" aria-label="Instagram" target="_blank" rel="noreferrer">
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