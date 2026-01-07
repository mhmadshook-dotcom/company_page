/**
 * Contact page text constants
 * All text content for contact page
 */

export const CONTACT_TEXT = {
  // SEO
  seo: {
    title: 'Contact Us',
    description: 'Get in touch with MSS Code for a free consultation. Contact us via WhatsApp, email, or phone. Response time under 24 hours. Let\'s build something amazing together.',
    keywords: 'contact MSS Code, get quote, free consultation, software development inquiry, WhatsApp contact'
  },

  // Hero Section
  hero: {
    badge: '💬 Let\'s Talk',
    title: 'Ready to Start Your',
    titleHighlight: 'Next Project?',
    subtitle: 'Get in touch with us today for a free consultation. We\'re here to answer your questions and help bring your vision to life.',
    whatsapp: {
      badge: '⚡ Fastest Response',
      title: 'WhatsApp Us Directly',
      subtitle: 'Get instant responses to your queries',
      buttonText: 'Chat on WhatsApp',
      phone: '+1234567890'
    },
    responseTime: {
      icon: 'time',
      text: 'Average response time: Under 2 hours'
    }
  },

  // Form Section
  form: {
    title: 'Send Us a Message',
    subtitle: 'Fill out the form below and we\'ll get back to you within 24 hours.',
    
    fields: {
      name: {
        label: 'Full Name',
        placeholder: 'John Doe',
        required: true
      },
      email: {
        label: 'Email Address',
        placeholder: 'john@example.com',
        required: true
      },
      phone: {
        label: 'Phone Number',
        placeholder: '+1 (555) 000-0000',
        required: false
      },
      company: {
        label: 'Company Name',
        placeholder: 'Your Company Ltd.',
        required: false
      },
      service: {
        label: 'Service Interested In',
        placeholder: 'Select a service',
        required: true,
        options: [
          { value: '', label: 'Select a service' },
          { value: 'web', label: 'Web Development' },
          { value: 'mobile', label: 'Mobile App Development' },
          { value: 'cloud', label: 'Cloud Solutions' },
          { value: 'ai', label: 'AI & Machine Learning' },
          { value: 'design', label: 'UI/UX Design' },
          { value: 'security', label: 'Cybersecurity' },
          { value: 'other', label: 'Other Services' }
        ]
      },
      budget: {
        label: 'Project Budget',
        placeholder: 'Select budget range',
        required: false,
        options: [
          { value: '', label: 'Select budget range' },
          { value: 'small', label: 'Under $10,000' },
          { value: 'medium', label: '$10,000 - $50,000' },
          { value: 'large', label: '$50,000 - $100,000' },
          { value: 'enterprise', label: 'Over $100,000' }
        ]
      },
      message: {
        label: 'Project Details',
        placeholder: 'Tell us about your project requirements, goals, and timeline...',
        required: true,
        rows: 6
      }
    },

    submitButton: 'Send Message',
    successMessage: 'Thank you! We\'ll get back to you soon.',
    errorMessage: 'Oops! Something went wrong. Please try again.'
  },

  // Contact Information
  contactInfo: {
    title: 'Contact Information',
    
    whatsappCard: {
      badge: '⚡ Fastest',
      title: 'WhatsApp',
      description: 'Get instant responses',
      buttonText: 'Chat Now',
      phone: '+1234567890'
    },

    methods: [
      {
        id: 1,
        icon: 'email',
        title: 'Email',
        value: 'hello@msscode.com',
        link: 'mailto:hello@msscode.com'
      },
      {
        id: 2,
        icon: 'phone',
        title: 'Phone',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567'
      },
      {
        id: 3,
        icon: 'location',
        title: 'Office',
        value: '123 Tech Street, Silicon Valley, CA 94025',
        link: null
      }
    ],

    hours: {
      title: 'Business Hours',
      schedule: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ],
      note: '24/7 support available for active projects'
    }
  },

  // Trust Signals
  trustSignals: {
    title: 'Why Choose Us?',
    signals: [
      {
        id: 1,
        icon: 'fast',
        text: 'Fast response time'
      },
      {
        id: 2,
        icon: 'security',
        text: 'NDA protection'
      },
      {
        id: 3,
        icon: 'check',
        text: 'Free consultation'
      },
      {
        id: 4,
        icon: 'premium',
        text: 'No obligation quote'
      }
    ]
  },

  // Social Proof
  socialProof: {
    stats: [
      { number: '500+', label: 'Projects' },
      { number: '100+', label: 'Clients' },
      { number: '98%', label: 'Satisfaction' }
    ],
    testimonial: '"MSS Code delivered our project on time and exceeded expectations. Highly recommended!"',
    author: 'Sarah Johnson, CEO'
  }
};
