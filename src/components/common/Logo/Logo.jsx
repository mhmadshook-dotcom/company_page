import PropTypes from 'prop-types';
import './Logo.css';

/**
 * MMS Code Logo Component
 * Modern, professional logo with programming theme
 * Supports both icon-only and full horizontal versions
 * Works on light and dark backgrounds
 */
const Logo = ({ variant = 'full', size = 'medium' }) => {
  const isIconOnly = variant === 'icon';
  
  const sizes = {
    small: { height: 32, iconSize: 32 },
    medium: { height: 40, iconSize: 40 },
    large: { height: 56, iconSize: 56 }
  };

  const { height, iconSize } = sizes[size] || sizes.medium;

  return (
    <div className={`mms-logo mms-logo--${variant} mms-logo--${size}`}>
      {/* Icon/Symbol Part */}
      <svg 
        className="mms-logo__icon"
        width={iconSize} 
        height={iconSize} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle */}
        <circle cx="50" cy="50" r="48" fill="url(#gradient1)" />
        
        {/* Code Brackets <> */}
        <path 
          d="M 30 35 L 20 50 L 30 65" 
          stroke="#ffffff" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        <path 
          d="M 70 35 L 80 50 L 70 65" 
          stroke="#ffffff" 
          strokeWidth="5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Middle Code Slash */}
        <path 
          d="M 55 30 L 45 70" 
          stroke="#ffffff" 
          strokeWidth="5" 
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b98ff" />
            <stop offset="100%" stopColor="#13497b" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text Part (only in full variant) */}
      {!isIconOnly && (
        <div className="mms-logo__text">
          <span className="mms-logo__name">MMS Code</span>
          <span className="mms-logo__tagline">Software Solutions</span>
        </div>
      )}
    </div>
  );
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['full', 'icon']),
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

export default Logo;
