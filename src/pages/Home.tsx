import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Award, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
                  Future-Proof
                </span>
                <br />
                <span className="text-white">Your Device</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed">
                Experience next-generation protection with our quantum-enhanced mobile cases. 
                Where cutting-edge technology meets premium design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg shadow-orange-500/25"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Collection</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border-2 border-gray-600 hover:border-orange-500 text-white hover:text-orange-500 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-10 w-2 h-2 bg-orange-500 rounded-full animate-ping" />
          <div className="absolute top-2/3 right-20 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-orange-500">CaseForge</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our commitment to innovation, quality, and customer satisfaction sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Military-Grade Protection",
                description: "Tested to exceed drop test standards with advanced shock absorption technology."
              },
              {
                icon: Zap,
                title: "Wireless Charging Ready",
                description: "Seamless compatibility with all wireless charging standards and fast charging."
              },
              {
                icon: Award,
                title: "Premium Materials",
                description: "Aerospace-grade materials including carbon fiber, titanium, and quantum coatings."
              },
              {
                icon: Truck,
                title: "Fast & Free Shipping",
                description: "Free shipping on all orders with express delivery options available worldwide."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <feature.icon className="h-12 w-12 text-orange-500 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-orange-500">Products</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our most popular and innovative mobile case designs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500/10 via-black to-orange-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Be the first to know about new products, exclusive offers, and tech innovations.
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;