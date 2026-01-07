import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../../routes/routes';
import { ThemeToggle, LanguageSwitcher, Logo } from '../../common';
import { useLanguage } from '../../../context/LanguageContext';
import './Header.css';

/**
 * Professional Navbar component for software company
 * Features: Responsive design, smooth scrolling, active link highlighting
 */
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const { NAVIGATION_TEXT, COMMON_TEXT } = t;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { path: routes.HOME, label: NAVIGATION_TEXT.nav.home },
    { path: routes.ABOUT, label: NAVIGATION_TEXT.nav.about },
    { path: routes.SERVICES, label: NAVIGATION_TEXT.nav.services },
    { path: routes.PROJECTS, label: NAVIGATION_TEXT.nav.projects },
    { path: routes.CONTACT, label: NAVIGATION_TEXT.nav.contact },
  ];

  return (
    <>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="navbar__overlay" 
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      
      <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
        <Link 
          to={routes.HOME} 
          className="navbar__logo" 
          onClick={(e) => {
            closeMenu();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <Logo variant="full" size="small" />
        </Link>

        <nav className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}>
          <ul className="navbar__nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__nav-link ${
                    location.pathname === link.path ? 'navbar__nav-link--active' : ''
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar__cta">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link to={routes.CONTACT} className="navbar__cta-btn" onClick={closeMenu}>
              {COMMON_TEXT.buttons.getStarted}
            </Link>
          </div>
        </nav>

        <button
          className={`navbar__menu-toggle ${isMenuOpen ? 'navbar__menu-toggle--active' : ''}`}
          onClick={toggleMenu}
          aria-label={NAVIGATION_TEXT.aria.toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    </>
  );
};

export default Navbar;
