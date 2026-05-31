import { useEffect, useRef, useState } from 'react';

function Navbar({ headerScrolled, menuOpen, setMenuOpen, activeSection, openSection, sections }) {
  const collapseTimerRef = useRef(null);
  const [brandExpanded, setBrandExpanded] = useState(false);

  useEffect(() => {
    return () => {
      if (collapseTimerRef.current) {
        window.clearTimeout(collapseTimerRef.current);
      }
    };
  }, []);

  const clearCollapseTimer = () => {
    if (collapseTimerRef.current) {
      window.clearTimeout(collapseTimerRef.current);
      collapseTimerRef.current = null;
    }
  };

  const expandBrand = () => {
    clearCollapseTimer();
    setBrandExpanded(true);
  };

  const collapseBrandLater = () => {
    clearCollapseTimer();
    collapseTimerRef.current = window.setTimeout(() => {
      setBrandExpanded(false);
      collapseTimerRef.current = null;
    }, 3000);
  };

  return (
    <header className={`site-header ${headerScrolled ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <button
          className={`brand ${brandExpanded ? 'is-expanded' : ''}`}
          type="button"
          aria-label="Aaryesh Namdeo home"
          onClick={() => openSection('home')}
          onPointerEnter={expandBrand}
          onPointerLeave={collapseBrandLater}
          onMouseEnter={expandBrand}
          onMouseLeave={collapseBrandLater}
          onFocus={expandBrand}
          onBlur={collapseBrandLater}
        >
          <span className="brand-slot" aria-hidden="true">
            <span className="logo logo-compact">AN.</span>
            <span className="logo logo-expanded">Aaryesh Namdeo</span>
          </span>
        </button>

        <nav className="nav-links" aria-label="Primary navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`nav-link ${activeSection === section.id ? 'is-active' : ''}`}
              onClick={() => openSection(section.id)}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="mobileNav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`container mobile-nav ${menuOpen ? 'is-open' : ''}`} id="mobileNav" aria-label="Mobile navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`mobile-nav-link ${activeSection === section.id ? 'is-active' : ''}`}
            onClick={() => openSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Navbar;