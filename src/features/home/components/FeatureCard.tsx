import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, TrendingUp, Palette, Smartphone } from 'lucide-react';
import { FeatureCard as FeatureCardType } from '../constants/home.types';

interface FeatureCardProps {
  feature: FeatureCardType;
  index: number;
}

const iconMap = {
  Code,
  TrendingUp,
  Palette,
  Smartphone,
};

export const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const Icon = iconMap[feature.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
    >
      <Link href={feature.link} className="block">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
            {Icon && <Icon className="w-8 h-8 text-primary-500" />}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}; 