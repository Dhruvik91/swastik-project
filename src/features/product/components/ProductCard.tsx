import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../constants/product.types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart, onAddToWishlist }: ProductCardProps) => {
  const {
    name,
    description,
    price,
    image,
    rating,
    reviews,
    discount,
    isNew,
    stock,
  } = product;

  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {isNew && (
          <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            New
          </span>
        )}
        {discount && (
          <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            -{discount}%
          </span>
        )}
        <button
          onClick={() => onAddToWishlist?.(product)}
          className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100"
        >
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({reviews})</span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
            )}
          </div>
          {/* <button
            onClick={() => onAddToCart?.(product)}
            disabled={stock === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
              stock === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
          </button> */}
        </div>
      </div>
    </motion.div>
  );
}; 