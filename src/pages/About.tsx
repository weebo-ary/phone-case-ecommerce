import React from 'react';
import { Shield, Award, Users, Globe, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries Served' },
    { number: '1M+', label: 'Cases Sold' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Protection First',
      description: 'Every case is engineered to provide maximum protection without compromising on style or functionality.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest materials and cutting-edge manufacturing processes to ensure lasting durability.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with new technologies like quantum coatings and smart materials.'
    },
    {
      icon: Heart,
      title: 'Customer Love',
      description: 'Your satisfaction is our priority. We stand behind every product with comprehensive warranties.'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Former Apple engineer with 15 years in consumer electronics design.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      bio: 'Award-winning industrial designer specializing in protective gear innovation.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Materials Scientist',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'PhD in Materials Science, pioneer in quantum-enhanced protective coatings.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-transparent">
              Crafting the Future
            </span>
            <br />
            <span className="text-white">of Mobile Protection</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Since 2020, CaseForge has been at the forefront of mobile protection innovation. 
            We combine cutting-edge technology with premium materials to create cases that don't just protect—they enhance your device.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500/5 via-black to-orange-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                Our <span className="text-orange-500">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  CaseForge was born from a simple frustration: existing phone cases were either 
                  protective but bulky, or sleek but inadequate. Our founder, Sarah Chen, a former 
                  Apple engineer, set out to solve this age-old compromise.
                </p>
                <p>
                  Working with a team of materials scientists and designers, we developed our 
                  proprietary quantum-enhanced coating technology that provides military-grade 
                  protection in an impossibly thin form factor.
                </p>
                <p>
                  Today, we're proud to serve over 500,000 customers worldwide, each trusting 
                  us to protect their most important device. But we're just getting started—the 
                  future of mobile protection is being written right here.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg"
                alt="CaseForge Workshop"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-orange-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do, from design to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <value.icon className="h-12 w-12 text-orange-500 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500/5 via-black to-orange-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The brilliant minds behind CaseForge's innovative protection solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group text-center p-8 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-xl border border-gray-800 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-orange-500/20 group-hover:border-orange-500/40 transition-colors"
                  />
                  <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <Globe className="h-16 w-16 text-orange-500 mx-auto mb-8" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-orange-500/20 rounded-full blur-xl" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-2xl text-gray-300 leading-relaxed font-light">
            "To protect what matters most to you while pushing the boundaries of what's possible in mobile accessories. 
            Every case we create represents our commitment to innovation, quality, and your peace of mind."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;