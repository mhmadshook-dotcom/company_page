/**
 * Arabic Home page text constants
 * نصوص الصفحة الرئيسية بالعربية
 */

export const HOME_TEXT = {
  // SEO
  seo: {
    title: 'الرئيسية',
    description: 'MSS Code - حول عملك بحلول برمجية متطورة. خبراء في تطوير الويب، تطبيقات الموبايل، الحلول السحابية وتكامل الذكاء الاصطناعي.',
    keywords: 'تطوير البرمجيات، تطوير الويب، تطبيقات الموبايل، الحلول السحابية، الذكاء الاصطناعي، التحول الرقمي'
  },

  // Hero Section
  hero: {
    badge: 'موثوق من قبل أكثر من 100 شركة حول العالم 🚀',
    title: 'ابنِ مستقبلك الرقمي مع',
    titleHighlight: 'MSS Code',
    subtitle: 'نصنع تجارب رقمية استثنائية من خلال حلول برمجية مبتكرة. من تطبيقات الويب المذهلة إلى تطبيقات الموبايل القوية - نحول رؤيتك إلى واقع.',
    
    stats: [
      { number: '500+', label: 'مشروع منجز' },
      { number: '98%', label: 'رضا العملاء' },
      { number: '24/7', label: 'دعم متاح' }
    ],
    
    buttons: {
      primary: 'ابدأ مشروعك',
      secondary: 'استكشف الخدمات'
    },
    
    trust: {
      text: 'موثوق من قبل قادة الصناعة:',
      companies: ['مايكروسوفت', 'جوجل', 'أمازون', 'ميتا']
    },
    
    visualCards: [
      { icon: 'web', label: 'تطوير الويب' },
      { icon: 'mobile', label: 'تطبيقات الموبايل' },
      { icon: 'cloud', label: 'الحلول السحابية' },
      { icon: 'ai', label: 'الذكاء الاصطناعي' }
    ]
  },

  // Services Preview Section
  servicesPreview: {
    badge: 'خدماتنا',
    title: 'حلول شاملة لاحتياجاتك الرقمية',
    subtitle: 'من الفكرة إلى التنفيذ، نقدم خدمات تطوير برمجيات متكاملة تحول عملك وتدفع النمو.',
    
    services: [
      {
        id: 1,
        icon: 'web',
        title: 'تطوير الويب',
        description: 'تطبيقات ويب مخصصة مبنية بأحدث التقنيات لأقصى أداء وقابلية للتوسع.',
        features: ['React و Next.js', 'Node.js Backend', 'تطبيقات ويب تقدمية'],
        badge: 'رائج'
      },
      {
        id: 2,
        icon: 'mobile',
        title: 'تطبيقات الموبايل',
        description: 'تطبيقات موبايل أصلية ومتعددة المنصات توفر تجارب استثنائية على iOS و Android.',
        features: ['React Native', 'Flutter', 'Native iOS/Android'],
        badge: 'الأكثر طلباً'
      },
      {
        id: 3,
        icon: 'cloud',
        title: 'الحلول السحابية',
        description: 'بنية تحتية سحابية قابلة للتوسع واستراتيجيات نشر تنمو مع احتياجات عملك.',
        features: ['AWS و Azure', 'DevOps', 'CI/CD Pipelines'],
        badge: 'للشركات'
      },
      {
        id: 4,
        icon: 'ai',
        title: 'الذكاء الاصطناعي',
        description: 'حلول ذكية مدعومة بالذكاء الاصطناعي وخوارزميات التعلم الآلي.',
        features: ['تكامل ChatGPT', 'نماذج مخصصة', 'تحليل البيانات'],
        badge: 'جديد'
      },
      {
        id: 5,
        icon: 'design',
        title: 'تصميم UI/UX',
        description: 'واجهات جميلة وبديهية مصممة مع تجربة المستخدم وهوية العلامة التجارية في الاعتبار.',
        features: ['تصميم Figma', 'أنظمة التصميم', 'النماذج الأولية'],
        badge: 'إبداعي'
      },
      {
        id: 6,
        icon: 'security',
        title: 'الأمن السيبراني',
        description: 'حلول أمنية شاملة لحماية أصولك الرقمية وضمان الامتثال.',
        features: ['تدقيق الأمان', 'اختبار الاختراق', 'الامتثال'],
        badge: 'حيوي'
      }
    ]
  },

  // Trust Section
  trustSection: {
    title: 'موثوق من قبل قادة الصناعة',
    subtitle: 'انضم إلى مئات الشركات التي حولت حضورها الرقمي مع MSS Code',
    
    achievements: [
      {
        id: 1,
        number: '+500',
        label: 'مشروع مكتمل',
        description: 'تم تسليمها بنجاح عبر أكثر من 30 صناعة'
      },
      {
        id: 2,
        number: '+100',
        label: 'عميل سعيد',
        description: 'من الشركات الناشئة إلى شركات Fortune 500'
      },
      {
        id: 3,
        number: '+50',
        label: 'عضو فريق',
        description: 'مطورون ومصممون ومستشارون خبراء'
      },
      {
        id: 4,
        number: '+15',
        label: 'سنة خبرة',
        description: 'خبرة صناعية وسجل حافل بالإنجازات'
      }
    ],
    
    testimonialsTitle: 'ماذا يقول عملاؤنا',
    testimonials: [
      {
        id: 1,
        quote: 'حولت MSS Code حضورنا الرقمي. خبرتهم في تقنيات الويب الحديثة لا مثيل لها.',
        author: 'سارة جونسون',
        role: 'المدير التقني، TechCorp',
        avatar: 'FaUserTie'
      },
      {
        id: 2,
        quote: 'جودة واحترافية متميزة. قاموا بتسليم تطبيقنا للموبايل قبل الموعد المحدد وأقل من الميزانية.',
        author: 'مايكل تشين',
        role: 'المدير التنفيذي، StartupHub',
        avatar: 'FaUserTie'
      },
      {
        id: 3,
        quote: 'اهتمام الفريق بالتفاصيل والتزامهم بالتميز أحدث فرقاً كبيراً في نجاح مشروعنا.',
        author: 'إميلي رودريغيز',
        role: 'مدير المنتج، InnovateCo',
        avatar: 'FaUserCircle'
      }
    ]
  },

  // Technologies Section
  technologiesSection: {
    badge: 'مجموعة التقنيات',
    title: 'مبني بتقنيات حديثة',
    subtitle: 'نستفيد من التقنيات الرائدة في الصناعة لبناء حلول قوية وقابلة للتوسع ومستقبلية.',
    
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
    badge: 'جاهز للبدء؟',
    title: 'لنبني شيئاً رائعاً معاً',
    subtitle: 'حول أفكارك إلى واقع مع فريقنا المتخصص. احصل على استشارة مجانية وتقدير للمشروع اليوم.',
    buttonText: 'ابدأ مشروعك الآن',
    features: [
      '✓ استشارة مجانية',
      '✓ تسعير شفاف',
      '✓ تطوير مرن',
      '✓ دعم 24/7'
    ]
  }
};
