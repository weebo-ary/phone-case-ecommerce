import React, { useState, useMemo } from 'react';
import { Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category.toLowerCase())))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = filterCategory === 'all' || product.category.toLowerCase() === filterCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [filterCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Collection</span>
          </h1>
          <p className="text-xl text-gray-400">
            Discover premium mobile cases designed for the future.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors lg:hidden"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>

            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <span className="text-gray-400 text-sm">
              {filteredAndSortedProducts.length} products
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-white font-semibold mb-4">Filters</h3>

              {/* Category Filter */}
              <div className="space-y-3 mb-6">
                <h4 className="text-gray-300 font-medium">Category</h4>
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={filterCategory === category}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="text-orange-500 focus:ring-orange-500 focus:ring-2"
                    />
                    <span className="text-gray-400 text-sm capitalize">
                      {category === 'all' ? 'All Categories' : category}
                    </span>
                  </label>
                ))}
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <h4 className="text-gray-300 font-medium">Price Range</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredAndSortedProducts.map((product) => (
                  <div key={product.id} className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-6">
                    {/* List view implementation */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                            <p className="text-gray-400 text-sm mb-2">{product.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-orange-500">{product.category}</span>
                              <span className="text-gray-400">{product.brand}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">${product.price}</div>
                            {product.originalPrice && (
                              <div className="text-gray-500 line-through text-sm">${product.originalPrice}</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 text-xl mb-4">No products found</div>
                <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;