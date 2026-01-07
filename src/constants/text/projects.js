/**
 * Projects page text constants
 * All text content for projects/portfolio page
 */

export const PROJECTS_TEXT = {
  // SEO
  seo: {
    title: 'Projects',
    description: 'Explore MSS Code\'s portfolio of successful projects across web apps, mobile apps, e-commerce, SaaS, and enterprise solutions. 500+ projects delivered with 98% client satisfaction.',
    keywords: 'software projects, portfolio, web applications, mobile apps, case studies, success stories'
  },

  // Hero Section
  hero: {
    badge: 'Our Work',
    title: 'Projects That Drive',
    titleHighlight: 'Real Results',
    subtitle: 'Explore our portfolio of successful projects across industries. Each solution is crafted with precision, innovation, and a focus on delivering measurable business value.'
  },

  // Filter Labels
  filters: {
    all: 'All Projects',
    web: 'Web Apps',
    mobile: 'Mobile Apps',
    ecommerce: 'E-commerce',
    saas: 'SaaS',
    enterprise: 'Enterprise',
    ai: 'AI/ML'
  },

  // Sample Projects
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution with advanced product filtering, real-time inventory, and seamless checkout experience.',
      category: 'ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'HIPAA-compliant platform for patient management, appointment scheduling, and telemedicine consultations.',
      category: 'enterprise',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile App',
      description: 'Cross-platform mobile app with workout tracking, nutrition planning, and social features.',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence platform with predictive analytics and automated reporting.',
      category: 'ai',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'SaaS Project Management Tool',
      description: 'Collaborative project management platform with task tracking, time management, and team analytics.',
      category: 'saas',
      technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'In Progress'
    },
    {
      id: 6,
      title: 'Real Estate Portal',
      description: 'Property listing platform with advanced search, virtual tours, and mortgage calculator.',
      category: 'web',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'Completed'
    },
    {
      id: 7,
      title: 'Restaurant Ordering System',
      description: 'Multi-vendor food ordering platform with real-time tracking and integrated payment processing.',
      category: 'mobile',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'Completed'
    },
    {
      id: 8,
      title: 'EdTech Learning Platform',
      description: 'Online learning management system with video courses, quizzes, and progress tracking.',
      category: 'web',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'Completed'
    },
    {
      id: 9,
      title: 'FinTech Investment App',
      description: 'Mobile investment platform with portfolio management, market analysis, and automated trading.',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MySQL', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'In Development'
    }
  ],

  // Stats
  stats: {
    totalProjects: '500+',
    happyClients: '100+',
    satisfaction: '98%',
    industries: '30+'
  },

  // CTA Section
  cta: {
    badge: 'Start Your Project',
    title: 'Ready to See Your Vision Come to Life?',
    subtitle: 'Join our portfolio of successful projects. Let\'s build something amazing together.',
    buttonText: 'Discuss Your Project'
  }
};
