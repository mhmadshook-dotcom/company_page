import { useLanguage } from '../../../context/LanguageContext';
import './LanguageSwitcher.css';

/**
 * Language Switcher Component
 * Allows users to switch between English and Arabic
 */
const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
      title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
    >
      <span className="language-switcher__icon">🌐</span>
      <span className="language-switcher__text">
        {language === 'en' ? 'عربي' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
