import { Link } from 'react-router-dom';
import { Button } from '../../../components/common';
import { routes } from '../../../routes/routes';
import { useLanguage } from '../../../context/LanguageContext';
import './CTASection.css';

/**
 * CTA (Call-to-Action) Section
 * Final conversion section with strong call to action
 */
const CTASection = () => {
  const { t } = useLanguage();
  const { ctaSection } = t.HOME_TEXT;
  const { COMMON_TEXT } = t;

  return (
    <section className="cta-section">
      <div className="cta-section__background">
        <div className="cta-section__gradient"></div>
      </div>

      <div className="cta-section__container">
        <div className="cta-section__content">
          <h2 className="cta-section__title">
            {ctaSection.title}
          </h2>
          <p className="cta-section__subtitle">
            {ctaSection.subtitle}
          </p>

          <div className="cta-section__actions">
            <Link to={routes.CONTACT}>
              <Button variant="primary" size="large">
                {ctaSection.buttonText}
              </Button>
            </Link>
            <Link to={routes.SERVICES}>
              <Button variant="outline" size="large">
                {COMMON_TEXT?.buttons?.exploreServices || 'Explore Services'}
              </Button>
            </Link>
          </div>

          <div className="cta-section__features">
            {ctaSection.features.map((feature, index) => (
              <div key={index} className="cta-feature">
                <div className="cta-feature__icon">✓</div>
                <span>{feature.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
