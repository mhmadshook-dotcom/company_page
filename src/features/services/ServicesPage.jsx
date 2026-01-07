import { ServiceCard, Badge, Button, SEO } from '../../components/common';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useLanguage } from '../../context/LanguageContext';
import './ServicesPage.css';

/**
 * Services Page - Comprehensive service offerings
 * Focuses on business value and outcomes
 */
const ServicesPage = () => {
  const { t } = useLanguage();
  const { SERVICES_TEXT, COMMON_TEXT } = t;
  
  return (
    <>
      <SEO 
        title={SERVICES_TEXT.seo.title}
        description={SERVICES_TEXT.seo.description}
        keywords={SERVICES_TEXT.seo.keywords}
      />
      <div className="services-page">
      {/* Hero Section */}
      <section className="services-page__hero">
        <div className="services-page__hero-container">
          <Badge variant="primary">{SERVICES_TEXT.hero.badge}</Badge>
          <h1 className="services-page__hero-title">
            {SERVICES_TEXT.hero.title}{' '}
            <span className="services-page__hero-gradient">{SERVICES_TEXT.hero.titleHighlight}</span>
          </h1>
          <p className="services-page__hero-subtitle">
            {SERVICES_TEXT.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-page__services">
        <div className="services-page__container">
          <div className="services-page__grid">
            {SERVICES_TEXT.services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                badge={service.badge}
                badgeVariant={service.badgeVariant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-page__cta">
        <div className="services-page__cta-container">
          <Badge variant="secondary">{SERVICES_TEXT.cta.badge}</Badge>
          <h2 className="services-page__cta-title">
            {SERVICES_TEXT.cta.title}
          </h2>
          <p className="services-page__cta-text">
            {SERVICES_TEXT.cta.subtitle}
          </p>
          <div className="services-page__cta-actions">
            <Link to={routes.CONTACT}>
              <Button variant="primary" size="large">
                {SERVICES_TEXT.cta.buttonText}
              </Button>
            </Link>
            <Link to={routes.ABOUT}>
              <Button variant="outline" size="large">
                {COMMON_TEXT.buttons.learnMore}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ServicesPage;
