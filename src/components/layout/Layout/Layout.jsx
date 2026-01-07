import PropTypes from 'prop-types';
import { Navbar } from '../Header';
import Footer from '../Footer';
import './Layout.css';

/**
 * MainLayout - Reusable layout wrapper component
 * Features: Fixed navbar, responsive design, smooth scrolling
 * Includes skip link for accessibility
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content
 */
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="main-layout__content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export as both MainLayout and Layout for backward compatibility
export default MainLayout;
export { MainLayout as Layout };
