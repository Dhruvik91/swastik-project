import { HeroSection, FeatureCard, Testimonial, Statistic, ServiceHighlight } from './home.types';

export const heroSection: HeroSection = {
  title: 'Premium Construction Materials for Your Projects',
  subtitle: 'Your Trusted Partner in Construction',
  description: 'We provide high-quality cement and concrete products for all your construction needs, backed by decades of industry expertise.',
  ctaText: 'Explore Products',
  ctaLink: '/products',
  backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop&q=60',
};

export const features: FeatureCard[] = [
  {
    id: '1',
    title: 'Premium Cement',
    description: 'High-quality cement products for all construction requirements.',
    icon: 'Code',
    link: '/products#cement',
  },
  {
    id: '2',
    title: 'Ready-Mix Concrete',
    description: 'Custom-mixed concrete solutions delivered to your site.',
    icon: 'TrendingUp',
    link: '/products#ready-mix',
  },
  {
    id: '3',
    title: 'Construction Solutions',
    description: 'Specialized concrete mixes for specific construction needs.',
    icon: 'Palette',
    link: '/products#solutions',
  },
  {
    id: '4',
    title: 'Technical Support',
    description: 'Expert guidance and technical assistance for your projects.',
    icon: 'Smartphone',
    link: '/services#support',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'Project Manager',
    company: 'BuildRight Construction',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60',
    quote: 'Their premium cement quality and reliable delivery service have been crucial for our large-scale projects.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Construction Director',
    company: 'Modern Structures Ltd',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60',
    quote: 'The ready-mix concrete solutions have significantly improved our construction efficiency and quality.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Site Engineer',
    company: 'InfraTech Projects',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    quote: 'Their technical support team provides excellent guidance for specialized construction requirements.',
    rating: 5,
  },
];

export const statistics: Statistic[] = [
  {
    id: '1',
    value: '1000+',
    label: 'Projects Supplied',
    icon: 'CheckCircle',
  },
  {
    id: '2',
    value: '99%',
    label: 'Quality Rating',
    icon: 'Smile',
  },
  {
    id: '3',
    value: '24/7',
    label: 'Delivery Service',
    icon: 'Users',
  },
  {
    id: '4',
    value: '25+',
    label: 'Years Experience',
    icon: 'Award',
  },
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    id: '1',
    title: 'Premium Cement Products',
    description: 'High-strength cement products for various construction applications.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
    features: [
      'OPC & PPC Variants',
      'High Early Strength',
      'Consistent Quality',
      'Bulk Supply',
      'Quality Certified',
    ],
    ctaText: 'View Products',
    ctaLink: '/products#cement',
  },
  {
    id: '2',
    title: 'Ready-Mix Concrete Solutions',
    description: 'Custom-mixed concrete delivered to your construction site.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800&auto=format&fit=crop&q=60',
    features: [
      'Custom Mix Designs',
      'On-time Delivery',
      'Quality Control',
      'Technical Support',
      'Volume Discounts',
    ],
    ctaText: 'Learn More',
    ctaLink: '/products#ready-mix',
  },
]; 