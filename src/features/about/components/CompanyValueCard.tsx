import { motion } from 'framer-motion';
import { Heart, Lightbulb, Shield, Users, Target, Award } from 'lucide-react';
import { CompanyValue } from '../constants/about.types';

interface CompanyValueCardProps {
  value: CompanyValue;
  index: number;
}

const iconMap = {
  Heart,
  Lightbulb,
  Shield,
  Users,
  Target,
  Award,
};

export const CompanyValueCard = ({ value, index }: CompanyValueCardProps) => {
  const Icon = iconMap[value.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-8 text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-6">
        {Icon && <Icon className="w-8 h-8 text-blue-500" />}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
      <p className="text-gray-600">{value.description}</p>
    </motion.div>
  );
}; 