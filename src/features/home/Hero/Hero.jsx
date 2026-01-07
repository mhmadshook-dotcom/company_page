import { Link } from 'react-router-dom';
import { Button, Badge } from '../../../components/common';
import { routes } from '../../../routes/routes';
import { useLanguage } from '../../../context/LanguageContext';
import { ICONS, DEFAULT_ICON_PROPS } from '../../../constants/icons';
import './Hero.css';

/**
 * Hero section component for MSS Code home page
 * Modern, engaging hero with strong marketing copy
 */
const Hero = () => {
  const { t } = useLanguage();
  const { hero } = t.HOME_TEXT;

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__grid"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <Badge variant="primary" className="hero__badge">
            {hero.badge}
          </Badge>

          <h1 className="hero__title">
            {hero.title}{' '}
            <span className="hero__title-gradient">{hero.titleHighlight}</span>
          </h1>

          <p className="hero__subtitle">
            {hero.subtitle}
          </p>

          <div className="hero__stats">
            {hero.stats.map((stat, index) => (
              <div key={index} className="hero__stat">
                <span className="hero__stat-number">{stat.number}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__actions">
            <Link to={routes.CONTACT}>
              <Button variant="primary" size="large">
                {hero.buttons.primary}
              </Button>
            </Link>
            <Link to={routes.SERVICES}>
              <Button variant="outline" size="large">
                {hero.buttons.secondary}
              </Button>
            </Link>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-text">{hero.trust.text}</span>
            <div className="hero__trust-logos">
              {hero.trust.companies.map((company, index) => (
                <span key={index} className="hero__trust-logo">{company}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-main">
            <img 
              src="/images/hero/hero-illustration.svg" 
              alt="Professional coding illustration"
              className="hero__visual-image"
            />
          </div>
          
          {/* Floating tech cards */}
          {hero.visualCards.map((card, index) => {
            const IconComponent = ICONS[card.icon];
            return (
              <div key={index} className={`hero__visual-card hero__visual-card--${index + 1}`}>
                <div className="hero__visual-icon">
                  {IconComponent && <IconComponent {...DEFAULT_ICON_PROPS} />}
                </div>
                <span>{card.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
