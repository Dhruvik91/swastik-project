import { motion } from 'framer-motion';
import { ProcessCard } from './ProcessCard';
import { Process } from "../constants/types";

interface ProcessSectionProps {
  processes: Process[];
}

export const ProcessSection = ({ processes }: ProcessSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven methodology to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <ProcessCard
              key={process.title}
              {...process}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 