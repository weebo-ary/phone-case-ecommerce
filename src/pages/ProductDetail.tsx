import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Shield, Truck, RotateCcw, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link to="/products" className="text-orange-500 hover:text-orange-400">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  if (!selectedColor) {
    setSelectedColor(product.colors[0]);
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', product, selectedColor });
    }
  };

  // Mock additional images
  const productImages = [
    product.image,
    product.image, // Placeholder for additional views
    product.image, // Placeholder for additional views
    product.image  // Placeholder for additional views
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-orange-500' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-500 text-sm font-medium rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-orange-500 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-white">{product.name}</h1>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-orange-500 fill-current'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-white">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="px-2 py-1 bg-orange-500 text-white text-sm font-medium rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-400">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatibility */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Compatibility</h3>
              <div className="flex flex-wrap gap-2">
                {product.compatibility.map((device, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm border border-gray-700"
                  >
                    {device}
                  </span>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                      selectedColor === color
                        ? 'border-orange-500 bg-orange-500/10 text-orange-500'
                        : 'border-gray-700 bg-gray-900 text-gray-300 hover:border-gray-600'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-700 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-white font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-[1.02]"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-800">
              <div className="flex items-center space-x-3 text-gray-400">
                <Shield className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Lifetime Warranty</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Truck className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <RotateCcw className="h-5 w-5 text-orange-500" />
                <span className="text-sm">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;