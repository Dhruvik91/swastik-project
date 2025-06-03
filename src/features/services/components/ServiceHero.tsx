import { motion } from 'framer-motion';

export const ServiceHero = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Premium Cement & Concrete Solutions
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Building the future with high-quality cement and concrete products, backed by expert technical support and reliable service
          </p>
        </motion.div>
      </div>
    </section>
  );
}; 