import { Badge } from '../../../components/common';
import { useLanguage } from '../../../context/LanguageContext';
import { ICONS, DEFAULT_ICON_PROPS } from '../../../constants/icons';
import './TechnologiesSection.css';

/**
 * Technologies Section
 * Showcases tech stack and expertise
 */
const TechnologiesSection = () => {
  const { t } = useLanguage();
  const { technologiesSection } = t.HOME_TEXT;

  // Tech expertise data (technical data, doesn't need translation)
  const techExpertise = {
    frontend: [
      { name: 'React', icon: 'react', level: 'Expert' },
      { name: 'Next.js', icon: 'nextjs', level: 'Expert' },
      { name: 'TypeScript', icon: 'typescript', level: 'Expert' },
      { name: 'Vue.js', icon: 'vuejs', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', level: 'Expert' }
    ],
    backend: [
      { name: 'Node.js', icon: 'nodejs', level: 'Expert' },
      { name: 'Python', icon: 'python', level: 'Expert' },
      { name: 'Express', icon: 'express', level: 'Expert' },
      { name: 'Django', icon: 'django', level: 'Advanced' },
      { name: 'GraphQL', icon: 'graphql', level: 'Advanced' }
    ],
    mobile: [
      { name: 'React Native', icon: 'reactnative', level: 'Expert' },
      { name: 'Flutter', icon: 'flutter', level: 'Advanced' },
      { name: 'Swift', icon: 'swift', level: 'Advanced' },
      { name: 'Kotlin', icon: 'kotlin', level: 'Advanced' }
    ],
    cloud: [
      { name: 'AWS', icon: 'aws', level: 'Expert' },
      { name: 'Azure', icon: 'azure', level: 'Advanced' },
      { name: 'Docker', icon: 'docker', level: 'Expert' },
      { name: 'Kubernetes', icon: 'kubernetes', level: 'Advanced' },
      { name: 'Firebase', icon: 'firebase', level: 'Expert' }
    ],
    ai: [
      { name: 'OpenAI', icon: 'openai', level: 'Expert' },
      { name: 'TensorFlow', icon: 'tensorflow', level: 'Advanced' },
      { name: 'PyTorch', icon: 'pytorch', level: 'Advanced' },
      { name: 'LangChain', icon: 'langchain', level: 'Expert' }
    ]
  };

  const levelColors = {
    'Expert': 'success',
    'Advanced': 'primary',
    'Intermediate': 'info'
  };

  // Brand colors for technologies
  const techColors = {
    react: '#61DAFB',
    nextjs: '#000000',
    typescript: '#3178C6',
    vuejs: '#4FC08D',
    tailwindcss: '#06B6D4',
    nodejs: '#339933',
    python: '#3776AB',
    express: '#000000',
    django: '#092E20',
    graphql: '#E10098',
    reactnative: '#61DAFB',
    flutter: '#02569B',
    swift: '#F05138',
    kotlin: '#7F52FF',
    aws: '#FF9900',
    azure: '#0078D4',
    docker: '#2496ED',
    kubernetes: '#326CE5',
    firebase: '#FFCA28',
    openai: '#412991',
    tensorflow: '#FF6F00',
    pytorch: '#EE4C2C',
    langchain: '#1C3C3C'
  };

  return (
    <section className="technologies-section">
      <div className="technologies-section__container">
        <div className="technologies-section__header">
          <Badge variant="secondary">{technologiesSection.badge}</Badge>
          <h2 className="technologies-section__title">
            {technologiesSection.title}
          </h2>
          <p className="technologies-section__subtitle">
            {technologiesSection.subtitle}
          </p>
        </div>

        <div className="technologies-section__categories">
          {technologiesSection.categories.map((category) => {
            const IconComponent = ICONS[category.icon];
            return (
              <div key={category.id} className="tech-category">
                <h3 className="tech-category__title">
                  <span className="tech-category__icon">
                    {IconComponent && <IconComponent {...DEFAULT_ICON_PROPS} />}
                  </span>
                  {category.name}
                </h3>
                <div className="tech-category__items">
                  {techExpertise[category.name.toLowerCase().replace(' & ', '').replace(/ /g, '')]?.map((tech, index) => {
                    const TechIcon = ICONS[tech.icon];
                    const iconColor = techColors[tech.icon] || 'currentColor';
                    return (
                      <div key={index} className="tech-item">
                        <span className="tech-item__icon">
                          {TechIcon && <TechIcon size={18} style={{ color: iconColor }} />}
                        </span>
                        <span className="tech-item__name">{tech.name}</span>
                        <Badge variant={levelColors[tech.level]} size="small">
                          {tech.level}
                        </Badge>
                      </div>
                    );
                  }) || category.technologies.map((techName, index) => (
                    <div key={index} className="tech-item">
                      <span className="tech-item__name">{techName}</span>
                    </div>
                  ))}
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
