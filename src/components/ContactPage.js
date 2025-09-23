import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    institution: '',
    phone: '',
    inquiryType: 'sales',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-4 text-[#0d141c]">
            <div className="relative">
              <img 
                src="/icon-logo.png" 
                alt="BeyondGrades.ai Logo" 
                className="size-10 rounded-xl shadow-lg object-contain"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-[#0d141c] text-xl font-bold leading-tight tracking-[-0.015em]">BeyondGrades.ai</h2>
              <p className="text-xs text-[#49719c] font-medium">Evaluate | Aggregate | Analyze</p>
            </div>
          </Link>
          
          <Link 
            className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-6 bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-[#0b79ee] hover:to-[#693393] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
            to="/login"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-[#693393]">Get in Touch</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0d141c] mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Educational Experience?</span>
          </h1>
          <p className="text-xl text-[#49719c] max-w-4xl mx-auto mb-12">
            Our team is here to help you get started with BeyondGrades.ai. Whether you need a demo, 
            have questions about pricing, or want to discuss a custom solution, we're ready to help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Sales */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Sales Inquiry</h3>
              <p className="text-[#49719c] mb-4 text-sm">Speak with our sales team to find the perfect plan for your institution.</p>
              <div className="space-y-2">
                <a href="mailto:sales@beyondgrades.ai" className="block text-blue-600 hover:text-blue-700 font-semibold text-sm">sales@beyondgrades.ai</a>
                <p className="text-[#49719c] text-sm">+1 (555) 123-4567</p>
                <p className="text-[#49719c] text-xs">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>

            {/* Technical Support */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Technical Support</h3>
              <p className="text-[#49719c] mb-4 text-sm">Get help with implementation, troubleshooting, and technical questions.</p>
              <div className="space-y-2">
                <a href="mailto:support@beyondgrades.ai" className="block text-emerald-600 hover:text-emerald-700 font-semibold text-sm">support@beyondgrades.ai</a>
                <p className="text-[#49719c] text-sm">+1 (555) 123-4568</p>
                <p className="text-[#49719c] text-xs">24/7 Support Available</p>
              </div>
            </div>

            {/* Partnership */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Partnership</h3>
              <p className="text-[#49719c] mb-4 text-sm">Explore collaboration opportunities and integration partnerships.</p>
              <div className="space-y-2">
                <a href="mailto:partnerships@beyondgrades.ai" className="block text-purple-600 hover:text-purple-700 font-semibold text-sm">partnerships@beyondgrades.ai</a>
                <p className="text-[#49719c] text-sm">+1 (555) 123-4569</p>
                <p className="text-[#49719c] text-xs">Strategic Partnerships</p>
              </div>
            </div>

            {/* General */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#693393] to-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">General Inquiry</h3>
              <p className="text-[#49719c] mb-4 text-sm">For general questions, media inquiries, and other communications.</p>
              <div className="space-y-2">
                <a href="mailto:hello@beyondgrades.ai" className="block text-orange-600 hover:text-orange-700 font-semibold text-sm">hello@beyondgrades.ai</a>
                <p className="text-[#49719c] text-sm">+1 (555) 123-4570</p>
                <p className="text-[#49719c] text-xs">Mon-Fri, 9AM-6PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-gray-200/50">
              <h2 className="text-3xl font-bold text-[#0d141c] mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0d141c] mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0d141c] mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#0d141c] mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" 
                    placeholder="john@institution.edu" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0d141c] mb-2">Institution</label>
                    <input 
                      type="text" 
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" 
                      placeholder="Your Institution Name" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0d141c] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" 
                      placeholder="+1 (555) 123-4567" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#0d141c] mb-2">Inquiry Type</label>
                  <select 
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Request Demo</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-[#0d141c] mb-2">Message *</label>
                  <textarea 
                    rows="5" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" 
                    placeholder="Tell us about your needs and how we can help..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
                
                <p className="text-sm text-[#49719c] text-center">
                  We'll get back to you within 24 hours during business days.
                </p>
              </form>
            </div>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Headquarters */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0d141c] mb-2">Headquarters</h3>
                    <div className="text-[#49719c] space-y-1">
                      <p>123 Innovation Drive</p>
                      <p>Tech Valley, CA 94025</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[#49719c]">
                  <p><strong>Business Hours:</strong></p>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Regional Office */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0d141c] mb-2">Regional Office</h3>
                    <div className="text-[#49719c] space-y-1">
                      <p>456 Education Boulevard</p>
                      <p>Boston, MA 02101</p>
                      <p>United States</p>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[#49719c]">
                  <p><strong>Business Hours:</strong></p>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM EST</p>
                  <p>Weekend: By appointment</p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link 
                    to="/login" 
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Start Free Trial</h4>
                      <p className="text-sm text-purple-100">Get started immediately</p>
                    </div>
                  </Link>
                  
                  <a 
                    href="#" 
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h6m-6 0l-.5 8.5A2 2 0 0013.5 21h-3A2 2 0 018.5 19L8 7z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Schedule Demo</h4>
                      <p className="text-sm text-purple-100">See BeyondGrades.ai in action</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+15551234567" 
                    className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-xl p-4 hover:bg-white/30 transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Call Us Now</h4>
                      <p className="text-sm text-purple-100">+1 (555) 123-4567</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-[#49719c]">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">How quickly can we get started?</h3>
              <p className="text-[#49719c]">Most institutions can be up and running within 1-2 weeks. Our team handles the entire setup process, including data migration and staff training.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">Do you offer training and support?</h3>
              <p className="text-[#49719c]">Yes! We provide comprehensive training for all users, ongoing technical support, and dedicated customer success management for Enterprise customers.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">Can BeyondGrades.ai integrate with our existing systems?</h3>
              <p className="text-[#49719c]">Absolutely! We offer robust API integrations and can work with your IT team to ensure seamless integration with your current educational technology stack.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">What about data security and privacy?</h3>
              <p className="text-[#49719c]">We take data security seriously. BeyondGrades.ai is FERPA compliant, uses bank-level encryption, and follows all educational data privacy regulations.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">Is there a minimum contract length?</h3>
              <p className="text-[#49719c]">No long-term contracts required! You can start with a monthly subscription and upgrade to annual billing for additional savings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#693393] via-[#0b79ee] to-[#6366f1] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Let's Start the Conversation
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Ready to transform your educational processes? Our team is standing by to help you get started.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:hello@beyondgrades.ai"
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white text-[#693393] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span>Email Us</span>
                </a>
                
                <a 
                  href="tel:+15551234567"
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/20 backdrop-blur-md text-white text-lg font-bold leading-normal tracking-[0.015em] border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;