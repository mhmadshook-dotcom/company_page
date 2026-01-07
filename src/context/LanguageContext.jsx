import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as EN from '../constants/text';
import * as AR from '../constants/text/ar';

const translations = {
  en: EN,
  ar: AR
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Get language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  // Update localStorage and document attributes when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    // Set RTL for Arabic, LTR for English
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    
    // Add language class to body for CSS targeting
    document.body.classList.remove('lang-en', 'lang-ar');
    document.body.classList.add(`lang-${language}`);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    isRTL: language === 'ar',
    toggleLanguage,
    changeLanguage,
    t: translations[language] // All text constants
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired
};
