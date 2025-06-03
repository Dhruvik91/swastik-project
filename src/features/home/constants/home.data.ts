import { HeroSection, FeatureCard, Testimonial, Statistic, ServiceHighlight } from './home.types';

export const heroSection: HeroSection = {
  title: 'Innovative Solutions for Your Digital Needs',
  subtitle: 'Welcome to Our Digital Agency',
  description: 'We help businesses transform their digital presence with cutting-edge technology and creative solutions.',
  ctaText: 'Get Started',
  ctaLink: '/contact',
  backgroundImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format&fit=crop&q=60',
};

export const features: FeatureCard[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
    icon: 'Code',
    link: '/services#web-development',
  },
  {
    id: '2',
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence.',
    icon: 'TrendingUp',
    link: '/services#digital-marketing',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that enhance user experience.',
    icon: 'Palette',
    link: '/services#ui-ux-design',
  },
  {
    id: '4',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: 'Smartphone',
    link: '/services#mobile-apps',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    quote: 'Working with this team has transformed our digital presence. Their expertise and dedication are unmatched.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60',
    quote: 'The digital marketing strategies implemented have significantly increased our online engagement and conversions.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'CreativeMinds',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    quote: 'Their attention to detail and creative approach helped us stand out in a competitive market.',
    rating: 5,
  },
];

export const statistics: Statistic[] = [
  {
    id: '1',
    value: '500+',
    label: 'Projects Completed',
    icon: 'CheckCircle',
  },
  {
    id: '2',
    value: '98%',
    label: 'Client Satisfaction',
    icon: 'Smile',
  },
  {
    id: '3',
    value: '50+',
    label: 'Team Members',
    icon: 'Users',
  },
  {
    id: '4',
    value: '10+',
    label: 'Years Experience',
    icon: 'Award',
  },
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    id: '1',
    title: 'Custom Web Development',
    description: 'We create tailored web solutions that perfectly match your business needs and goals.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    features: [
      'Responsive Design',
      'Modern Technologies',
      'SEO Optimization',
      'Performance Focus',
      'Security First',
    ],
    ctaText: 'Learn More',
    ctaLink: '/services#web-development',
  },
  {
    id: '2',
    title: 'Digital Marketing Solutions',
    description: 'Comprehensive digital marketing strategies to boost your online presence and drive growth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    features: [
      'SEO & SEM',
      'Social Media Marketing',
      'Content Strategy',
      'Analytics & Reporting',
      'Conversion Optimization',
    ],
    ctaText: 'Learn More',
    ctaLink: '/services#digital-marketing',
  },
]; 