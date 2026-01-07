import { useState } from 'react';
import { ProjectCard, Badge, Button, SEO } from '../../components/common';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import { useLanguage } from '../../context/LanguageContext';
import './ProjectsPage.css';

/**
 * Projects/Portfolio Page
 * Modern grid layout with filtering capabilities
 * Structured for easy addition of real projects
 */
const ProjectsPage = () => {
  const { t } = useLanguage();
  const { PROJECTS_TEXT, COMMON_TEXT } = t;
  const [activeFilter, setActiveFilter] = useState('all');

  // Define stable filter categories (language-independent)
  const filterCategories = [
    { key: 'all', label: PROJECTS_TEXT.filters.all },
    { key: 'web', label: PROJECTS_TEXT.filters.web },
    { key: 'mobile', label: PROJECTS_TEXT.filters.mobile },
    { key: 'ecommerce', label: PROJECTS_TEXT.filters.ecommerce },
    { key: 'saas', label: PROJECTS_TEXT.filters.saas },
    { key: 'enterprise', label: PROJECTS_TEXT.filters.enterprise },
    { key: 'ai', label: PROJECTS_TEXT.filters.ai }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_TEXT.projects 
    : PROJECTS_TEXT.projects.filter(project => project.category === activeFilter);

  return (
    <>
      <SEO 
        title={PROJECTS_TEXT.seo.title}
        description={PROJECTS_TEXT.seo.description}
        keywords={PROJECTS_TEXT.seo.keywords}
      />
      <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-page__hero">
        <div className="projects-page__hero-container">
          <Badge variant="primary">{PROJECTS_TEXT.hero.badge}</Badge>
          <h1 className="projects-page__hero-title">
            {PROJECTS_TEXT.hero.title}{' '}
            <span className="projects-page__hero-gradient">{PROJECTS_TEXT.hero.titleHighlight}</span>
          </h1>
          <p className="projects-page__hero-subtitle">
            {PROJECTS_TEXT.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="projects-page__filter">
        <div className="projects-page__container">
          <div className="projects-page__filter-buttons">
            {filterCategories.map((filter) => (
              <button
                key={filter.key}
                className={`projects-page__filter-btn ${
                  activeFilter === filter.key ? 'projects-page__filter-btn--active' : ''
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-page__projects">
        <div className="projects-page__container">
          <div className="projects-page__grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                category={project.category}
                technologies={project.technologies}
                image={project.image}
                demoLink={project.demoLink}
                githubLink={project.githubLink}
                status={project.status}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="projects-page__empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-page__cta">
        <div className="projects-page__cta-container">
          <Badge variant="secondary">{PROJECTS_TEXT.cta.badge}</Badge>
          <h2 className="projects-page__cta-title">
            {PROJECTS_TEXT.cta.title}
          </h2>
          <p className="projects-page__cta-text">
            {PROJECTS_TEXT.cta.subtitle}
          </p>
          <div className="projects-page__cta-actions">
            <Link to={routes.CONTACT}>
              <Button variant="primary" size="large">
                {PROJECTS_TEXT.cta.buttonText}
              </Button>
            </Link>
            <Link to={routes.SERVICES}>
              <Button variant="outline" size="large">
                {COMMON_TEXT.buttons.exploreServices}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ProjectsPage;
