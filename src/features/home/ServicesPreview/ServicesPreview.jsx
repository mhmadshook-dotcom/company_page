import { Card, Badge } from '../../../components/common';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routes';
import { useLanguage } from '../../../context/LanguageContext';
import { ICONS, DEFAULT_ICON_PROPS } from '../../../constants/icons';
import './ServicesPreview.css';

/**
 * Services Preview Section
 * Showcases core services with modern card design
 */
const ServicesPreview = () => {
  const { t } = useLanguage();
  const { servicesPreview } = t.HOME_TEXT;
  const { COMMON_TEXT } = t;

  const badgeVariants = {
    'Popular': 'primary',
    'Trending': 'secondary',
    'Enterprise': 'info',
    'New': 'success',
    'Creative': 'warning',
    'Critical': 'error'
  };

  return (
    <section className="services-preview">
      <div className="services-preview__container">
        <div className="services-preview__header">
          <Badge variant="primary">{servicesPreview.badge}</Badge>
          <h2 className="services-preview__title">
            {servicesPreview.title}
          </h2>
          <p className="services-preview__subtitle">
            {servicesPreview.subtitle}
          </p>
        </div>

        <div className="services-preview__grid">
          {servicesPreview.services.map((service) => {
            const IconComponent = ICONS[service.icon];
            return (
              <Card key={service.id} hoverable className="service-card">
                <div className="service-card__badge">
                  <Badge variant={badgeVariants[service.badge]} size="small">
                    {service.badge}
                  </Badge>
                </div>
                <div className="service-card__icon">
                  {IconComponent && <IconComponent {...DEFAULT_ICON_PROPS} />}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <ul className="service-card__features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <span className="service-card__check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="services-preview__cta">
          <Link to={routes.SERVICES} className="services-preview__link">
            {COMMON_TEXT.buttons.seeAll} {COMMON_TEXT.labels.services}
            <span className="services-preview__arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
