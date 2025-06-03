import { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { ProductFilter as ProductFilterType, ProductCategory } from '../constants/product.types';

interface ProductFilterProps {
  categories: ProductCategory[];
  onFilterChange: (filter: ProductFilterType) => void;
  currentFilter: ProductFilterType;
}

export const ProductFilter = ({ categories, onFilterChange, currentFilter }: ProductFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (categoryId: string) => {
    onFilterChange({
      ...currentFilter,
      category: currentFilter.category === categoryId ? undefined : categoryId,
    });
  };

  const handleSortChange = (sortBy: ProductFilterType['sortBy'], sortOrder: ProductFilterType['sortOrder']) => {
    onFilterChange({
      ...currentFilter,
      sortBy,
      sortOrder,
    });
  };

  const handlePriceChange = (min?: number, max?: number) => {
    onFilterChange({
      ...currentFilter,
      minPrice: min,
      maxPrice: max,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-semibold text-gray-900 mb-4"
      >
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="space-y-6">
          {/* Categories */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    currentFilter.category === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Price Range</h3>
            <div className="flex items-center gap-4">
              <input
                type="number"
                placeholder="Min"
                value={currentFilter.minPrice || ''}
                onChange={(e) => handlePriceChange(Number(e.target.value), currentFilter.maxPrice)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                placeholder="Max"
                value={currentFilter.maxPrice || ''}
                onChange={(e) => handlePriceChange(currentFilter.minPrice, Number(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Sort Options */}
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Sort By</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSortChange('price', 'asc')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentFilter.sortBy === 'price' && currentFilter.sortOrder === 'asc'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Price: Low to High
              </button>
              <button
                onClick={() => handleSortChange('price', 'desc')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentFilter.sortBy === 'price' && currentFilter.sortOrder === 'desc'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Price: High to Low
              </button>
              <button
                onClick={() => handleSortChange('rating', 'desc')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentFilter.sortBy === 'rating'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Top Rated
              </button>
              <button
                onClick={() => handleSortChange('newest', 'desc')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentFilter.sortBy === 'newest'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Newest First
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 