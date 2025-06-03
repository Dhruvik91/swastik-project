import { useState, useMemo } from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { ProductFilter } from '../components/ProductFilter';
import { Product, ProductFilter as ProductFilterType } from '../constants/product.types';
import { products, categories } from '../constants/product.data';

export const ProductListingContainer = () => {
  const [filter, setFilter] = useState<ProductFilterType>({});

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Apply category filter
    if (filter.category) {
      result = result.filter((product) => product.category === filter.category);
    }

    // Apply price filter
    if (filter.minPrice !== undefined) {
      result = result.filter((product) => product.price >= filter.minPrice!);
    }
    if (filter.maxPrice !== undefined) {
      result = result.filter((product) => product.price <= filter.maxPrice!);
    }

    // Apply sorting
    if (filter.sortBy) {
      result.sort((a, b) => {
        switch (filter.sortBy) {
          case 'price':
            return filter.sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          case 'newest':
            return b.id.localeCompare(a.id); // Using ID as a proxy for newness in this example
          default:
            return 0;
        }
      });
    }

    return result;
}, [filter]);

  const handleAddToWishlist = (product: Product) => {
    // Implement wishlist functionality
    console.log('Add to wishlist:', product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <ProductFilter
            categories={categories}
            currentFilter={filter}
            onFilterChange={setFilter}
          />
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
            <p className="text-gray-600">
              Discover our collection of premium products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid
              products={filteredProducts}
              onAddToWishlist={handleAddToWishlist}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 