import { Badge, Card, SEO } from '../../components/common';
import { useLanguage } from '../../context/LanguageContext';
import { ICONS, DEFAULT_ICON_PROPS } from '../../constants/icons';
import './AboutPage.css';

/**
 * About Us page for MSS Code
 * Vision, Mission, Values, and Company Mindset
 */
const AboutPage = () => {
  const { t } = useLanguage();
  const { ABOUT_TEXT } = t;

  return (
    <>
      <SEO 
        title={ABOUT_TEXT.seo.title}
        description={ABOUT_TEXT.seo.description}
        keywords={ABOUT_TEXT.seo.keywords}
      />
      <div className="about-page">
      {/* Hero Section */}
      <section className="about-page__hero">
        <div className="about-page__hero-container">
          <Badge variant="primary">{ABOUT_TEXT.hero.badge}</Badge>
          <h1 className="about-page__hero-title">
            {ABOUT_TEXT.hero.title}{' '}
            <span className="about-page__hero-gradient">{ABOUT_TEXT.hero.titleHighlight}</span>
          </h1>
          <p className="about-page__hero-subtitle">
            {ABOUT_TEXT.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-page__stats">
        <div className="about-page__container">
          <div className="about-page__stats-grid">
            {ABOUT_TEXT.stats.map((stat, index) => (
              <div key={index} className="about-stat">
                <div className="about-stat__number">{stat.number}</div>
                <div className="about-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="about-page__vision-mission">
        <div className="about-page__container">
          <div className="about-page__vm-grid">
            <Card hoverable className="about-vm-card">
              <div className="about-vm-card__icon">
                {ICONS.vision && <ICONS.vision {...DEFAULT_ICON_PROPS} />}
              </div>
              <h2 className="about-vm-card__title">{ABOUT_TEXT.vision.badge}</h2>
              <p className="about-vm-card__text">
                {ABOUT_TEXT.vision.description}
              </p>
            </Card>

            <Card hoverable className="about-vm-card">
              <div className="about-vm-card__icon">
                {ICONS.mission && <ICONS.mission {...DEFAULT_ICON_PROPS} />}
              </div>
              <h2 className="about-vm-card__title">{ABOUT_TEXT.mission.badge}</h2>
              <p className="about-vm-card__text">
                {ABOUT_TEXT.mission.description}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-page__values">
        <div className="about-page__container">
          <div className="about-page__section-header">
            <Badge variant="secondary">What We Stand For</Badge>
            <h2 className="about-page__section-title">{ABOUT_TEXT.coreValues.title}</h2>
            <p className="about-page__section-subtitle">
              {ABOUT_TEXT.coreValues.subtitle}
            </p>
          </div>

          <div className="about-page__values-grid">
            {ABOUT_TEXT.coreValues.values.map((value) => {
              const IconComponent = ICONS[value.icon];
              return (
                <div key={value.id} className="about-value-card">
                  <div className="about-value-card__icon">
                    {IconComponent && <IconComponent {...DEFAULT_ICON_PROPS} />}
                  </div>
                  <h3 className="about-value-card__title">{value.title}</h3>
                  <p className="about-value-card__description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Mindset Section */}
      <section className="about-page__mindset">
        <div className="about-page__container">
          <div className="about-page__section-header">
            <Badge variant="info">How We Think</Badge>
            <h2 className="about-page__section-title">{ABOUT_TEXT.mindset.title}</h2>
            <p className="about-page__section-subtitle">
              {ABOUT_TEXT.mindset.subtitle}
            </p>
          </div>

          <div className="about-page__mindset-grid">
            {ABOUT_TEXT.mindset.principles.map((item) => (
              <div key={item.id} className="about-mindset-card">
                <div className="about-mindset-card__number">{item.id}</div>
                <h3 className="about-mindset-card__principle">{item.principle}</h3>
                <p className="about-mindset-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-page__story">
        <div className="about-page__container">
          <Card className="about-story-card">
            <div className="about-story-card__content">
              <h2 className="about-story-card__title">{ABOUT_TEXT.story.title}</h2>
              <div className="about-story-card__text">
                {ABOUT_TEXT.story.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-page__cta">
        <div className="about-page__cta-container">
          <h2 className="about-page__cta-title">{ABOUT_TEXT.cta.title}</h2>
          <p className="about-page__cta-text">
            {ABOUT_TEXT.cta.subtitle}
          </p>
          <div className="about-page__cta-buttons">
            <a href="/contact" className="about-page__cta-btn about-page__cta-btn--primary">
              {ABOUT_TEXT.cta.buttonText}
            </a>
            <a href="#careers" className="about-page__cta-btn about-page__cta-btn--secondary">
              Explore Careers
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPage;
