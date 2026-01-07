/**
 * Arabic Footer text constants
 * نصوص التذييل بالعربية
 */

export const FOOTER_TEXT = {
  // Brand Section
  brand: {
    logo: 'MSS Code',
    tagline: 'نحول الأفكار إلى تجارب رقمية استثنائية. نبني المستقبل، سطر برمجي واحد في كل مرة.'
  },

  // Services List
  services: {
    title: 'الخدمات',
    items: [
      'تطوير الويب',
      'تطبيقات الموبايل',
      'الحلول السحابية',
      'الذكاء الاصطناعي',
      'تصميم واجهات المستخدم',
      'الاستشارات'
    ]
  },

  // Company Links
  company: {
    title: 'الشركة',
    links: [
      { label: 'من نحن', path: '/about' },
      { label: 'الخدمات', path: '/services' },
      { label: 'المشاريع', path: '/projects' },
      { label: 'الوظائف', path: '#' },
      { label: 'المدونة', path: '#' }
    ]
  },

  // Contact Information
  contact: {
    title: 'تواصل معنا',
    email: 'hello@msscode.com',
    phone: '4567 123 555 1+',
    address: '123 شارع التقنية، وادي السيليكون، كاليفورنيا 94025'
  },

  // Newsletter
  newsletter: {
    title: 'ابق على اطلاع',
    description: 'اشترك في نشرتنا الإخبارية لأحدث رؤى التكنولوجيا وأخبار الشركة.',
    placeholder: 'عنوان بريدك الإلكتروني',
    buttonText: 'اشترك',
    successMessage: 'شكراً على الاشتراك!',
    privacy: 'نحترم خصوصيتك. إلغاء الاشتراك في أي وقت.'
  },

  // Social Links
  social: [
    { name: 'لينكد إن', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'تويتر', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'جيت هاب', url: 'https://github.com', icon: 'github' },
    { name: 'فيسبوك', url: 'https://facebook.com', icon: 'facebook' }
  ],

  // Bottom Section
  bottom: {
    copyright: '© {year} MSS Code. جميع الحقوق محفوظة.',
    links: [
      { label: 'سياسة الخصوصية', path: '#' },
      { label: 'شروط الخدمة', path: '#' },
      { label: 'سياسة ملفات تعريف الارتباط', path: '#' }
    ]
  }
};
