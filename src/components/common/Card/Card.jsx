import PropTypes from 'prop-types';
import './Card.css';

/**
 * Reusable Card component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler (optional)
 * @param {boolean} props.hoverable - Enable hover effect
 */
const Card = ({
  children,
  className = '',
  onClick,
  hoverable = false,
  ...rest
}) => {
  const cardClasses = `card ${hoverable ? 'card--hoverable' : ''} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick} {...rest}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  hoverable: PropTypes.bool,
};

export default Card;
