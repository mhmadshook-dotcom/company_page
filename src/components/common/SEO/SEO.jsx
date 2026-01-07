import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../../context/LanguageContext';

/**
 * SEO Component - Manages document head metadata
 * Improves search engine visibility and social sharing
 * Now supports multilingual content
 */
const SEO = ({ 
  title, 
  description, 
  keywords,
  ogImage,
  ogUrl,
  canonical 
}) => {
  const { language } = useLanguage();
  
  const siteTitle = 'MSS Code - Professional Software Development Services';
  const fullTitle = title ? `${title} | MSS Code` : siteTitle;
  const defaultDescription = 'MSS Code delivers cutting-edge software solutions including web development, mobile apps, cloud solutions, and AI integration. Transform your business with our expert team.';
  const metaDescription = description || defaultDescription;
  const defaultKeywords = 'software development, web development, mobile apps, cloud solutions, AI integration, UI/UX design, MSS Code, software company';
  const metaKeywords = keywords || defaultKeywords;
  const defaultOgImage = `${window.location.origin}/og-image.jpg`;
  const metaOgImage = ogImage || defaultOgImage;
  const metaOgUrl = ogUrl || window.location.href;
  const metaCanonical = canonical || window.location.href;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update html lang attribute
    document.documentElement.lang = language;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', metaKeywords);

    // Open Graph meta tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:image', metaOgImage, true);
    updateMetaTag('og:url', metaOgUrl, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_AR' : 'en_US', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', metaOgImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', metaCanonical);

  }, [fullTitle, metaDescription, metaKeywords, metaOgImage, metaOgUrl, metaCanonical, language]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogUrl: PropTypes.string,
  canonical: PropTypes.string
};

export default SEO;
