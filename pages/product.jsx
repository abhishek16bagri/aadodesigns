// pages/product.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import MainScreenWrapper from '../components/MainScreenWrapper';
import MyFooter from '../components/Myfooter';
import { 
  FiGrid,
  FiList,
  FiFilter,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiEye,
  FiChevronDown,
  FiStar,
  FiTag
} from 'react-icons/fi';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 48 },
    { id: 'restaurant', name: 'Restaurant Furniture', count: 12 },
    { id: 'cafe', name: 'Cafe Furniture', count: 8 },
    { id: 'bar', name: 'Bar Furniture', count: 6 },
    { id: 'hotel', name: 'Hotel Furniture', count: 10 },
    { id: 'cane', name: 'Cane Furniture', count: 7 },
    { id: 'office', name: 'Office Furniture', count: 5 }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium Restaurant Chair',
      category: 'restaurant',
      price: 12500,
      originalPrice: 15000,
      rating: 4.8,
      reviews: 24,
      image: '/products/restaurant-chair-1.jpg',
      badge: 'Bestseller',
      description: 'Elegant wooden chair perfect for fine dining restaurants'
    },
    {
      id: 2,
      name: 'Modern Cafe Table',
      category: 'cafe',
      price: 8500,
      originalPrice: null,
      rating: 4.6,
      reviews: 18,
      image: '/products/cafe-table-1.jpg',
      badge: 'New',
      description: 'Stylish round table ideal for coffee shops and casual dining'
    },
    {
      id: 3,
      name: 'Industrial Bar Stool',
      category: 'bar',
      price: 6500,
      originalPrice: 7500,
      rating: 4.9,
      reviews: 31,
      image: '/products/bar-stool-1.jpg',
      badge: 'Sale',
      description: 'Contemporary bar stool with adjustable height'
    },
    {
      id: 4,
      name: 'Luxury Hotel Sofa',
      category: 'hotel',
      price: 45000,
      originalPrice: null,
      rating: 5.0,
      reviews: 12,
      image: '/products/hotel-sofa-1.jpg',
      badge: 'Premium',
      description: 'Comfortable 3-seater sofa for hotel lobbies'
    },
    {
      id: 5,
      name: 'Cane Dining Set',
      category: 'cane',
      price: 22000,
      originalPrice: 25000,
      rating: 4.7,
      reviews: 16,
      image: '/products/cane-dining-1.jpg',
      badge: 'Eco-Friendly',
      description: 'Natural cane dining set for 4 people'
    },
    {
      id: 6,
      name: 'Executive Office Desk',
      category: 'office',
      price: 35000,
      originalPrice: null,
      rating: 4.8,
      reviews: 9,
      image: '/products/office-desk-1.jpg',
      badge: 'Professional',
      description: 'Spacious desk with built-in storage solutions'
    }
    // Add more products as needed
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return b.id - a.id;
    }
  });

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Bestseller':
        return 'bg-yellow-500';
      case 'New':
        return 'bg-green-500';
      case 'Sale':
        return 'bg-red-500';
      case 'Premium':
        return 'bg-purple-500';
      case 'Eco-Friendly':
        return 'bg-emerald-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <MainScreenWrapper>
      <Head>
        <title>Products - Aado Designs | Premium Furniture Collection</title>
        <meta name="description" content="Explore our extensive collection of premium furniture including restaurant, cafe, bar, hotel, and office furniture. Quality craftsmanship guaranteed." />
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

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }

          .animation-delay-100 { animation-delay: 100ms; }
          .animation-delay-200 { animation-delay: 200ms; }
          .animation-delay-300 { animation-delay: 300ms; }
        `}</style>
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">Our Products</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover our premium furniture collection designed to transform your space with style and functionality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Search and Filters Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fade-in-up">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              {/* View Toggle and Sort */}
              <div className="flex items-center gap-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : ''}`}
                  >
                    <FiGrid />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : ''}`}
                  >
                    <FiList />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                  <FiFilter />
                  Filters
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            
            {/* Sidebar Filters */}
            <aside className={`w-80 bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-24 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all flex justify-between items-center ${
                        activeCategory === category.id
                          ? 'bg-green-50 text-green-600 border-l-4 border-green-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100000])}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="text-sm text-gray-600">
                    ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Quick Filters */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Filters</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>On Sale</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>New Arrivals</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>Best Sellers</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>Eco-Friendly</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Products Grid/List */}
            <main className="flex-1">
              
              {/* Results Header */}
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600">
                  Showing {sortedProducts.length} of {products.length} products
                </p>
              </div>

              {/* Products Display */}
              <div className={`${viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
                : 'space-y-6'
              }`}>
                {sortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Product Image */}
                    <div className={`relative ${viewMode === 'list' ? 'w-64 h-48' : 'h-64'} bg-gradient-to-br from-gray-100 to-gray-200`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                          <FiTag className="text-3xl text-white" />
                        </div>
                      </div>
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className={`absolute top-4 left-4 px-3 py-1 text-white text-xs font-semibold rounded-full ${getBadgeColor(product.badge)}`}>
                          {product.badge}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                          <FiHeart size={16} />
                        </button>
                        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50">
                          <FiEye size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-800 hover:text-green-600 cursor-pointer">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <FiStar size={16} fill="currentColor" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-green-600">
                            ₹{product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 font-semibold">
                  Load More Products
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>

      <MyFooter />
    </MainScreenWrapper>
  );
};

export default ProductsPage;
