import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Smartphone className="h-8 w-8 text-orange-500 group-hover:text-orange-400 transition-colors" />
                <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-md group-hover:bg-orange-400/30 transition-all" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-orange-500 bg-clip-text text-transparent">
                CaseForge
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting the future of mobile protection with cutting-edge technology and premium materials. 
              Your device deserves the best.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-900/50 hover:bg-orange-500/20 rounded-lg text-gray-400 hover:text-orange-500 transition-all duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { path: '/products', label: 'All Products' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' },
                { path: '/support', label: 'Support' },
                { path: '/warranty', label: 'Warranty' },
                { path: '/returns', label: 'Returns' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Categories</h3>
            <nav className="flex flex-col space-y-2">
              {[
                'Premium Cases',
                'Gaming Cases', 
                'Luxury Cases',
                'Clear Cases',
                'Rugged Cases',
                'Battery Cases'
              ].map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${category.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">123 Tech Street, Silicon Valley, CA 94000</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <span className="text-sm">hello@caseforge.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-white font-medium mb-2">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-l-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-r-lg transition-all duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 CaseForge. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-orange-500 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;