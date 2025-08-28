import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ 
      type: 'ADD_TO_CART', 
      product, 
      selectedColor: product.colors[0] 
    });
  };

  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl overflow-hidden border border-gray-800/50 hover:border-orange-500/30 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <Link
            to={`/product/${product.id}`}
            className="p-2 bg-black/80 hover:bg-orange-500 rounded-lg text-white transition-colors"
          >
            <Eye className="h-4 w-4" />
          </Link>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="p-2 bg-black/80 hover:bg-orange-500 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.originalPrice && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-md">
              SALE
            </span>
          )}
          {!product.inStock && (
            <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-md">
              OUT OF STOCK
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-orange-500 font-medium">{product.category}</span>
          <span className="text-gray-400">{product.brand}</span>
        </div>

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-white group-hover:text-orange-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-orange-500 fill-current'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">({product.reviews})</span>
        </div>

        {/* Compatibility */}
        <div className="text-gray-400 text-sm">
          <span className="font-medium">Compatible:</span> {product.compatibility[0]}
          {product.compatibility.length > 1 && (
            <span className="text-orange-500"> +{product.compatibility.length - 1} more</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through text-sm">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-lg text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;