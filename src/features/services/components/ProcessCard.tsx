import { motion } from 'framer-motion';

interface ProcessCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export const ProcessCard = ({ title, description, icon, index }: ProcessCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-8 rounded-2xl shadow-lg relative"
    >
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
        {index + 1}
      </div>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}; 