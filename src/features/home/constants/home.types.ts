export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
  logo?: string;
  productImages?: string[];
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: 'Code' | 'TrendingUp' | 'Palette' | 'Smartphone';
  link: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: 'CheckCircle' | 'Smile' | 'Users' | 'Award';
}

export interface ServiceHighlight {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
} 