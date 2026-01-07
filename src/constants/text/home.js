/**
 * Home page text constants
 * All text content for the home page sections
 */

export const HOME_TEXT = {
  // SEO
  seo: {
    title: 'Home',
    description: 'MSS Code - Transform your business with cutting-edge software solutions. Expert web development, mobile apps, cloud solutions, and AI integration services.',
    keywords: 'software development, web development, mobile apps, cloud solutions, AI integration, digital transformation'
  },

  // Hero Section
  hero: {
    badge: '🚀 Trusted by 100+ Companies Worldwide',
    title: 'Build Your Digital Future with',
    titleHighlight: 'MSS Code',
    subtitle: 'We craft exceptional digital experiences through innovative software solutions. From stunning web applications to powerful mobile apps — we turn your vision into reality.',
    
    stats: [
      { number: '500+', label: 'Projects Delivered' },
      { number: '98%', label: 'Client Satisfaction' },
      { number: '24/7', label: 'Support Available' }
    ],
    
    buttons: {
      primary: 'Start Your Project',
      secondary: 'Explore Services'
    },
    
    trust: {
      text: 'Trusted by industry leaders:',
      companies: ['Microsoft', 'Google', 'Amazon', 'Meta']
    },
    
    visualCards: [
      { icon: 'web', label: 'Web Development' },
      { icon: 'mobile', label: 'Mobile Apps' },
      { icon: 'cloud', label: 'Cloud Solutions' },
      { icon: 'ai', label: 'AI Integration' }
    ]
  },

  // Services Preview Section
  servicesPreview: {
    badge: 'Our Services',
    title: 'Comprehensive Solutions for Your Digital Needs',
    subtitle: 'From ideation to deployment, we provide end-to-end software development services that transform your business and drive growth.',
    
    services: [
      {
        id: 1,
        icon: 'web',
        title: 'Web Development',
        description: 'Custom web applications built with cutting-edge technologies for maximum performance and scalability.',
        features: ['React & Next.js', 'Node.js Backend', 'Progressive Web Apps'],
        badge: 'Popular'
      },
      {
        id: 2,
        icon: 'mobile',
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
        features: ['React Native', 'Flutter', 'Native iOS/Android'],
        badge: 'Trending'
      },
      {
        id: 3,
        icon: 'cloud',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment strategies that grow with your business needs.',
        features: ['AWS & Azure', 'DevOps', 'CI/CD Pipelines'],
        badge: 'Enterprise'
      },
      {
        id: 4,
        icon: 'ai',
        title: 'AI & Machine Learning',
        description: 'Intelligent solutions powered by artificial intelligence and machine learning algorithms.',
        features: ['ChatGPT Integration', 'Custom Models', 'Data Analytics'],
        badge: 'New'
      },
      {
        id: 5,
        icon: 'design',
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces designed with user experience and brand identity in mind.',
        features: ['Figma Design', 'Design Systems', 'Prototyping'],
        badge: 'Creative'
      },
      {
        id: 6,
        icon: 'security',
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
        features: ['Security Audits', 'Penetration Testing', 'Compliance'],
        badge: 'Critical'
      }
    ]
  },

  // Trust Section
  trustSection: {
    title: 'Trusted by Industry Leaders',
    subtitle: 'Join hundreds of companies that have transformed their digital presence with MSS Code',
    
    achievements: [
      {
        id: 1,
        number: '500+',
        label: 'Projects Completed',
        description: 'Successfully delivered across 30+ industries'
      },
      {
        id: 2,
        number: '100+',
        label: 'Happy Clients',
        description: 'From startups to Fortune 500 companies'
      },
      {
        id: 3,
        number: '50+',
        label: 'Team Members',
        description: 'Expert developers, designers, and consultants'
      },
      {
        id: 4,
        number: '15+',
        label: 'Years Experience',
        description: 'Industry expertise and proven track record'
      }
    ],
    
    testimonialsTitle: 'What Our Clients Say',
    testimonials: [
      {
        id: 1,
        quote: 'MSS Code transformed our digital presence. Their expertise in modern web technologies is unmatched.',
        author: 'Sarah Johnson',
        role: 'CTO, TechCorp',
        avatar: 'FaUserTie'
      },
      {
        id: 2,
        quote: 'Outstanding quality and professionalism. They delivered our mobile app ahead of schedule and under budget.',
        author: 'Michael Chen',
        role: 'CEO, StartupHub',
        avatar: 'FaUserTie'
      },
      {
        id: 3,
        quote: 'The team\'s attention to detail and commitment to excellence made all the difference in our project success.',
        author: 'Emily Rodriguez',
        role: 'Product Manager, InnovateCo',
        avatar: 'FaUserCircle'
      }
    ]
  },

  // Technologies Section
  technologiesSection: {
    badge: 'Our Tech Stack',
    title: 'Built with Modern Technologies',
    subtitle: 'We leverage industry-leading technologies to build robust, scalable, and future-proof solutions.',
    
    categories: [
      {
        id: 1,
        name: 'Frontend',
        icon: 'frontend',
        technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS']
      },
      {
        id: 2,
        name: 'Backend',
        icon: 'backend',
        technologies: ['Node.js', 'Python', 'Java', 'PHP', 'GraphQL']
      },
      {
        id: 3,
        name: 'Mobile',
        icon: 'mobile',
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic']
      },
      {
        id: 4,
        name: 'Cloud & DevOps',
        icon: 'cloud',
        technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD']
      },
      {
        id: 5,
        name: 'Database',
        icon: 'database',
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase']
      }
    ]
  },

  // CTA Section
  ctaSection: {
    badge: 'Ready to Start?',
    title: 'Let\'s Build Something Amazing Together',
    subtitle: 'Transform your ideas into reality with our expert team. Get a free consultation and project estimate today.',
    buttonText: 'Start Your Project Now',
    features: [
      '✓ Free consultation',
      '✓ Transparent pricing',
      '✓ Agile development',
      '✓ 24/7 support'
    ]
  }
};
