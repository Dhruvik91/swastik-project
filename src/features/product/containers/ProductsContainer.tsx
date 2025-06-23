"use client";
import { motion } from 'framer-motion';
import { ProductListingContainer } from "./ProductListingContainer";

export const ProductsContainer = () => {
    return (
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Premium Construction Materials
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Your trusted source for high-quality cement and concrete products. We deliver excellence in construction materials, 
                  ensuring strength, durability, and reliability for your building projects.
                </p>
              </motion.div>
            </div>
          </section>
    
          {/* Product Listing Section */}
          <section className="py-12">
            <ProductListingContainer />
          </section>
        </div>
      );
}