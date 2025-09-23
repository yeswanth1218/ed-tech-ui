import React, { useState } from 'react';
import api from '../api/axiosInstance';

const ContactSection = () => {
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
            const response = await api.post('/admin/user_message', formData);
            
            if (response.status === 200) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    first_name: '',
                    last_name: '',
                    email: '',
                    institution: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="relative z-10 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Responsive floating elements - hide some on mobile */}
                <div className="absolute top-24 left-8 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-blue-400/10 sm:bg-blue-400/15 rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3.2s' }}></div>
                <div className="hidden sm:block absolute top-16 right-16 w-4 h-4 bg-purple-400/15 rounded-full animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '3.8s' }}></div>
                <div className="absolute bottom-28 left-1/5 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-emerald-400/10 sm:bg-emerald-400/15 rounded-full animate-ping" style={{ animationDelay: '0.7s', animationDuration: '4.2s' }}></div>
                <div className="hidden md:block absolute top-1/4 right-1/4 w-3 h-3 bg-orange-400/15 rounded-full animate-bounce" style={{ animationDelay: '2.1s', animationDuration: '3.6s' }}></div>
                <div className="hidden sm:block absolute bottom-16 right-8 w-5 h-5 bg-indigo-400/15 rounded-full animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '3.4s' }}></div>

                <div className="hidden lg:block absolute top-20 right-1/5 w-7 h-7 border-2 border-blue-300/15 rotate-45 animate-bounce" style={{ animationDelay: '1.4s', animationDuration: '4.1s' }}></div>
                <div className="hidden md:block absolute bottom-32 left-1/4 w-4 h-4 border-2 border-purple-300/15 rounded-full animate-pulse" style={{ animationDelay: '2.3s', animationDuration: '3.7s' }}></div>
                <div className="hidden lg:block absolute top-2/3 left-12 w-6 h-6 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rotate-12 animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '3.9s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6 sm:mb-8">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm font-semibold text-[#693393]">Get in Touch</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0d141c] mb-4 sm:mb-6 px-2">
                        Ready to Transform Your
                        <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Educational Experience?</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-[#49719c] max-w-3xl mx-auto px-2">
                        Our team is here to help you get started with BeyondGrades.ai. Reach out to us for demos, support, or partnership opportunities.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                        {/* Contact Details Section */}
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-gray-200/50 shadow-xl">
                            <div className="text-center mb-6 sm:mb-8">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0d141c] mb-3 sm:mb-4">Get in Touch</h3>
                                <p className="text-sm sm:text-base lg:text-lg text-[#49719c] mb-6 sm:mb-8">
                                    Ready to transform your educational experience? Reach out to us directly or fill out the form.
                                </p>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Email Us</h4>
                                        <a href="mailto:admin@beyondgrades.ai" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all">admin@beyondgrades.ai</a>
                                        <p className="text-xs sm:text-sm text-[#49719c] mt-1">We'll get back to you right away</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-100">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Call Us</h4>
                                        <a href="tel:+918800465165" className="text-emerald-600 hover:text-emerald-700 font-medium text-sm sm:text-base">+91 88004 65165</a>
                                        <p className="text-xs sm:text-sm text-[#49719c] mt-1">24/7 Available</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                                <h4 className="font-semibold text-[#0d141c] mb-3 text-sm sm:text-base">Why Choose BeyondGrades?</h4>
                                <ul className="space-y-2 text-xs sm:text-sm text-[#49719c]">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        AI-powered automated grading
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Real-time analytics and insights
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Seamless integration with existing systems
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-gray-200/50 shadow-xl">
                            <div className="text-center mb-4 sm:mb-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0d141c] mb-2">Send us a Message</h3>
                                <p className="text-[#49719c] text-sm sm:text-base">Fill out the form and we'll get back to you within 24 hours</p>
                                
                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mt-4 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl">
                                        <div className="flex items-center gap-2 text-green-700">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium text-xs sm:text-sm">Message sent successfully! We'll get back to you soon.</span>
                                        </div>
                                    </div>
                                )}
                                
                                {submitStatus === 'error' && (
                                    <div className="mt-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl">
                                        <div className="flex items-center gap-2 text-red-700">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-medium text-xs sm:text-sm">Failed to send message. Please try again or contact us directly.</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold text-[#0d141c] mb-2">First Name</label>
                                        <input 
                                            name="first_name" 
                                            type="text" 
                                            value={formData.first_name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base" 
                                            placeholder="Gaurav"
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs sm:text-sm font-semibold text-[#0d141c] mb-2">Last Name</label>
                                        <input 
                                            name="last_name" 
                                            type="text" 
                                            value={formData.last_name}
                                            onChange={handleInputChange}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base" 
                                            placeholder="Reddy"
                                            required 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-[#0d141c] mb-2">Email</label>
                                    <input 
                                        name="email" 
                                        type="email" 
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base" 
                                        placeholder="Gaurav.Reddy@institution.edu"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-[#0d141c] mb-2">Institution</label>
                                    <input 
                                        name="institution" 
                                        type="text" 
                                        value={formData.institution}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base" 
                                        placeholder="Your Institution Name"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs sm:text-sm font-semibold text-[#0d141c] mb-2">Message</label>
                                    <textarea 
                                        name="message" 
                                        rows="4" 
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base resize-none" 
                                        placeholder="Tell us about your needs and how we can help..."
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;


