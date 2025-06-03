import type { Service, Process } from './types';

export const services: Service[] = [
  {
    title: 'Web Design',
    description: 'Create stunning, responsive websites that captivate your audience and drive results.',
    icon: '🎨',
    features: [
      'Modern & Responsive Design',
      'User Experience Optimization',
      'Custom Branding',
      'Interactive Elements',
    ],
    image: '/web-design.jpg',
  },
  {
    title: 'Development',
    description: 'Build powerful, scalable applications with cutting-edge technology and best practices.',
    icon: '💻',
    features: [
      'Full-Stack Development',
      'API Integration',
      'Performance Optimization',
      'Security Implementation',
    ],
    image: '/development.jpg',
  },
  {
    title: 'Digital Marketing',
    description: 'Reach your target audience and grow your business with effective digital marketing strategies.',
    icon: '📈',
    features: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Strategy',
      'Analytics & Reporting',
    ],
    image: '/marketing.jpg',
  },
  {
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences that keep your users coming back.',
    icon: '✨',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Usability Testing',
      'Design Systems',
    ],
    image: '/ui-ux.jpg',
  },
];

export const process: Process[] = [
  {
    title: 'Discovery',
    description: 'We start by understanding your needs, goals, and target audience.',
    icon: '🔍',
  },
  {
    title: 'Strategy',
    description: 'We develop a comprehensive plan to achieve your objectives.',
    icon: '📋',
  },
  {
    title: 'Design',
    description: 'We create beautiful, functional designs that align with your brand.',
    icon: '🎯',
  },
  {
    title: 'Development',
    description: 'We build your solution using the latest technologies and best practices.',
    icon: '⚡',
  },
  {
    title: 'Launch',
    description: 'We deploy your project and ensure everything runs smoothly.',
    icon: '🚀',
  },
  {
    title: 'Support',
    description: 'We provide ongoing support and maintenance to keep your solution running optimally.',
    icon: '🛠️',
  },
]; 