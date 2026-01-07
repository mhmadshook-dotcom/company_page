import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './components/layout';
import { routes } from './routes/routes';
import './App.css';

// Lazy load route components for better performance
const HomePage = lazy(() => import('./features/home'));
const AboutPage = lazy(() => import('./features/about'));
const ServicesPage = lazy(() => import('./features/services'));
const ProjectsPage = lazy(() => import('./features/projects'));
const ContactPage = lazy(() => import('./features/contact'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: 'var(--text-secondary)'
  }}>
    Loading...
  </div>
);

/**
 * Main App component with React Router and Theme Provider
 * Entry point for the application
 */
function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Routes>
              <Route path={routes.HOME} element={<HomePage />} />
              <Route path={routes.ABOUT} element={<AboutPage />} />
              <Route path={routes.SERVICES} element={<ServicesPage />} />
              <Route path={routes.PROJECTS} element={<ProjectsPage />} />
              <Route path={routes.CONTACT} element={<ContactPage />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
