import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FiUser,
  FiMenu,
  FiX,
  FiPhone,
  FiMail,
  FiChevronDown
} from 'react-icons/fi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for desktop product dropdown
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsProductsOpen(false);
      setIsMobileMenuOpen(false); 
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Products',
      href: '/product',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Restaurant Furniture', href: '/product/restaurant-furniture', description: 'Tables, chairs, and dining sets' },
        { name: 'Bar Furniture', href: '/product/bar-furniture', description: 'Bar stools and high tables' },
        { name: 'Hotel Furniture', href: '/product/hotel-furniture', description: 'Luxury hospitality furniture' },
        { name: 'Cane Furniture', href: '/product/cane-furniture', description: 'Natural wicker and rattan' },
        { name: 'Office Furniture', href: '/product/office-furniture', description: 'Desks, chairs, and storage' },
        { name: 'Outdoor Furniture', href: '/product/outdoor-furniture', description: 'Weather-resistant designs' },
        { name: 'Residential Furniture', href: '/product/residential-furniture', description: 'Home decor and living' },
      ]
    },
    {name: 'Blog', href: '/blog'},
    { name: 'Contact Us', href: '/contact' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FiPhone size={14} />
              <span>+91 123456789</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMail size={14} />
              <span>info@aadodesigns.com</span>
            </div>
          </div>
      
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Header Content */}
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0 mx-8">
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    Aado Designs
                  </h1>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Premium Furniture
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* User Account */}
              <Link href="/account" className="hidden md:flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-green-600 transition-colors">
                <FiUser size={20} />
                <span className="text-sm font-medium">Account</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-green-600"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:block border-t border-gray-200 relative">
            <ul className="flex items-center justify-center gap-8 py-4">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsProductsOpen(true)}
                      onMouseLeave={() => setIsProductsOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`relative text-sm font-medium transition-colors hover:text-green-600 flex items-center gap-1 ${
                          router.pathname === link.href || router.pathname.startsWith('/product')
                            ? 'text-green-600'
                            : 'text-gray-700'
                        }`}
                      >
                        {link.name}
                        <FiChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            isProductsOpen ? 'rotate-180' : ''
                          }`}
                        />
                        {(router.pathname === link.href || router.pathname.startsWith('/product')) && (
                          <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-green-600"></span>
                        )}
                      </Link>

                      {/* Products Dropdown Menu */}
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-white rounded-xl shadow-2xl border border-gray-100 p-6
                            transition-all duration-300 ease-out origin-top
                            ${
                              isProductsOpen
                                ? 'opacity-100 scale-y-100 pointer-events-auto h-auto' // visible, full height
                                : 'opacity-0 scale-y-95 pointer-events-none h-0 overflow-hidden' // hidden, no height, no clicks
                            }`}
                      >
                         {/* This div creates the upward-pointing triangle/caret */}
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white shadow-md"></div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-100 pb-2">
                          Explore Our Collections
                        </h3>
                        <div className="grid grid-cols-3 gap-x-6 gap-y-4"> {/* Adjusted to 3 columns */}
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-green-50 transition-colors group"
                            >
                              <div className="flex flex-col"> {/* Changed to flex-col for better layout with description */}
                                <h4 className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <Link
                            href="/product"
                            className="block text-center py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                          >
                            View All Products
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative text-sm font-medium transition-colors hover:text-green-600 ${
                        router.pathname === link.href
                          ? 'text-green-600'
                          : 'text-gray-700'
                      }`}
                    >
                      {link.name}
                      {router.pathname === link.href && (
                        <span className="absolute -bottom-4 left-0 w-full h-0.5 bg-green-600"></span>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-xl transform transition-transform overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Menu</h3>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <FiX size={24} />
                </button>
              </div>

              <nav>
                <ul className="space-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.hasDropdown ? (
                        <div>
                          <Link
                            href={link.href}
                            // No direct click handler for mobile dropdown here to allow it to be an accordion header
                            className={`block py-2 px-4 rounded-lg transition-colors font-medium ${
                              router.pathname === link.href || router.pathname.startsWith('/product')
                                ? 'bg-green-50 text-green-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                            onClick={(e) => {
                              // Prevent navigation if it's the product link in mobile, just toggle sub-menu
                              if (link.href === '/product') {
                                e.preventDefault();
                                setIsProductsOpen(!isProductsOpen); // Re-using isProductsOpen for mobile to signify sub-menu open
                              } else {
                                setIsMobileMenuOpen(false); // Close mobile menu if navigating to a non-dropdown link
                              }
                            }}
                          >
                            <div className="flex justify-between items-center">
                              {link.name}
                              <FiChevronDown
                                size={16}
                                className={`transition-transform duration-200 ${
                                  isProductsOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </Link>
                          <div
                            className={`ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                              isProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                          >
                            {link.dropdownItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block py-2 px-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-2 px-4 rounded-lg transition-colors ${
                            router.pathname === link.href
                              ? 'bg-green-50 text-green-600 font-medium'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  href="/account"
                  className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FiUser size={20} />
                  <span>My Account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;