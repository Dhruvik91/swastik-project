import { motion } from 'framer-motion';

export const ServiceHero = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 