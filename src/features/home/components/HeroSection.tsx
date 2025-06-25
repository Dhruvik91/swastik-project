import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection as HeroSectionType } from '../constants/home.types';

interface HeroSectionProps {
  data: HeroSectionType;
}

export const HeroSection = ({ data }: HeroSectionProps) => {
  const { title, subtitle, description, ctaText, ctaLink, logo, productImages } = data;

  return (
    <section className="relative min-h-[80vh] flex items-center bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          {logo && (
            <Image src={logo} alt="Swastik Build Logo" width={120} height={120} className="mb-6" priority />
          )}
          <h2 className="text-xl sm:text-2xl font-medium text-primary-400 mb-4">{subtitle}</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">{title}</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">{description}</p>
          <Link
            href={ctaLink}
            className="inline-block px-8 py-4 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {ctaText}
          </Link>
        </div>
        {/* Right: Product Images */}
        <div className="w-full md:w-1/2 flex flex-row items-center justify-center gap-8">
          {productImages && productImages.map((img, idx) => (
            <Image
              key={img}
              src={img}
              alt={`Swastik Build Product ${idx + 1}`}
              width={220}
              height={320}
              className="object-contain drop-shadow-xl bg-white rounded-lg"
              priority={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}; 