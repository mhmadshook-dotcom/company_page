import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routes';
import { useLanguage } from '../../../context/LanguageContext';
import { ICONS, DEFAULT_ICON_PROPS } from '../../../constants/icons';
import './Footer.css';

/**
 * Professional Footer component for software company
 * Features: Multi-column layout, social links, newsletter signup
 */
const Footer = () => {
  const { t } = useLanguage();
  const { FOOTER_TEXT, COMMON_TEXT } = t;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__section footer__section--brand">
            <div className="footer__logo">
              <span className="footer__logo-text">{COMMON_TEXT.brand.logoText}</span>
            </div>
            <p className="footer__tagline">
              {FOOTER_TEXT.brand.tagline}
            </p>
            <div className="footer__social">
              {FOOTER_TEXT.social.map((social) => {
                const IconComponent = ICONS[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="footer__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {IconComponent && <IconComponent size={20} strokeWidth={2} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div className="footer__section">
            <h4 className="footer__section-title">{FOOTER_TEXT.services.title}</h4>
            <ul className="footer__list">
              {FOOTER_TEXT.services.items.map((service) => (
                <li key={service}>
                  <Link to={routes.SERVICES} className="footer__link">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer__section">
            <h4 className="footer__section-title">{FOOTER_TEXT.company.title}</h4>
            <ul className="footer__list">
              {FOOTER_TEXT.company.links.map((item) => (
                <li key={item.label}>
                  {item.path.startsWith('#') ? (
                    <a href={item.path} className="footer__link">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path} className="footer__link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__section">
            <h4 className="footer__section-title">{FOOTER_TEXT.contact.title}</h4>
            <ul className="footer__list footer__list--contact">
              <li>
                <a href={`mailto:${FOOTER_TEXT.contact.email}`} className="footer__link">
                  {FOOTER_TEXT.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${FOOTER_TEXT.contact.phone.replace(/[^0-9+]/g, '')}`} className="footer__link">
                  {FOOTER_TEXT.contact.phone}
                </a>
              </li>
              <li className="footer__address">
                {FOOTER_TEXT.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            {FOOTER_TEXT.bottom.copyright.replace('{year}', currentYear)}
          </div>
          <div className="footer__bottom-links">
            {FOOTER_TEXT.bottom.links.map((link) => (
              <a key={link.label} href={link.path} className="footer__bottom-link">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
