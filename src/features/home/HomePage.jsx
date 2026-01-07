import { SEO } from '../../components/common';
import { useLanguage } from '../../context/LanguageContext';
import Hero from './Hero';
import ServicesPreview from './ServicesPreview';
import TrustSection from './TrustSection';
import TechnologiesSection from './TechnologiesSection';
import CTASection from './CTASection';
import './HomePage.css';

/**
 * Professional Home page for MSS Code
 * Complete marketing landing page with all sections
 */
const HomePage = () => {
  const { t } = useLanguage();
  const { HOME_TEXT } = t;

  return (
    <>
      <SEO 
        title={HOME_TEXT.seo.title}
        description={HOME_TEXT.seo.description}
        keywords={HOME_TEXT.seo.keywords}
      />
      <div className="home-page">
        <Hero />
        <ServicesPreview />
        <TrustSection />
        <TechnologiesSection />
        <CTASection />
      </div>
    </>
  );
};

export default HomePage;
