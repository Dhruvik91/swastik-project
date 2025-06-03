import { motion } from 'framer-motion';
import { TimelineEvent as TimelineEventType } from '../constants/about.types';

interface TimelineEventProps {
  event: TimelineEventType;
  index: number;
  isLast?: boolean;
}

export const TimelineEvent = ({ event, index, isLast = false }: TimelineEventProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12"
    >
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-200" />
      )}
      <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
        {event.year}
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </motion.div>
  );
}; 