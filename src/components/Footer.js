import React, { useState } from 'react';

const Footer = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        institution: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

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
        setSubmitStatus(null);
      
        try {
          const formDataObj = new FormData();
          Object.entries(formData).forEach(([key, value]) => {
            formDataObj.append(key, value);
          });
      
          const response = await fetch("https://formspree.io/f/xpwyzppy", {
            method: "POST",
            body: formDataObj,
            headers: { Accept: "application/json" },
          });
      
          if (response.ok) {
            setSubmitStatus("success");
            setFormData({
              first_name: "",
              last_name: "",
              email: "",
              institution: "",
              message: "",
            });
          } else {
            setSubmitStatus("error");
          }
        } catch (error) {
          console.error("Formspree error:", error);
          setSubmitStatus("error");
        } finally {
          setIsSubmitting(false);
        }
    };

    return (
        <footer id="contact" className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            {/* Animated Background Shapes for Footer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Responsive floating elements - hide some on mobile */}
                <div className="absolute top-6 left-8 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/5 sm:bg-blue-400/10 rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '3.6s' }}></div>
                <div className="hidden sm:block absolute top-12 right-12 w-4 h-4 bg-purple-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.4s', animationDuration: '4.1s' }}></div>
                <div className="absolute bottom-8 left-1/5 w-3 h-3 sm:w-5 sm:h-5 bg-emerald-400/5 sm:bg-emerald-400/10 rounded-full animate-ping" style={{ animationDelay: '2.6s', animationDuration: '3.4s' }}></div>
                <div className="hidden md:block absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400/10 rounded-full animate-bounce" style={{ animationDelay: '0.7s', animationDuration: '3.9s' }}></div>
                <div className="hidden sm:block absolute bottom-12 right-16 w-4 h-4 bg-indigo-400/10 rounded-full animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '3.7s' }}></div>

                {/* Geometric Shapes - hide some on mobile */}
                <div className="hidden lg:block absolute top-8 right-1/5 w-6 h-6 border border-blue-300/10 rotate-45 animate-bounce" style={{ animationDelay: '2.1s', animationDuration: '4.2s' }}></div>
                <div className="hidden md:block absolute bottom-16 left-1/6 w-3 h-3 border border-purple-300/10 rounded-full animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '3.8s' }}></div>
                <div className="hidden lg:block absolute top-2/3 left-12 w-5 h-5 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rotate-12 animate-bounce" style={{ animationDelay: '1.6s', animationDuration: '3.5s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 sm:gap-8 lg:gap-10 mb-4 sm:mb-6">
                    
                    {/* Brand Section */}
                    <div className="text-center lg:text-left lg:col-span-3">
                        <div className="flex items-center gap-3 mb-3 sm:mb-4 justify-center lg:justify-start">
                            <img
                                src="/icon-logo.png"
                                alt="BeyondGrades.ai Logo"
                                className="size-8 sm:size-10 rounded-xl shadow-lg object-contain"
                            />
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold">BeyondGrades.ai</h3>
                                <p className="text-xs sm:text-sm text-gray-400">Evaluate | Aggregate | Analyze</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 mb-4">
                            Transforming education through intelligent automation, comprehensive analytics, and personalized learning experiences.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="text-center lg:text-left lg:col-span-3">
                        <h4 className="text-lg font-semibold mb-3 sm:mb-4">Get in Touch</h4>
                        <div className="space-y-2 sm:space-y-3">
                            {/* Email */}
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <a href="mailto:admin@beyondgrades.ai" className="text-blue-400 hover:text-blue-300 font-medium text-sm">admin@beyondgrades.ai</a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <a href="tel:+918800465165" className="text-emerald-400 hover:text-emerald-300 font-medium text-sm">+91 88004 65165</a>
                                </div>
                            </div>

                            {/* Instagram */}
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </div>
                                <div>
                                    <a href="https://instagram.com/beyondgrades.ai" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 font-medium text-sm">@beyondgrades.ai</a>
                                </div>
                            </div>

                            {/* Twitter (X) */}
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </div>
                                <div>
                                    <a href="https://x.com/beyondgrades_ai?t=3DeIknzH0XABQD25OX5yJA&s=08" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white font-medium text-sm">@beyondgrades_ai</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-gray-700/50 lg:col-span-4">
                        <h4 className="text-lg font-semibold mb-3 text-center">Send us a Message</h4>
                        
                        {/* Success/Error Messages */}
                        {submitStatus === 'success' && (
                            <div className="mb-3 p-2 bg-green-900/50 border border-green-700 rounded-xl">
                                <div className="flex items-center gap-2 text-green-400">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium text-xs">Message sent successfully!</span>
                                </div>
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-3 p-2 bg-red-900/50 border border-red-700 rounded-xl">
                                <div className="flex items-center gap-2 text-red-400">
                                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium text-xs">Failed to send message. Please try again.</span>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-3">
                            {/* First row: First Name and Last Name */}
                            <div className="grid grid-cols-2 gap-3">
                                <input 
                                    name="first_name" 
                                    type="text" 
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm" 
                                    placeholder="First Name"
                                    required 
                                />
                                <input 
                                    name="last_name" 
                                    type="text" 
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm" 
                                    placeholder="Last Name"
                                    required 
                                />
                            </div>
                            
                            {/* Second row: Email and Institution */}
                            <div className="grid grid-cols-2 gap-3">
                                <input 
                                    name="email" 
                                    type="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm" 
                                    placeholder="Email"
                                    required 
                                />
                                <input 
                                    name="institution" 
                                    type="text" 
                                    value={formData.institution}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm" 
                                    placeholder="Institution"
                                    required 
                                />
                            </div>
                            
                            {/* Third row: Message and Submit button side by side */}
                            <div className="grid grid-cols-4 gap-3 items-center">
                                <div className="col-span-3">
                                    <textarea 
                                        name="message" 
                                        rows="2" 
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 rounded-lg border border-gray-600 bg-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm resize-none" 
                                        placeholder="Your message..."
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="h-[50px] bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs px-3"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 pt-3 sm:pt-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="text-gray-400 text-xs sm:text-sm mb-2 md:mb-0">
                        © 2025 BeyondGrades.ai. All rights reserved. Made with ❤️ for education.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;