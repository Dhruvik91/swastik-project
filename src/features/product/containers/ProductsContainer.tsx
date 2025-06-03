
"use client";
import { motion } from 'framer-motion';
import { ProductListingContainer } from "./ProductListingContainer";

export const ProductsContainer = () => {
    return (
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10" />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Discover Our Products
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our curated collection of premium products, designed to enhance your lifestyle
                  and bring innovation to your everyday life.
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