import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import HeroSlider from '../components/HeroSlider';
import MyFooter from '../components/Myfooter';
import { 
  FiAward, 
  FiUsers, 
  FiTruck, 
  FiStar,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiPhone
} from 'react-icons/fi';
import { 
  FaLeaf, 
  FaHandshake, 
  FaIndustry 
} from 'react-icons/fa';

const MyDashboard = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { icon: <FiUsers />, number: '500+', label: 'Happy Clients' },
    { icon: <FiAward />, number: '15+', label: 'Years Experience' },
    { icon: <FiTruck />, number: '1000+', label: 'Projects Delivered' },
    { icon: <FiStar />, number: '4.9', label: 'Client Rating' }
  ];

  const productCategories = [
    {
      name: 'Restaurant Furniture',
      description: 'Premium dining sets and seating solutions',
      image: '/restaurant-category.jpg',
      href: '/product?category=restaurant',
      featured: true
    },
    {
      name: 'Cafe Furniture',
      description: 'Cozy and modern cafe seating',
      image: '/cafe-category.jpg',
      href: '/product?category=cafe',
      featured: false
    },
    {
      name: 'Bar Furniture',
      description: 'Stylish bar stools and high tables',
      image: '/bar-category.jpg',
      href: '/product?category=bar',
      featured: false
    },
    {
      name: 'Hotel Furniture',
      description: 'Luxury hospitality solutions',
      image: '/hotel-category.jpg',
      href: '/product?category=hotel',
      featured: true
    },
    {
      name: 'Cane Furniture',
      description: 'Eco-friendly natural furniture',
      image: '/cane-category.jpg',
      href: '/product?category=cane',
      featured: false
    },
    {
      name: 'Office Furniture',
      description: 'Professional workspace solutions',
      image: '/office-category.jpg',
      href: '/product?category=office',
      featured: false
    }
  ];

  
  const features = [
    {
      icon: <FaLeaf className="text-2xl" />,
      title: 'Sustainable Materials',
      description: 'Eco-friendly furniture made with sustainable practices'
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: 'Custom Solutions',
      description: 'Tailored furniture designs to match your unique requirements'
    },
    {
      icon: <FaIndustry className="text-2xl" />,
      title: 'Quality Manufacturing',
      description: 'State-of-the-art manufacturing with quality assurance'
    }
  ];

  return (
    <>
      <Head>
        <title>Aado Designs - Premium Furniture Manufacturer</title>
        <meta name="description" content="Leading furniture manufacturer specializing in restaurant, cafe, bar, hotel and hospitality furniture. Premium quality, custom designs, and sustainable practices since 2016." />
        <style jsx>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out forwards;
          }

          .animate-slide-in-right {
            animation: slide-in-right 0.8s ease-out forwards;
          }

          .animation-delay-100 { animation-delay: 100ms; }
          .animation-delay-200 { animation-delay: 200ms; }
          .animation-delay-300 { animation-delay: 300ms; }
          .animation-delay-400 { animation-delay: 400ms; }
          .animation-delay-500 { animation-delay: 500ms; }
        `}</style>
      </Head>
       <HeroSlider />
      {/* Stats Section */}
      <section className="py-20 bg-white -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-2xl text-white">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-bold text-gray-800 mb-8">Crafting Premium Furniture Since 2016</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <FiCheckCircle className="text-green-600 text-xl" />
                  <span className="text-gray-700">15+ years of industry expertise</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiCheckCircle className="text-green-600 text-xl" />
                  <span className="text-gray-700">Custom design solutions</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiCheckCircle className="text-green-600 text-xl" />
                  <span className="text-gray-700">Sustainable manufacturing practices</span>
                </div>
                <div className="flex items-center gap-4">
                  <FiCheckCircle className="text-green-600 text-xl" />
                  <span className="text-gray-700">Pan-India delivery</span>
                </div>
              </div>
              <Link href="/about" className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 font-semibold">
                Learn More About Us
                <FiArrowRight />
              </Link>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <FaIndustry className="text-8xl text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700">Manufacturing Excellence</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Product Categories</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Explore our comprehensive range of premium furniture designed for different industries and spaces.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {productCategories.map((category, index) => (
        <Link key={index} href={category.href} aria-label={`Explore ${category.name} collection`}>
          <article className={`group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in-up ${category.featured ? 'ring-2 ring-green-300' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
            
            {/* Image/Icon Section */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 h-64 flex items-center justify-center relative overflow-hidden">
              {category.featured && (
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {category.icon || <FaIndustry className="text-3xl text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-700">{category.name}</h3>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 h-12 overflow-hidden">
                {category.description}
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:gap-4 transition-all">
                <span>Explore Collection</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>

    <div className="text-center mt-12 animate-fade-in-up animation-delay-500">
      <Link href="/product" className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-4 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 font-semibold text-lg">
        View All Products
        <FiArrowRight />
      </Link>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Why Choose Aado Designs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 animate-fade-in-up">Ready to Transform Your Space?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-400">
            <Link href="/contact" className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 flex items-center justify-center gap-3">
              <FiPhone />
              Get Quote Now
            </Link>
            <Link href="/product" className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
              Browse Products
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default MyDashboard;
