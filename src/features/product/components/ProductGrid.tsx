import { Product } from '../constants/product.types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToWishlist?: (product: Product) => void;
}

export const ProductGrid = ({ products, onAddToWishlist }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}; 