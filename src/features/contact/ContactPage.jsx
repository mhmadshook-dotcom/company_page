import { useState } from 'react';
import { Button, Badge, SEO } from '../../components/common';
import { useLanguage } from '../../context/LanguageContext';
import { ICONS, DEFAULT_ICON_PROPS } from '../../constants/icons';
import './ContactPage.css';

/**
 * Contact page for MSS Code
 * Optimized for lead conversion with contact form and WhatsApp CTA
 */
const ContactPage = () => {
  const { t } = useLanguage();
  const { CONTACT_TEXT } = t;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting MSS Code! We will get back to you within 24 hours.');
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '' 
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = CONTACT_TEXT.hero.whatsapp.phone.replace(/\D/g, '');
    const message = encodeURIComponent('Hi MSS Code! I\'m interested in discussing a project with you.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <SEO 
        title={CONTACT_TEXT.seo.title}
        description={CONTACT_TEXT.seo.description}
        keywords={CONTACT_TEXT.seo.keywords}
      />
      <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-page__hero">
        <div className="contact-page__hero-container">
          <Badge variant="primary">{CONTACT_TEXT.hero.badge}</Badge>
          <h1 className="contact-page__hero-title">
            {CONTACT_TEXT.hero.title}{' '}
            <span className="contact-page__hero-gradient">{CONTACT_TEXT.hero.titleHighlight}</span>
          </h1>
          <p className="contact-page__hero-subtitle">
            {CONTACT_TEXT.hero.subtitle}
          </p>
          
          {/* WhatsApp CTA - Primary */}
          <button 
            className="contact-page__whatsapp-btn"
            onClick={handleWhatsAppClick}
          >
            <span className="contact-page__whatsapp-icon">💬</span>
            <div className="contact-page__whatsapp-content">
              <span className="contact-page__whatsapp-title">{CONTACT_TEXT.hero.whatsapp.buttonText}</span>
              <span className="contact-page__whatsapp-subtitle">{CONTACT_TEXT.hero.whatsapp.subtitle}</span>
            </div>
          </button>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="contact-page__response">
        <div className="contact-page__container">
          <div className="contact-page__response-grid">
            {CONTACT_TEXT.socialProof.stats.map((item, index) => (
              <div key={index} className="response-item">
                <div className="response-item__label">{item.label}</div>
                <div className="response-item__value">{item.number}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-page__content">
        <div className="contact-page__container">
          <div className="contact-page__grid">
            {/* Contact Form */}
            <div className="contact-page__form-section">
              <div className="contact-page__form-header">
                <h2 className="contact-page__form-title">{CONTACT_TEXT.form.title}</h2>
                <p className="contact-page__form-subtitle">
                  {CONTACT_TEXT.form.subtitle}
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="name">{CONTACT_TEXT.form.fields.name.label} *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={CONTACT_TEXT.form.fields.name.placeholder}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{CONTACT_TEXT.form.fields.email.label} *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={CONTACT_TEXT.form.fields.email.placeholder}
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="phone">{CONTACT_TEXT.form.fields.phone.label}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={CONTACT_TEXT.form.fields.phone.placeholder}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">{CONTACT_TEXT.form.fields.company.label}</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={CONTACT_TEXT.form.fields.company.placeholder}
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="service">{CONTACT_TEXT.form.fields.service.label} *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      {CONTACT_TEXT.form.fields.service.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">{CONTACT_TEXT.form.fields.budget.label}</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      {CONTACT_TEXT.form.fields.budget.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{CONTACT_TEXT.form.fields.message.label} *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={CONTACT_TEXT.form.fields.message.placeholder}
                    rows={CONTACT_TEXT.form.fields.message.rows}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : CONTACT_TEXT.form.submitButton}
                </Button>

                <p className="contact-form__privacy">
                  By submitting this form, you agree to our privacy policy. 
                  We'll never share your information.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="contact-page__sidebar">
              {/* WhatsApp Card */}
              <div className="contact-card contact-card--whatsapp">
                <div className="contact-card__icon">💬</div>
                <h3 className="contact-card__title">{CONTACT_TEXT.contactInfo.whatsappCard.title}</h3>
                <p className="contact-card__text">
                  {CONTACT_TEXT.contactInfo.whatsappCard.description}
                </p>
                <button 
                  className="contact-card__whatsapp-btn"
                  onClick={handleWhatsAppClick}
                >
                  <span>{CONTACT_TEXT.contactInfo.whatsappCard.buttonText}</span>
                  <span className="contact-card__arrow">→</span>
                </button>
              </div>

              {/* Contact Methods */}
              <div className="contact-card">
                <h3 className="contact-card__title">{CONTACT_TEXT.contactInfo.title}</h3>
                <div className="contact-methods">
                  {CONTACT_TEXT.contactInfo.methods.map((method) => {
                    const IconComponent = ICONS[method.icon];
                    return (
                      <a 
                        key={method.id}
                        href={method.link}
                        className="contact-method"
                        target={method.link && method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link && method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <span className="contact-method__icon">
                          {IconComponent && <IconComponent {...DEFAULT_ICON_PROPS} />}
                        </span>
                        <div className="contact-method__content">
                          <div className="contact-method__title">{method.title}</div>
                          <div className="contact-method__value">{method.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Trust Signals */}
              <div className="contact-card contact-card--trust">
                <h3 className="contact-card__title">{CONTACT_TEXT.trustSignals.title}</h3>
                <ul className="trust-list">
                  {CONTACT_TEXT.trustSignals.signals.map((signal) => {
                    const IconComponent = ICONS[signal.icon];
                    return (
                      <li key={signal.id}>
                        {IconComponent && <IconComponent size={20} strokeWidth={2} />}
                        {' '}{signal.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactPage;
