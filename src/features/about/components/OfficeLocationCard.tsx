import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { OfficeLocation } from '../constants/about.types';

interface OfficeLocationCardProps {
  location: OfficeLocation;
  index: number;
}

export const OfficeLocationCard = ({ location, index }: OfficeLocationCardProps) => {
  const { city, country, address, image } = location;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={`${city} Office`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{city}</h3>
        <p className="text-primary-500 mb-4">{country}</p>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
          <p className="text-gray-600">{address}</p>
        </div>
      </div>
    </motion.div>
  );
}; 