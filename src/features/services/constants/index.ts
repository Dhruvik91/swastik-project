import type { Service, Process } from './types';

export const services: Service[] = [
  {
    title: 'Premium Cement',
    description: 'High-quality cement products for all your construction needs, ensuring durability and strength.',
    icon: '🏗️',
    features: [
      'OPC & PPC Variants',
      'High Strength Grade',
      'Quality Assured',
      'Bulk Supply Available',
    ],
    image: '/cement.jpg',
  },
  {
    title: 'Ready Mix Concrete',
    description: 'Custom-mixed concrete solutions delivered to your construction site, saving time and ensuring consistency.',
    icon: '🚛',
    features: [
      'On-site Delivery',
      'Custom Mix Designs',
      'Quality Control',
      '24/7 Service',
    ],
    image: '/concrete.jpg',
  },
  {
    title: 'Construction Materials',
    description: 'Complete range of construction materials to support your building projects from foundation to finish.',
    icon: '🏢',
    features: [
      'Aggregates Supply',
      'Building Materials',
      'Construction Chemicals',
      'Technical Support',
    ],
    image: '/materials.jpg',
  },
  {
    title: 'Technical Support',
    description: 'Expert technical guidance and support for all your construction material needs.',
    icon: '👷',
    features: [
      'Mix Design Consultation',
      'Quality Testing',
      'Application Support',
      'Project Planning',
    ],
    image: '/support.jpg',
  },
];

export const process: Process[] = [
  {
    title: 'Requirement Analysis',
    description: 'We assess your project needs and recommend the best cement and concrete solutions.',
    icon: '📋',
  },
  {
    title: 'Product Selection',
    description: 'Choose from our range of high-quality cement and concrete products.',
    icon: '🏗️',
  },
  {
    title: 'Order Processing',
    description: 'Quick and efficient processing of your material requirements.',
    icon: '📦',
  },
  {
    title: 'Delivery',
    description: 'Timely delivery of materials to your construction site.',
    icon: '🚛',
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous quality checks to ensure material standards.',
    icon: '✅',
  },
  {
    title: 'After-Sales Support',
    description: 'Continuous technical support and assistance throughout your project.',
    icon: '🛠️',
  },
]; 