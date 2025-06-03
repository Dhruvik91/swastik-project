import { AboutHero, TeamMember, CompanyValue, TimelineEvent, OfficeLocation } from './about.types';

export const aboutHero: AboutHero = {
  title: 'Building Tomorrow Together',
  subtitle: 'About Us',
  description: 'We are a leading provider of high-quality cement and concrete solutions, committed to building sustainable infrastructure and supporting construction projects of all scales across the nation.',
  image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop&q=60',
  stats: [
    { value: '25+', label: 'Years Experience' },
    { value: '1000+', label: 'Projects Supplied' },
    { value: '200+', label: 'Team Members' },
    { value: '99%', label: 'Quality Rating' },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60',
    bio: 'With over 25 years of experience in construction materials, Rajesh leads our company with expertise in cement manufacturing and sustainable building practices.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/rajeshkumar',
      twitter: 'https://twitter.com/rajeshkumar',
    },
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60',
    bio: 'Priya oversees our quality control and technical operations, ensuring our cement and concrete meet the highest industry standards.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/priyasharma',
    },
  },
  {
    id: '3',
    name: 'Amit Patel',
    role: 'Operations Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    bio: 'Amit manages our nationwide logistics and supply chain, ensuring timely delivery of our products to construction sites.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/amitpatel',
    },
  },
];

export const companyValues: CompanyValue[] = [
  {
    id: '1',
    title: 'Quality',
    description: 'We maintain the highest standards in cement and concrete production, ensuring durability and reliability.',
    icon: 'Award',
  },
  {
    id: '2',
    title: 'Sustainability',
    description: 'We are committed to eco-friendly manufacturing processes and sustainable building solutions.',
    icon: 'Shield',
  },
  {
    id: '3',
    title: 'Innovation',
    description: 'We continuously invest in research and development to improve our products and processes.',
    icon: 'Lightbulb',
  },
  {
    id: '4',
    title: 'Customer Focus',
    description: 'We prioritize understanding and meeting our customers\' specific construction needs.',
    icon: 'Users',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '1998',
    title: 'Company Founded',
    description: 'Started with a single cement manufacturing plant in Gujarat.',
  },
  {
    id: '2',
    year: '2005',
    title: 'Expansion Phase',
    description: 'Established multiple manufacturing units across India.',
  },
  {
    id: '3',
    year: '2015',
    title: 'Green Initiative',
    description: 'Launched eco-friendly cement variants and sustainable practices.',
  },
  {
    id: '4',
    year: '2023',
    title: '25 Years of Excellence',
    description: 'Celebrated a quarter-century of building India\'s infrastructure.',
  },
];

export const officeLocations: OfficeLocation[] = [
  {
    id: '1',
    city: 'Ahmedabad',
    country: 'India',
    address: '123 Industrial Estate, Naroda Road, Ahmedabad, Gujarat 382330',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
    coordinates: {
      lat: 23.0225,
      lng: 72.5714,
    },
  },
  {
    id: '2',
    city: 'Mumbai',
    country: 'India',
    address: '45 Construction Hub, Andheri East, Mumbai, Maharashtra 400093',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60',
    coordinates: {
      lat: 19.0760,
      lng: 72.8777,
    },
  },
]; 