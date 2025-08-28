import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const shipping = state.total > 100 ? 0 : 9.99;
  const tax = state.total * 0.08;
  const finalTotal = state.total + shipping + tax;

  const updateQuantity = (productId: number, newQuantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity: newQuantity });
  };

  const removeItem = (productId: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="relative inline-block">
              <ShoppingBag className="h-24 w-24 text-gray-600 mx-auto" />
              <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-2xl" />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">Your cart is empty</h1>
              <p className="text-xl text-gray-400">
                Discover our amazing collection of mobile cases
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <span>Start Shopping</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Shopping <span className="text-orange-500">Cart</span>
          </h1>
          <p className="text-xl text-gray-400">
            {state.items.length} {state.items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}`}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-6"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Product Image */}
                  <div className="sm:w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link
                          to={`/product/${item.product.id}`}
                          className="text-xl font-semibold text-white hover:text-orange-500 transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-gray-400 text-sm mt-1">
                          Color: {item.selectedColor}
                        </p>
                        <p className="text-gray-400 text-sm">
                          Brand: {item.product.brand}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <span className="text-gray-400 text-sm">Quantity:</span>
                        <div className="flex items-center border border-gray-700 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 text-white font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-gray-400 text-sm">
                          ${item.product.price} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between text-white text-xl font-bold">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {state.total < 100 && (
                <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <p className="text-orange-500 text-sm text-center">
                    Add ${(100 - state.total).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <Link
                to="/checkout"
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/products"
                className="w-full mt-4 flex items-center justify-center px-6 py-3 border-2 border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-500 rounded-xl font-medium transition-all duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;