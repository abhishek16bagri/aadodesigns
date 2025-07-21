// pages/contact.js
import { useState } from 'react';
import Navbar from '../components/navbar'
import Myfooter from '../components/Myfooter'
import MainScreenWrapper from '../components/MainScreenWrapper'

import Head from 'next/head';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiHome,
  FiCheck
} from 'react-icons/fi';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin,
  FaTwitter 
} from 'react-icons/fa';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FiPhone className="text-2xl" />,
      title: 'Phone',
      details: ['+91 123456789'],
      link: 'tel:+91123456789',
      color: 'blue'
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: 'Email',
      details: ['info@example.com'],
      link: 'mailto:info@example.com',
      color: 'green'
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: 'Address',
      details: ['Sample'],
      link: '#',
      color: 'red'
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sun: 10:00 AM - 4:00 PM'],
      link: '#',
      color: 'purple'
    }
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, name: 'WhatsApp', link: 'https://wa.me/123456789', color: 'hover:text-green-500' },
    { icon: <FaFacebook />, name: 'Facebook', link: '#', color: 'hover:text-blue-600' },
    { icon: <FaInstagram />, name: 'Instagram', link: '#', color: 'hover:text-pink-500' },
    { icon: <FaLinkedin />, name: 'LinkedIn', link: '#', color: 'hover:text-blue-700' },
    { icon: <FaTwitter />, name: 'Twitter', link: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <MainScreenWrapper>
      <Navbar/>
      <Head>
        <title>Contact Us - Aado Designs | Premium Furniture Manufacturer</title>
        <meta name="description" content="Get in touch with Aado Designs for premium furniture solutions. Contact us for restaurant, cafe, hotel, and hospitality furniture." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Ready to transform your space with premium furniture? Our expert team is here to help you create the perfect environment for your business.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in-up animation-delay-400">
              <a href="tel:+919876543210" className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white/30 transition-all flex items-center gap-2">
                <FiPhone />
                Call Now
              </a>
              <a href="https://wa.me/123456789" className="bg-green-500 px-6 py-3 rounded-full hover:bg-green-400 transition-all flex items-center gap-2">
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 -mt-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl shadow-2xl p-10 transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Send us a Message</h2>
                    <p className="text-gray-600 text-lg">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                   

                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-100">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <FiUser className="inline mr-2 text-green-600" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <FiMail className="inline mr-2 text-green-600" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone and Company Row */}
                    <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-200">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <FiPhone className="inline mr-2 text-green-600" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          <FiHome className="inline mr-2 text-green-600" />
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="animate-fade-in-up animation-delay-400">
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <FiMessageSquare className="inline mr-2 text-green-600" />
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-all bg-gray-50 hover:bg-white"
                        placeholder="Tell us about your furniture needs, project details, timeline, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-5 px-8 rounded-xl font-semibold text-white transition-all duration-300 animate-fade-in-up animation-delay-500 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:shadow-2xl transform hover:-translate-y-1'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <FiSend className="mr-3" />
                          Send Message
                        </div>
                      )}
                    </button>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-green-800 animate-fade-in">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                            <FiCheck className="text-white font-bold" />
                          </div>
                          <div>
                            <p className="font-semibold text-lg">Message Sent Successfully!</p>
                            <p className="text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>

              {/* Contact Information Sidebar */}
              <div className="space-y-8">
                
                {/* Contact Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-start">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 ${
                          info.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                          info.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                          info.color === 'red' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                          'bg-gradient-to-br from-purple-500 to-purple-600'
                        }`}>
                          {info.icon}
                        </div>
                        <div className="ml-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-600 mb-1 leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in-up animation-delay-400">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-2xl transition-all hover:scale-110 transform ${social.color}`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              
            </div>
            
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiMapPin className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-600 mb-4">Interactive Map</h3>
                <p className="text-gray-500 mb-2">Google Maps here</p>
                <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
                <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    <Myfooter/>
    </MainScreenWrapper>
  );
};

export default ContactPage;
