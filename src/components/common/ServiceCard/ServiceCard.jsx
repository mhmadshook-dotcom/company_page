import PropTypes from 'prop-types';
import Badge from '../Badge';
import { ICONS, DEFAULT_ICON_PROPS } from '../../../constants/icons';
import './ServiceCard.css';

/**
 * Reusable ServiceCard component
 * Displays a service with icon, title, description, and optional features
 */
const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  badge, 
  badgeVariant,
  className = '' 
}) => {
  const IconComponent = ICONS[icon];
  
  return (
    <div className={`service-card ${className}`}>
      {badge && (
        <div className="service-card__badge">
          <Badge variant={badgeVariant || 'primary'} size="small">
            {badge}
          </Badge>
        </div>
      )}
      
      <div className="service-card__icon">
        {IconComponent && <IconComponent {...DEFAULT_ICON_PROPS} />}
      </div>
      
      <h3 className="service-card__title">{title}</h3>
      
      <p className="service-card__description">{description}</p>
      
      {features && features.length > 0 && (
        <ul className="service-card__features">
          {features.map((feature, index) => (
            <li key={index} className="service-card__feature">
              <span className="service-card__check">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  badge: PropTypes.string,
  badgeVariant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info']),
  className: PropTypes.string
};

export default ServiceCard;
