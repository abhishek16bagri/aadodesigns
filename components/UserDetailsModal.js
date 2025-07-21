// components/UserDetailsModal.js
import { useState } from 'react';
import { FiUser, FiPhone, FiMail } from 'react-icons/fi';

const UserDetailsModal = ({ isOpen, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit(formData);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-300 ease-out scale-100 opacity-100"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxHeight: '90vh',
          overflow: 'auto'
        }}
      >

        {/* Form Content */}
        <div className="px-8 py-2">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Tell Us About Yourself</h3>
            <p className="text-gray-600 text-sm">This will help us provide you with a personalized experience</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FiUser className="inline mr-2 text-green-600" />
                Your Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                  errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Mobile Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FiPhone className="inline mr-2 text-green-600" />
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                  errors.mobile ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                }`}
                placeholder="Enter your 10-digit mobile number"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FiMail className="inline mr-2 text-green-600" />
                Email Address <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-gray-50"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:shadow-lg transform hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Please wait...
                </div>
              ) : (
                'Continue to Website'
              )}
            </button>

            {/* Privacy Note */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <p className="text-xs text-gray-600 text-center">
                🔒 Your privacy matters. We use this information only to enhance your experience.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
