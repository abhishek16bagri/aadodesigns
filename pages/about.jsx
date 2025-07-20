// pages/about.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import MainScreenWrapper from '../components/MainScreenWrapper';
import MyFooter from '../components/Myfooter';
import { 
  FiAward, 
  FiUsers, 
  FiTruck, 
  FiHeart,
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiMapPin
} from 'react-icons/fi';
import { 
  FaLeaf, 
  FaHandshake, 
  FaIndustry, 
  FaGlobe 
} from 'react-icons/fa';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(0);

  const stats = [
    { icon: <FiUsers />, number: '500+', label: 'Happy Clients', color: 'blue' },
    { icon: <FiAward />, number: '15+', label: 'Years Experience', color: 'green' },
    { icon: <FiTruck />, number: '1000+', label: 'Projects Delivered', color: 'purple' },
    { icon: <FiStar />, number: '4.9', label: 'Client Rating', color: 'yellow' }
  ];

  const values = [
    {
      icon: <FaLeaf className="text-3xl" />,
      title: 'Sustainability',
      description: 'We are committed to eco-friendly practices and sustainable materials in all our furniture manufacturing.',
      color: 'green'
    },
    {
      icon: <FaHandshake className="text-3xl" />,
      title: 'Trust & Quality',
      description: 'Building lasting relationships through exceptional quality and transparent business practices.',
      color: 'blue'
    },
    {
      icon: <FaIndustry className="text-3xl" />,
      title: 'Innovation',
      description: 'Continuously evolving our designs and manufacturing processes to stay ahead in the industry.',
      color: 'purple'
    },
    {
      icon: <FaGlobe className="text-3xl" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with premium furniture solutions that meet international standards.',
      color: 'red'
    }
  ];

  return (
    <MainScreenWrapper>
      <Head>
        <title>About Us</title>
        
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

          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
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

          .animate-slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }

          .animation-delay-100 { animation-delay: 100ms; }
          .animation-delay-200 { animation-delay: 200ms; }
          .animation-delay-300 { animation-delay: 300ms; }
          .animation-delay-400 { animation-delay: 400ms; }
          .animation-delay-500 { animation-delay: 500ms; }
        `}</style>
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/about-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold mb-8 animate-fade-in-up">About Us</h1>
         
          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-400">
            <Link href="/contact" className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105">
              Get In Touch
            </Link>
            <Link href="/product" className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all">
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300 animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-white ${
                  stat.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  stat.color === 'green' ? 'bg-gradient-to-r from-green-500 to-green-600' :
                  stat.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  'bg-gradient-to-r from-yellow-500 to-yellow-600'
                }`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${index * 150}ms` }}>
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white ${
                  value.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  value.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  value.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                  'bg-gradient-to-br from-red-500 to-red-600'
                }`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
            Let's work together to create furniture solutions that perfectly match your vision and requirements.
          </p>
          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-400">
            <Link href="/contact" className="bg-white text-green-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 flex items-center gap-3">
              Start Your Project
              <FiArrowRight />
            </Link>
            <Link href="/product" className="border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      <MyFooter />
    </MainScreenWrapper>
  );
};

export default AboutPage;
