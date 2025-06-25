import { motion } from 'framer-motion';
import { CheckCircle, Smile, Users, Award } from 'lucide-react';
import { Statistic } from '../constants/home.types';

interface StatisticCardProps {
  statistic: Statistic;
  index: number;
}

const iconMap = {
  CheckCircle,
  Smile,
  Users,
  Award,
};

export const StatisticCard = ({ statistic, index }: StatisticCardProps) => {
  const Icon = iconMap[statistic.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-4">
        {Icon && <Icon className="w-8 h-8 text-primary-500" />}
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-2">{statistic.value}</h3>
      <p className="text-gray-600">{statistic.label}</p>
    </motion.div>
  );
}; 