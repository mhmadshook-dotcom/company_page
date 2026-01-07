import { useLanguage } from '../../../context/LanguageContext';
import { ICONS, DEFAULT_ICON_PROPS } from '../../../constants/icons';
import './TrustSection.css';

/**
 * Trust Section - Social Proof
 * Displays company achievements and trust indicators
 */
const TrustSection = () => {
  const { t } = useLanguage();
  const { trustSection } = t.HOME_TEXT;

  return (
    <section className="trust-section">
      <div className="trust-section__container">
        {/* Achievements */}
        <div className="trust-section__achievements">
          <div className="trust-section__header">
            <h2 className="trust-section__title">
              {trustSection.title}
            </h2>
            <p className="trust-section__subtitle">
              {trustSection.subtitle}
            </p>
          </div>

          <div className="trust-section__stats">
            {trustSection.achievements.map((achievement) => (
              <div key={achievement.id} className="trust-stat">
                <div className="trust-stat__number">{achievement.number}</div>
                <div className="trust-stat__label">{achievement.label}</div>
                <div className="trust-stat__description">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="trust-section__testimonials">
          <h3 className="trust-section__testimonials-title">
            {trustSection.testimonialsTitle}
          </h3>
          
          <div className="trust-section__testimonials-grid">
            {trustSection.testimonials.map((testimonial) => {
              const AvatarIcon = ICONS[testimonial.avatar];
              return (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-card__quote">"</div>
                <p className="testimonial-card__text">{testimonial.quote}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {AvatarIcon && <AvatarIcon {...DEFAULT_ICON_PROPS} />}
                  </div>
                  <div className="testimonial-card__info">
                    <div className="testimonial-card__name">{testimonial.author}</div>
                    <div className="testimonial-card__role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
