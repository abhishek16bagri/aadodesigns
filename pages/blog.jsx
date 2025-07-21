// pages/blog.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Myfooter from '../components/Myfooter';
import MainScreenWrapper from '../components/MainScreenWrapper';

import {
  FiCalendar,
  FiUser,
  FiTag,
  FiClock,
  FiSearch,
  FiArrowRight,
  FiTrendingUp,
  FiEye,
  FiHeart,
  FiShare2,
  FiBookmark
} from 'react-icons/fi';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Artilce 1",
      excerpt: "Lorem Ipsum text",
      content: "Full content here...",
      author: "John Doe",
      date: "2025-01-15",
      category: "design-trends",
      tags: ["restaurant", "modern", "trends", "2025"],
      image: "/blog/restaurant-trends.jpg",
      readTime: "5 min read",
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: "Article 2",
      excerpt: "Lorem Ipsum",
      content: "Full content here...",
      author: "John Doe",
      date: "2025-01-12",
      category: "sustainability",
      tags: ["sustainable", "eco-friendly", "hospitality", "furniture"],
      image: "/blog/sustainable-furniture.jpg",
      readTime: "7 min read",
      views: 980,
      likes: 67,
      featured: false
    },
    {
      id: 3,
      title: "Article 3",
      excerpt: "Lorem Ipsum text",
      content: "Full content here...",
      author: "John Doe",
      date: "2025-01-10",
      category: "cafe-design",
      tags: ["café", "seating", "comfort", "design"],
      image: "/blog/cafe-seating.jpg",
      readTime: "4 min read",
      views: 756,
      likes: 45,
      featured: true
    },
   
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'design-trends', name: 'Design Trends', count: blogPosts.filter(p => p.category === 'design-trends').length },
    { id: 'sustainability', name: 'Sustainability', count: blogPosts.filter(p => p.category === 'sustainability').length },
    { id: 'cafe-design', name: 'Café Design', count: blogPosts.filter(p => p.category === 'cafe-design').length },
    { id: 'hotel-design', name: 'Hotel Design', count: blogPosts.filter(p => p.category === 'hotel-design').length },
    { id: 'buying-guide', name: 'Buying Guide', count: blogPosts.filter(p => p.category === 'buying-guide').length }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);


  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <MainScreenWrapper>
      <Navbar />
      <Head>
        <title>Blog - Aado Designs</title>
        <meta name="description" content="Stay updated with the latest furniture design trends, sustainability tips, and hospitality industry insights from Aado Designs experts." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold mb-6 animate-fade-in-up">Aado Designs Blog</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                Explore the latest trends, expert tips, and innovative ideas in furniture design.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="py-20 -mt-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Articles</h2>
              <p className="text-gray-600 text-lg">Hand-picked insights from our design experts</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {featuredPosts.map((post, index) => (
                <article key={post.id} className={`bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="relative h-64 bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                      <span className="text-green-700 font-semibold">Image Placeholder</span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FiCalendar />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiEye />
                        {post.views}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                          <FiUser className="text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{post.author}</p>
                          <p className="text-sm text-gray-500">Author</p>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.id}`} className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-all flex items-center gap-2 transform hover:scale-105">
                        Read More
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Main Blog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="mb-12">
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Articles</h2>
                  <p className="text-gray-600 text-lg">Stay updated with our newest insights and trends</p>
                </div>

                {/* Category Filter */}
                <div className="mb-12">
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                          selectedCategory === category.id
                            ? 'bg-green-600 text-white shadow-lg transform scale-105'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article key={post.id} className={`bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="relative h-48 bg-gray-200 rounded-t-2xl overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <span className="text-gray-600 font-semibold">Image Placeholder</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <FiCalendar />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <FiClock />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                          <Link href={`/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center">
                              <FiUser className="text-white text-sm" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">{post.author}</span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors">
                              <FiHeart />
                              {post.likes}
                            </div>
                            <div className="flex items-center gap-1 hover:text-blue-500 cursor-pointer transition-colors">
                              <FiShare2 />
                            </div>
                            <div className="flex items-center gap-1 hover:text-green-500 cursor-pointer transition-colors">
                              <FiBookmark />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {filteredPosts.length === 0 && (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiSearch className="text-4xl text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-600 mb-4">No articles found</h3>
                    <p className="text-gray-500 mb-8">Try adjusting your search terms or category filter.</p>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                      }}
                      className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-all"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
            
                {/* Most Read */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <FiTrendingUp className="text-green-600" />
                    Most Read
                  </h3>
                  <div className="space-y-4">
                    {blogPosts
                      .sort((a, b) => b.views - a.views)
                      .slice(0, 5)
                      .map((post, index) => (
                        <div key={post.id} className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                          <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <Link href={`/blog/${post.id}`} className="font-semibold text-gray-800 hover:text-green-600 text-sm leading-tight">
                              {post.title}
                            </Link>
                            <p className="text-xs text-gray-500 mt-1">{post.views} views</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl shadow-2xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <FiBookmark className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Never Miss an Update</h3>
                    <p className="text-sm opacity-90 mb-6">Get the latest design insights delivered to your inbox.</p>
                    
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                      />
                      <button className="w-full bg-white text-green-600 font-semibold py-3 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <Myfooter />
    </MainScreenWrapper>
  );
};

export default BlogPage;
