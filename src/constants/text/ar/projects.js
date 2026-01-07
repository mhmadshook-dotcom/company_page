/**
 * Arabic Projects page text constants
 * نصوص صفحة المشاريع بالعربية
 */

export const PROJECTS_TEXT = {
  // SEO
  seo: {
    title: 'المشاريع',
    description: 'استكشف محفظة MSS Code من المشاريع الناجحة عبر تطبيقات الويب، تطبيقات الموبايل، التجارة الإلكترونية، SaaS، والحلول المؤسسية. أكثر من 500 مشروع مع رضا 98% من العملاء.',
    keywords: 'مشاريع برمجية، أعمالنا، تطبيقات ويب، تطبيقات موبايل، دراسات حالة، قصص نجاح'
  },

  // Hero Section
  hero: {
    badge: 'أعمالنا',
    title: 'مشاريع تحقق',
    titleHighlight: 'نتائج حقيقية',
    subtitle: 'استكشف محفظتنا من المشاريع الناجحة عبر الصناعات. كل حل مصنوع بدقة وابتكار وتركيز على تحقيق قيمة أعمال قابلة للقياس.'
  },

  // Filter Labels
  filters: {
    all: 'جميع المشاريع',
    web: 'تطبيقات الويب',
    mobile: 'تطبيقات الموبايل',
    ecommerce: 'التجارة الإلكترونية',
    saas: 'SaaS',
    enterprise: 'المؤسسات',
    ai: 'الذكاء الاصطناعي'
  },

  // Sample Projects
  projects: [
    {
      id: 1,
      title: 'منصة تجارة إلكترونية',
      description: 'حل تجارة إلكترونية حديث مع فلترة متقدمة للمنتجات، مخزون فوري، وتجربة دفع سلسة.',
      category: 'ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'مكتمل'
    },
    {
      id: 2,
      title: 'نظام إدارة الرعاية الصحية',
      description: 'منصة متوافقة مع HIPAA لإدارة المرضى، جدولة المواعيد، واستشارات الرعاية عن بعد.',
      category: 'enterprise',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'مكتمل'
    },
    {
      id: 3,
      title: 'تطبيق تتبع اللياقة',
      description: 'تطبيق موبايل متعدد المنصات لتتبع التمارين، التخطيط الغذائي، والميزات الاجتماعية.',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'مكتمل'
    },
    {
      id: 4,
      title: 'لوحة تحليلات مدعومة بالذكاء الاصطناعي',
      description: 'منصة ذكاء أعمال فورية مع تحليلات تنبؤية وتقارير تلقائية.',
      category: 'ai',
      technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'مكتمل'
    },
    {
      id: 5,
      title: 'أداة إدارة مشاريع SaaS',
      description: 'منصة إدارة مشاريع تعاونية مع تتبع المهام، إدارة الوقت، وتحليلات الفريق.',
      category: 'saas',
      technologies: ['React', 'GraphQL', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'قيد التنفيذ'
    },
    {
      id: 6,
      title: 'بوابة عقارات',
      description: 'منصة قوائم عقارية مع بحث متقدم، جولات افتراضية، وحاسبة رهن عقاري.',
      category: 'web',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'مكتمل'
    },
    {
      id: 7,
      title: 'نظام طلب مطاعم',
      description: 'منصة طلب طعام متعددة البائعين مع تتبع فوري ومعالجة دفع متكاملة.',
      category: 'mobile',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: '#',
      status: 'مكتمل'
    },
    {
      id: 8,
      title: 'منصة تعليم إلكتروني',
      description: 'نظام إدارة تعلم إلكتروني مع دورات فيديو، اختبارات، وتتبع التقدم.',
      category: 'web',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'مكتمل'
    },
    {
      id: 9,
      title: 'تطبيق استثمار مالي',
      description: 'منصة استثمار موبايل مع إدارة محفظة، تحليل السوق، وتداول تلقائي.',
      category: 'mobile',
      technologies: ['React Native', 'Node.js', 'MySQL', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop&q=80',
      demoLink: '#',
      githubLink: null,
      status: 'قيد التطوير'
    }
  ],

  // Stats
  stats: {
    totalProjects: '+500',
    happyClients: '+100',
    satisfaction: '%98',
    industries: '+30'
  },

  // CTA Section
  cta: {
    badge: 'ابدأ مشروعك',
    title: 'هل أنت مستعد لرؤية رؤيتك تتحقق؟',
    subtitle: 'انضم إلى محفظة مشاريعنا الناجحة. لنبني شيئاً رائعاً معاً.',
    buttonText: 'ناقش مشروعك'
  }
};
