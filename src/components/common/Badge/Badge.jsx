import PropTypes from 'prop-types';
import './Badge.css';

/**
 * Badge component for labels and status indicators
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} props.variant - Badge style variant
 * @param {string} props.size - Badge size
 */
const Badge = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  ...rest
}) => {
  return (
    <span
      className={`badge badge--${variant} badge--${size} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Badge;
