import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Testimonial } from '../constants/home.types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  const { name, role, company, image, quote, rating } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <blockquote className="text-gray-600 mb-6">&quot;{quote}&quot;</blockquote>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}; 