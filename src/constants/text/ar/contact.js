/**
 * Arabic Contact page text constants
 * نصوص صفحة التواصل بالعربية
 */

export const CONTACT_TEXT = {
  // SEO
  seo: {
    title: 'تواصل معنا',
    description: 'تواصل مع MSS Code للحصول على استشارة مجانية. اتصل بنا عبر واتساب، البريد الإلكتروني أو الهاتف. وقت الرد أقل من 24 ساعة. لنبني شيئاً رائعاً معاً.',
    keywords: 'اتصل بـ MSS Code، احصل على عرض سعر، استشارة مجانية، استفسار تطوير برمجيات، تواصل واتساب'
  },

  // Hero Section
  hero: {
    badge: '💬 لنتحدث',
    title: 'هل أنت مستعد لبدء',
    titleHighlight: 'مشروعك القادم؟',
    subtitle: 'تواصل معنا اليوم للحصول على استشارة مجانية. نحن هنا للإجابة على أسئلتك ومساعدتك في تحقيق رؤيتك.',
    whatsapp: {
      badge: '⚡ أسرع استجابة',
      title: 'راسلنا عبر واتساب',
      subtitle: 'احصل على ردود فورية لاستفساراتك',
      buttonText: 'تحدث على واتساب',
      phone: '+1234567890'
    },
    responseTime: {
      icon: 'time',
      text: 'متوسط وقت الاستجابة: أقل من ساعتين'
    }
  },

  // Form Section
  form: {
    title: 'أرسل لنا رسالة',
    subtitle: 'املأ النموذج أدناه وسنعاود الاتصال بك خلال 24 ساعة.',
    
    fields: {
      name: {
        label: 'الاسم الكامل',
        placeholder: 'أحمد محمد',
        required: true
      },
      email: {
        label: 'البريد الإلكتروني',
        placeholder: 'ahmad@example.com',
        required: true
      },
      phone: {
        label: 'رقم الهاتف',
        placeholder: '+966 50 123 4567',
        required: false
      },
      company: {
        label: 'اسم الشركة',
        placeholder: 'شركتك المحدودة',
        required: false
      },
      service: {
        label: 'الخدمة المهتم بها',
        placeholder: 'اختر خدمة',
        required: true,
        options: [
          { value: '', label: 'اختر خدمة' },
          { value: 'web', label: 'تطوير الويب' },
          { value: 'mobile', label: 'تطوير تطبيقات الموبايل' },
          { value: 'cloud', label: 'الحلول السحابية' },
          { value: 'ai', label: 'الذكاء الاصطناعي والتعلم الآلي' },
          { value: 'design', label: 'تصميم واجهات وتجربة المستخدم' },
          { value: 'security', label: 'الأمن السيبراني' },
          { value: 'other', label: 'خدمات أخرى' }
        ]
      },
      budget: {
        label: 'ميزانية المشروع',
        placeholder: 'اختر نطاق الميزانية',
        required: false,
        options: [
          { value: '', label: 'اختر نطاق الميزانية' },
          { value: 'small', label: 'أقل من 10,000$' },
          { value: 'medium', label: '10,000$ - 50,000$' },
          { value: 'large', label: '50,000$ - 100,000$' },
          { value: 'enterprise', label: 'أكثر من 100,000$' }
        ]
      },
      message: {
        label: 'تفاصيل المشروع',
        placeholder: 'أخبرنا عن متطلبات مشروعك، الأهداف، والجدول الزمني...',
        required: true,
        rows: 6
      }
    },

    submitButton: 'إرسال الرسالة',
    successMessage: 'شكراً لك! سنعاود الاتصال بك قريباً.',
    errorMessage: 'عذراً! حدث خطأ ما. يرجى المحاولة مرة أخرى.'
  },

  // Contact Information
  contactInfo: {
    title: 'معلومات الاتصال',
    
    whatsappCard: {
      badge: '⚡ الأسرع',
      title: 'واتساب',
      description: 'احصل على ردود فورية',
      buttonText: 'تحدث الآن',
      phone: '+1234567890'
    },

    methods: [
      {
        id: 1,
        icon: 'email',
        title: 'البريد الإلكتروني',
        value: 'hello@msscode.com',
        link: 'mailto:hello@msscode.com'
      },
      {
        id: 2,
        icon: 'phone',
        title: 'الهاتف',
        value: '4567 123 555 1+',
        link: 'tel:+15551234567'
      },
      {
        id: 3,
        icon: 'location',
        title: 'المكتب',
        value: '123 شارع التقنية، وادي السيليكون، كاليفورنيا 94025',
        link: null
      }
    ],

    hours: {
      title: 'ساعات العمل',
      schedule: [
        'الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً',
        'السبت: 10:00 صباحاً - 4:00 مساءً',
        'الأحد: مغلق'
      ],
      note: 'دعم 24/7 متاح للمشاريع النشطة'
    }
  },

  // Trust Signals
  trustSignals: {
    title: 'لماذا تختارنا؟',
    signals: [
      {
        id: 1,
        icon: 'fast',
        text: 'وقت استجابة سريع'
      },
      {
        id: 2,
        icon: 'security',
        text: 'حماية اتفاقية السرية'
      },
      {
        id: 3,
        icon: 'check',
        text: 'استشارة مجانية'
      },
      {
        id: 4,
        icon: 'premium',
        text: 'عرض سعر بدون التزام'
      }
    ]
  },

  // Social Proof
  socialProof: {
    stats: [
      { number: '+500', label: 'مشروع' },
      { number: '+100', label: 'عميل' },
      { number: '%98', label: 'رضا' }
    ],
    testimonial: '"قدمت MSS Code مشروعنا في الوقت المحدد وتجاوزت التوقعات. أوصي بشدة!"',
    author: 'سارة جونسون، المدير التنفيذي'
  }
};
