import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@caseforge.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Silicon Valley, CA 94000',
      description: 'Come see our showroom'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 8am-5pm PST',
      description: 'Weekend support available'
    }
  ];

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day hassle-free return policy. If you\'re not completely satisfied, return your case for a full refund.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes! We ship to over 50 countries worldwide. International shipping typically takes 7-14 business days.'
    },
    {
      question: 'Are your cases wireless charging compatible?',
      answer: 'Absolutely! All our cases are designed to work seamlessly with wireless charging and MagSafe technology.'
    },
    {
      question: 'What materials do you use?',
      answer: 'We use premium materials including aerospace-grade aluminum, carbon fiber, and our proprietary quantum-enhanced coatings.'
    }
  ];

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions about our products or need support? We're here to help you find the perfect protection for your device.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="relative mb-4">
                <info.icon className="h-8 w-8 text-orange-500 mx-auto group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-orange-500 font-medium mb-1">{info.content}</p>
              <p className="text-gray-400 text-sm">{info.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="order-support">Order Support</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="return-exchange">Return/Exchange</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02]"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Frequently Asked <span className="text-orange-500">Questions</span>
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Support */}
            <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 rounded-xl border border-orange-500/20 p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Need Immediate Help?</h3>
              <p className="text-gray-400 mb-4">
                Our support team is available 24/7 to assist you with any urgent inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:support@caseforge.com"
                  className="flex items-center justify-center space-x-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email Support</span>
                </a>
                <a
                  href="tel:+15551234567"
                  className="flex items-center justify-center space-x-2 px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-lg font-medium transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Visit Our Showroom</h2>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <p className="text-white text-lg font-medium">Interactive Map</p>
                <p className="text-gray-400">123 Tech Street, Silicon Valley, CA 94000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;