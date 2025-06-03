import { AboutHero, TeamMember, CompanyValue, TimelineEvent, OfficeLocation } from './about.types';

export const aboutHero: AboutHero = {
  title: 'Our Story',
  subtitle: 'About Us',
  description: 'We are a team of passionate individuals dedicated to creating innovative digital solutions that help businesses thrive in the digital age.',
  image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=60',
  stats: [
    { value: '10+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '98%', label: 'Client Satisfaction' },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60',
    bio: 'With over 15 years of experience in digital technology, John leads our company with vision and innovation.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johnsmith',
      twitter: 'https://twitter.com/johnsmith',
    },
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60',
    bio: 'Sarah brings creativity and strategic thinking to every project, ensuring our designs are both beautiful and effective.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      github: 'https://github.com/sarahjohnson',
    },
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    bio: 'Michael is a full-stack developer with expertise in modern web technologies and a passion for clean code.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/michaelchen',
      github: 'https://github.com/michaelchen',
    },
  },
];

export const companyValues: CompanyValue[] = [
  {
    id: '1',
    title: 'Innovation',
    description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.',
    icon: 'Lightbulb',
  },
  {
    id: '2',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client communication.',
    icon: 'Award',
  },
  {
    id: '3',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and foster a collaborative environment.',
    icon: 'Users',
  },
  {
    id: '4',
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity in all our business practices.',
    icon: 'Shield',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '2013',
    title: 'Company Founded',
    description: 'Started with a vision to transform digital experiences.',
  },
  {
    id: '2',
    year: '2015',
    title: 'First Major Project',
    description: 'Successfully delivered a large-scale e-commerce platform.',
  },
  {
    id: '3',
    year: '2018',
    title: 'International Expansion',
    description: 'Opened offices in multiple countries to serve global clients.',
  },
  {
    id: '4',
    year: '2023',
    title: '10 Years of Excellence',
    description: 'Celebrated a decade of innovation and success.',
  },
];

export const officeLocations: OfficeLocation[] = [
  {
    id: '1',
    city: 'New York',
    country: 'United States',
    address: '123 Tech Street, Manhattan, NY 10001',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=60',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060,
    },
  },
  {
    id: '2',
    city: 'London',
    country: 'United Kingdom',
    address: '45 Digital Lane, Shoreditch, London EC2A 4BX',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278,
    },
  },
]; 