import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [loginType, setLoginType] = useState('student');
  const [isVisible, setIsVisible] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const dropdownContent = {
    features: {
      title: "Quick Overview",
      items: [
        { name: "AI Assessment", desc: "See all features →" },
        { name: "Real-time Analytics", desc: "Explore capabilities →" },
        { name: "Smart Personalization", desc: "Learn more →" },
        { name: "View All Features", desc: "Complete feature list →" }
      ]
    },
    solutions: {
      title: "Find Your Fit",
      items: [
        { name: "Schools (K-12)", desc: "View solution →" },
        { name: "Universities", desc: "Explore options →" },
        { name: "Training Centers", desc: "See details →" },
        { name: "Compare All Solutions", desc: "Full comparison →" }
      ]
    },
    pricing: {
      title: "Plans Overview",
      items: [
        { name: "Starter - $99/mo", desc: "View details →" },
        { name: "Professional - $299/mo", desc: "Most popular →" },
        { name: "Enterprise - $799/mo", desc: "Full features →" },
        { name: "See All Pricing", desc: "Compare plans →" }
      ]
    },
    contact: {
      title: "Quick Actions",
      items: [
        { name: "Schedule Demo", desc: "Book a call →" },
        { name: "Get Quote", desc: "Pricing info →" },
        { name: "Technical Support", desc: "Get help →" },
        { name: "All Contact Options", desc: "More ways to reach us →" }
      ]
    },
    about: {
      title: "Learn More",
      items: [
        { name: "Our Mission", desc: "Why we exist →" },
        { name: "The Team", desc: "Meet our experts →" },
        { name: "Company Story", desc: "Our journey →" },
        { name: "Full About Page", desc: "Complete information →" }
      ]
    }
  };

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      {/* Enhanced Background with AI-themed elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating AI-themed elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-20 animate-pulse transform rotate-12"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-3xl opacity-25 transform -rotate-12"></div>
        <div className="absolute bottom-20 right-40 w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute top-80 right-1/3 w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl opacity-30 transform rotate-45"></div>
        
        {/* Neural network inspired connections */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#3b82f6" opacity="0.5"/>
              <circle cx="150" cy="100" r="2" fill="#6366f1" opacity="0.5"/>
              <circle cx="100" cy="150" r="2" fill="#8b5cf6" opacity="0.5"/>
              <line x1="50" y1="50" x2="150" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
              <line x1="150" y1="100" x2="100" y2="150" stroke="#6366f1" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)"/>
        </svg>
      </div>
      
      {/* Enhanced Header */}
      <header className={`relative z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 px-6 lg:px-10 py-4 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="flex items-center justify-between whitespace-nowrap max-w-7xl mx-auto">
          <div className="flex items-center gap-4 text-[#0d141c]">
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
              <p className="text-xs text-[#49719c] font-medium">Evaluate | Aggrigate | Analyze</p>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8 relative">
              {/* Features Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('features')}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" to="/features">
                   Features
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                {activeDropdown === 'features' && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-80 z-[60]"
                    onMouseEnter={() => handleMouseEnter('features')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                      <h3 className="text-lg font-bold text-[#0d141c] mb-4">{dropdownContent.features.title}</h3>
                      <div className="space-y-3">
                        {dropdownContent.features.items.map((item, index) => (
                          <Link 
                            key={index} 
                            to="/features" 
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer group"
                          >
                            <div className="w-2 h-2 bg-[#693393] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-[#0d141c] text-sm group-hover:text-[#693393] transition-colors">{item.name}</h4>
                              <p className="text-xs text-[#49719c] mt-1">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" to="/solutions">
                   Solutions
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                {activeDropdown === 'solutions' && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-80 z-[60]"
                    onMouseEnter={() => handleMouseEnter('solutions')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                      <h3 className="text-lg font-bold text-[#0d141c] mb-4">{dropdownContent.solutions.title}</h3>
                      <div className="space-y-3">
                        {dropdownContent.solutions.items.map((item, index) => (
                          <Link 
                            key={index} 
                            to="/solutions" 
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group"
                          >
                            <div className="w-2 h-2 bg-[#0b79ee] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-[#0d141c] text-sm group-hover:text-[#0b79ee] transition-colors">{item.name}</h4>
                              <p className="text-xs text-[#49719c] mt-1">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('pricing')}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" to="/pricing">
                   Pricing
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                {activeDropdown === 'pricing' && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-80 z-[60]"
                    onMouseEnter={() => handleMouseEnter('pricing')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                      <h3 className="text-lg font-bold text-[#0d141c] mb-4">{dropdownContent.pricing.title}</h3>
                      <div className="space-y-3">
                        {dropdownContent.pricing.items.map((item, index) => (
                          <Link 
                            key={index} 
                            to="/pricing" 
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors cursor-pointer group"
                          >
                            <div className="w-2 h-2 bg-[#6366f1] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-[#0d141c] text-sm group-hover:text-[#6366f1] transition-colors">{item.name}</h4>
                              <p className="text-xs text-[#49719c] mt-1">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                       </div>
                     </div>
                   </div>
                 )}
              </div>

              {/* Contact Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" to="/contact">
                   Contact
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                {activeDropdown === 'contact' && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-80 z-[60]"
                    onMouseEnter={() => handleMouseEnter('contact')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                      <h3 className="text-lg font-bold text-[#0d141c] mb-4">{dropdownContent.contact.title}</h3>
                      <div className="space-y-3">
                        {dropdownContent.contact.items.map((item, index) => (
                          <Link 
                            key={index} 
                            to="/contact" 
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors cursor-pointer group"
                          >
                            <div className="w-2 h-2 bg-[#693393] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-[#0d141c] text-sm group-hover:text-[#693393] transition-colors">{item.name}</h4>
                              <p className="text-xs text-[#49719c] mt-1">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Us Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <Link className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" to="/about">
                   About Us
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                 </Link>
                {activeDropdown === 'about' && (
                  <div 
                    className="absolute top-full left-0 pt-2 w-80 z-[60]"
                    onMouseEnter={() => handleMouseEnter('about')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">
                      <h3 className="text-lg font-bold text-[#0d141c] mb-4">{dropdownContent.about.title}</h3>
                      <div className="space-y-3">
                        {dropdownContent.about.items.map((item, index) => (
                          <Link 
                            key={index} 
                            to="/about" 
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer group"
                          >
                            <div className="w-2 h-2 bg-[#0b79ee] rounded-full mt-2 flex-shrink-0"></div>
                            <div>
                              <h4 className="font-semibold text-[#0d141c] text-sm group-hover:text-[#0b79ee] transition-colors">{item.name}</h4>
                              <p className="text-xs text-[#49719c] mt-1">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Enhanced Login Type Toggle */}
            <div className="hidden sm:flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1 shadow-inner">
              {['student', 'teacher', 'org'].map((type) => (
                <button
                  key={type}
                  onClick={() => setLoginType(type)}
                  className={`py-2 px-4 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    loginType === type
                      ? 'bg-white text-[#0d141c] shadow-md transform scale-105'
                      : 'text-[#49719c] hover:text-[#0d141c] hover:bg-white/50'
                  }`}
                >
                  {type === 'org' ? 'Admin' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
            
            <Link 
              className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-6 bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-[#0b79ee] hover:to-[#693393] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
              to="/login"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative z-10 flex-1 flex flex-col justify-center items-center px-6 lg:px-10 py-20 lg:py-32 text-center">
          <div className={`flex flex-col gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mx-auto mb-4">
              <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#693393]">Powered by Advanced AI Technology</span>
              <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative">
              <h1 className="text-[#0d141c] text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-[-0.033em] mb-6">
                Transform Education with
                <br />
                <span className="bg-gradient-to-r from-[#693393] via-[#0b79ee] to-[#6366f1] bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                <span className="relative">
                  Intelligence
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#0b79ee] to-[#8b5cf6] rounded-full"></div>
                </span>
              </h1>
              
              {/* Floating elements around title */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 animate-bounce transform rotate-12"></div>
              <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-8 left-1/4 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl opacity-40 animate-ping"></div>
            </div>
            
            <p className="text-[#49719c] text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
              Revolutionize student assessment, performance tracking, and educational analytics with our comprehensive AI-driven platform designed for modern institutions.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8">
              <Link 
                className="group flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-gradient-to-r from-[#693393] via-[#0b79ee] to-[#6366f1] text-white text-lg font-bold leading-normal tracking-[0.015em] hover:shadow-2xl transition-all duration-500 transform hover:scale-110 relative" 
                to="/login"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] via-[#0b79ee] to-[#693393] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Start Free Trial</span>
                <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button className="group flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/90 backdrop-blur-md text-[#0d141c] text-lg font-bold leading-normal tracking-[0.015em] border-2 border-gray-200 hover:border-[#693393] hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Watch Demo</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            
            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mt-16 text-center">
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent">50K+</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
                </div>
                <span className="text-sm lg:text-base text-[#49719c] font-medium mt-2">Active Students</span>
                <span className="text-xs text-[#49719c] opacity-75">Across 200+ institutions</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#0b79ee] to-[#6366f1] bg-clip-text text-transparent">1M+</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#0b79ee] to-[#6366f1] rounded-full animate-pulse"></div>
                </div>
                <span className="text-sm lg:text-base text-[#49719c] font-medium mt-2">Assessments Processed</span>
                <span className="text-xs text-[#49719c] opacity-75">AI-powered evaluations</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#6366f1] to-[#693393] bg-clip-text text-transparent">99.2%</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#6366f1] to-[#693393] rounded-full animate-pulse"></div>
                </div>
                <span className="text-sm lg:text-base text-[#49719c] font-medium mt-2">Accuracy Rate</span>
                <span className="text-xs text-[#49719c] opacity-75">Industry-leading precision</span>
              </div>
              <div className="flex flex-col items-center group">
                <div className="relative">
                  <span className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#693393] to-[#6366f1] bg-clip-text text-transparent">24/7</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-[#693393] to-[#6366f1] rounded-full animate-pulse"></div>
                </div>
                <span className="text-sm lg:text-base text-[#49719c] font-medium mt-2">AI Support</span>
                <span className="text-xs text-[#49719c] opacity-75">Always available</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 py-24 px-6 lg:px-10">
          {/* Animated Background Shapes for Features Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating AI Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{animationDelay: '2s', animationDuration: '3s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-orange-400/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
            <div className="absolute bottom-20 right-10 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-16 right-1/4 w-8 h-8 border-2 border-blue-300/20 rotate-45 animate-bounce" style={{animationDelay: '2.5s', animationDuration: '4s'}}></div>
            <div className="absolute bottom-40 left-1/3 w-6 h-6 border-2 border-purple-300/20 rounded-full animate-pulse" style={{animationDelay: '0.8s', animationDuration: '3s'}}></div>
            <div className="absolute top-1/2 left-16 w-5 h-5 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-bounce" style={{animationDelay: '1.2s', animationDuration: '3.8s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-[#693393]">Revolutionary Features</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0d141c] mb-6">
                Why Leading Institutions Choose
                <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> BeyondGrades.ai</span>
              </h2>
              <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
                Experience the future of education with our comprehensive AI-powered platform designed to transform how institutions manage, assess, and optimize learning outcomes.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* AI-Powered Assessment */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">AI-Powered Assessment</h3>
                <p className="text-[#49719c] mb-4">Revolutionary automated evaluation system that processes handwritten answers, provides detailed feedback, and generates comprehensive performance analytics.</p>
                <ul className="text-sm text-[#49719c] space-y-2">
                  <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Handwriting recognition</li>
                  <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Intelligent scoring</li>
                  <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Instant feedback</li>
                </ul>
              </div>
              
              {/* Real-time Analytics */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">Real-time Analytics</h3>
                <p className="text-[#49719c] mb-4">Advanced dashboard with live performance metrics, predictive insights, and actionable recommendations to improve learning outcomes.</p>
                <ul className="text-sm text-[#49719c] space-y-2">
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>Live performance tracking</li>
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>Predictive analytics</li>
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>Custom reports</li>
                </ul>
              </div>
              
              {/* Smart Personalization */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">Smart Personalization</h3>
                <p className="text-[#49719c] mb-4">AI-driven personalized learning paths that adapt to individual student needs, learning styles, and performance patterns.</p>
                <ul className="text-sm text-[#49719c] space-y-2">
                  <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Adaptive learning paths</li>
                  <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Individual recommendations</li>
                  <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Learning style analysis</li>
                </ul>
              </div>
              
              {/* Comprehensive Management */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#693393] to-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">Comprehensive Management</h3>
                <p className="text-[#49719c] mb-4">Complete institutional management suite covering student records, faculty coordination, financial tracking, and administrative workflows.</p>
                <ul className="text-sm text-[#49719c] space-y-2">
                  <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Student information system</li>
                  <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Faculty management</li>
                  <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Financial oversight</li>
                </ul>
              </div>
              
              {/* Seamless Integration */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0b79ee] to-[#693393] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">Seamless Integration</h3>
                <p className="text-[#49719c] mb-4">Easy integration with existing systems, third-party tools, and educational platforms with robust API support and data migration assistance.</p>
                <ul className="text-sm text-[#49719c] space-y-2">
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>API integrations</li>
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>Data migration</li>
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>Third-party compatibility</li>
                </ul>
              </div>
              
              {/* 24/7 AI Support */}
              <div className="group bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#0b79ee] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">24/7 AI Support</h3>
                <p className="text-[#49719c] mb-4">Round-the-clock intelligent support system with AI chatbot assistance, comprehensive documentation, and dedicated customer success team.</p>
                <ul className="text-sm text-[#49719c] space-y-2">
                  <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>AI-powered chatbot</li>
                  <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Instant help desk</li>
                  <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Expert consultation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Solutions Section */}
        <section id="solutions" className="relative z-10 py-24 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
          {/* Animated Background Shapes for Solutions Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Elements */}
            <div className="absolute top-16 left-14 w-5 h-5 bg-blue-400/15 rounded-full animate-bounce" style={{animationDelay: '0.6s', animationDuration: '3.3s'}}></div>
            <div className="absolute top-24 right-18 w-4 h-4 bg-purple-400/15 rounded-full animate-pulse" style={{animationDelay: '1.9s', animationDuration: '3.7s'}}></div>
            <div className="absolute bottom-20 left-1/5 w-6 h-6 bg-emerald-400/15 rounded-full animate-ping" style={{animationDelay: '0.3s', animationDuration: '4.0s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400/15 rounded-full animate-bounce" style={{animationDelay: '2.5s', animationDuration: '3.4s'}}></div>
            <div className="absolute bottom-24 right-14 w-5 h-5 bg-indigo-400/15 rounded-full animate-pulse" style={{animationDelay: '1.2s', animationDuration: '3.8s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-20 right-1/6 w-7 h-7 border-2 border-blue-300/15 rotate-45 animate-bounce" style={{animationDelay: '1.7s', animationDuration: '4.1s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-4 h-4 border-2 border-purple-300/15 rounded-full animate-pulse" style={{animationDelay: '2.8s', animationDuration: '3.6s'}}></div>
            <div className="absolute top-2/3 left-16 w-6 h-6 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rotate-12 animate-bounce" style={{animationDelay: '0.9s', animationDuration: '3.9s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold text-[#693393]">Tailored Solutions</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0d141c] mb-6">
                Perfect for Every
                <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Educational Need</span>
              </h2>
              <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
                From small schools to large universities, our platform scales to meet your institution's unique requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* For Schools */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">For Schools</h3>
                <p className="text-[#49719c] mb-6">Streamline K-12 education with comprehensive student management, automated grading, and parent communication tools.</p>
                <ul className="space-y-3 text-sm text-[#49719c]">
                  <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Student information system</li>
                  <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Automated attendance tracking</li>
                  <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Parent portal access</li>
                  <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Grade book management</li>
                </ul>
              </div>
              
              {/* For Universities */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">For Universities</h3>
                <p className="text-[#49719c] mb-6">Advanced higher education management with research tracking, multi-campus support, and sophisticated analytics.</p>
                <ul className="space-y-3 text-sm text-[#49719c]">
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Multi-campus management</li>
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Research project tracking</li>
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Advanced analytics dashboard</li>
                  <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Faculty performance metrics</li>
                </ul>
              </div>
              
              {/* For Training Centers */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0d141c] mb-4">For Training Centers</h3>
                <p className="text-[#49719c] mb-6">Optimize professional training programs with skill assessments, certification tracking, and industry-specific modules.</p>
                <ul className="space-y-3 text-sm text-[#49719c]">
                  <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Skill-based assessments</li>
                  <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Certification management</li>
                  <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Industry-specific modules</li>
                  <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Progress tracking tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        

        
        {/* CTA Section */}
        <section className="relative z-10 py-24 px-6 lg:px-10">
          {/* Animated Background Shapes for CTA Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Elements */}
            <div className="absolute top-12 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '0.2s', animationDuration: '3.5s'}}></div>
            <div className="absolute top-20 right-16 w-5 h-5 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1.3s', animationDuration: '4.0s'}}></div>
            <div className="absolute bottom-16 left-1/6 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{animationDelay: '2.1s', animationDuration: '3.2s'}}></div>
            <div className="absolute top-1/4 right-1/5 w-6 h-6 bg-orange-400/20 rounded-full animate-bounce" style={{animationDelay: '0.9s', animationDuration: '3.8s'}}></div>
            <div className="absolute bottom-20 right-12 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{animationDelay: '1.7s', animationDuration: '3.6s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-16 right-1/4 w-7 h-7 border-2 border-blue-300/20 rotate-45 animate-bounce" style={{animationDelay: '2.4s', animationDuration: '3.9s'}}></div>
            <div className="absolute bottom-24 left-1/5 w-5 h-5 border-2 border-purple-300/20 rounded-full animate-pulse" style={{animationDelay: '0.6s', animationDuration: '4.2s'}}></div>
            <div className="absolute top-1/2 left-14 w-6 h-6 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-bounce" style={{animationDelay: '1.8s', animationDuration: '3.4s'}}></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#693393] via-[#0b79ee] to-[#6366f1] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                  Ready to Transform Your Institution?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of educators who are already using BeyondGrades.ai to revolutionize their teaching and assessment processes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white text-[#693393] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg" 
                    to="/login"
                  >
                    <span>Start Free Trial</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <button className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/20 backdrop-blur-md text-white text-lg font-bold leading-normal tracking-[0.015em] border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                    <span>Schedule Demo</span>
                  </button>
                </div>
                
                <p className="text-blue-100 text-sm mt-6">
                  No credit card required • 30-day free trial • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="relative z-10 py-24 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
          {/* Animated Background Shapes for Testimonials Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Elements */}
            <div className="absolute top-24 left-8 w-5 h-5 bg-blue-400/15 rounded-full animate-bounce" style={{animationDelay: '0.3s', animationDuration: '3.2s'}}></div>
            <div className="absolute top-16 right-16 w-4 h-4 bg-purple-400/15 rounded-full animate-pulse" style={{animationDelay: '1.8s', animationDuration: '3.8s'}}></div>
            <div className="absolute bottom-28 left-1/5 w-6 h-6 bg-emerald-400/15 rounded-full animate-ping" style={{animationDelay: '0.7s', animationDuration: '4.2s'}}></div>
            <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-orange-400/15 rounded-full animate-bounce" style={{animationDelay: '2.1s', animationDuration: '3.6s'}}></div>
            <div className="absolute bottom-16 right-8 w-5 h-5 bg-indigo-400/15 rounded-full animate-pulse" style={{animationDelay: '0.9s', animationDuration: '3.4s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-20 right-1/5 w-7 h-7 border-2 border-blue-300/15 rotate-45 animate-bounce" style={{animationDelay: '1.4s', animationDuration: '4.1s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-4 h-4 border-2 border-purple-300/15 rounded-full animate-pulse" style={{animationDelay: '2.3s', animationDuration: '3.7s'}}></div>
            <div className="absolute top-2/3 left-12 w-6 h-6 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rotate-12 animate-bounce" style={{animationDelay: '0.6s', animationDuration: '3.9s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                 <span className="text-sm font-semibold text-[#693393]">Get in Touch</span>
               </div>
               <h2 className="text-4xl lg:text-5xl font-black text-[#0d141c] mb-6">
                 Ready to Transform Your
                 <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Educational Experience?</span>
               </h2>
              <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
                Our team is here to help you get started with BeyondGrades.ai. Reach out to us for demos, support, or partnership opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-xl flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                       </svg>
                     </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0d141c] mb-2">Sales Inquiry</h3>
                      <p className="text-[#49719c] mb-4">Speak with our sales team to find the perfect plan for your institution.</p>
                      <a href="mailto:sales@beyondgrades.ai" className="text-blue-600 hover:text-blue-700 font-semibold">sales@beyondgrades.ai</a>
                      <p className="text-[#49719c] mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-xl flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg>
                     </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0d141c] mb-2">Technical Support</h3>
                      <p className="text-[#49719c] mb-4">Get help with implementation, troubleshooting, and technical questions.</p>
                      <a href="mailto:support@beyondgrades.ai" className="text-emerald-600 hover:text-emerald-700 font-semibold">support@beyondgrades.ai</a>
                      <p className="text-[#49719c] mt-1">24/7 Support Available</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-xl flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                       </svg>
                     </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0d141c] mb-2">Partnership</h3>
                      <p className="text-[#49719c] mb-4">Explore collaboration opportunities and integration partnerships.</p>
                      <a href="mailto:partnerships@beyondgrades.ai" className="text-purple-600 hover:text-purple-700 font-semibold">partnerships@beyondgrades.ai</a>
                      <p className="text-[#49719c] mt-1">Strategic Partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50">
                <h3 className="text-2xl font-bold text-[#0d141c] mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#0d141c] mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0d141c] mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0d141c] mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" placeholder="john@institution.edu" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0d141c] mb-2">Institution</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" placeholder="Your Institution Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0d141c] mb-2">Message</label>
                    <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none transition-colors" placeholder="Tell us about your needs and how we can help..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="relative z-10 py-24 px-6 lg:px-10">
          {/* Animated Background Shapes for Contact Section */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Elements */}
            <div className="absolute top-20 left-12 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{animationDelay: '0.4s', animationDuration: '3.1s'}}></div>
            <div className="absolute top-32 right-24 w-5 h-5 bg-purple-400/20 rounded-full animate-pulse" style={{animationDelay: '1.6s', animationDuration: '3.9s'}}></div>
            <div className="absolute bottom-24 left-1/6 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{animationDelay: '2.2s', animationDuration: '3.3s'}}></div>
            <div className="absolute top-1/3 right-1/5 w-6 h-6 bg-orange-400/20 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3.7s'}}></div>
            <div className="absolute bottom-32 right-12 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{animationDelay: '1.3s', animationDuration: '4.1s'}}></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-24 right-1/6 w-6 h-6 border-2 border-blue-300/20 rotate-45 animate-bounce" style={{animationDelay: '2.7s', animationDuration: '3.5s'}}></div>
            <div className="absolute bottom-40 left-1/5 w-5 h-5 border-2 border-purple-300/20 rounded-full animate-pulse" style={{animationDelay: '0.5s', animationDuration: '4.3s'}}></div>
            <div className="absolute top-1/2 left-20 w-7 h-7 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-bounce" style={{animationDelay: '1.9s', animationDuration: '3.2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                 <span className="text-sm font-semibold text-[#693393]">About BeyondGrades.ai</span>
               </div>
               <h2 className="text-4xl lg:text-5xl font-black text-[#0d141c] mb-6">
                 Transforming Education Through
                 <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Artificial Intelligence</span>
               </h2>
              <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
                We're on a mission to revolutionize how educational institutions evaluate, aggregate, and analyze student performance using cutting-edge AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-[#0d141c] mb-6">Our Mission</h3>
                <p className="text-lg text-[#49719c] mb-6">
                  At BeyondGrades.ai, we believe that every student deserves personalized, accurate, and timely feedback on their academic performance. Our AI-powered platform eliminates the traditional barriers in educational assessment, making it faster, more accurate, and more insightful than ever before.
                </p>
                <p className="text-lg text-[#49719c] mb-8">
                  We're committed to empowering educators with the tools they need to focus on what matters most: teaching and inspiring the next generation of learners.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-blue-600 mb-2">200+</div>
                    <div className="text-sm text-[#49719c]">Institutions Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-600 mb-2">50K+</div>
                    <div className="text-sm text-[#49719c]">Students Evaluated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600 mb-2">1M+</div>
                    <div className="text-sm text-[#49719c]">Assessments Processed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-600 mb-2">99.2%</div>
                    <div className="text-sm text-[#49719c]">Accuracy Rate</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#693393] rounded-xl flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                       </svg>
                     </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d141c] mb-2">Innovation First</h4>
                      <p className="text-[#49719c]">We leverage the latest advances in AI and machine learning to create solutions that were impossible just a few years ago.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0b79ee] rounded-xl flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                     </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d141c] mb-2">Student-Centric</h4>
                      <p className="text-[#49719c]">Every feature we build is designed with the student's learning journey and success in mind.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#6366f1] rounded-xl flex items-center justify-center">
                       <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                       </svg>
                     </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0d141c] mb-2">Educator Partnership</h4>
                      <p className="text-[#49719c]">We work closely with educators to understand their challenges and build solutions that truly make a difference.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Team Section */}
            <div className="relative text-center mb-12">
              {/* Animated Background Shapes for Team Section */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating Elements */}
                <div className="absolute top-8 left-12 w-4 h-4 bg-blue-400/15 rounded-full animate-bounce" style={{animationDelay: '0.4s', animationDuration: '3.6s'}}></div>
                <div className="absolute top-16 right-20 w-5 h-5 bg-purple-400/15 rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3.9s'}}></div>
                <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-emerald-400/15 rounded-full animate-ping" style={{animationDelay: '2.2s', animationDuration: '3.3s'}}></div>
                <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-orange-400/15 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '4.1s'}}></div>
                <div className="absolute bottom-20 right-16 w-4 h-4 bg-indigo-400/15 rounded-full animate-pulse" style={{animationDelay: '1.9s', animationDuration: '3.7s'}}></div>
                
                {/* Geometric Shapes */}
                <div className="absolute top-12 right-1/5 w-6 h-6 border-2 border-blue-300/15 rotate-45 animate-bounce" style={{animationDelay: '2.6s', animationDuration: '3.8s'}}></div>
                <div className="absolute bottom-16 left-1/6 w-5 h-5 border-2 border-purple-300/15 rounded-full animate-pulse" style={{animationDelay: '0.7s', animationDuration: '4.0s'}}></div>
                <div className="absolute top-2/3 left-18 w-7 h-7 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rotate-12 animate-bounce" style={{animationDelay: '1.4s', animationDuration: '3.5s'}}></div>
              </div>
              
              <h3 className="text-3xl font-bold text-[#0d141c] mb-6">Meet Our Team</h3>
              <p className="text-lg text-[#49719c] max-w-2xl mx-auto mb-12">
                Our diverse team of educators, engineers, and AI researchers is passionate about transforming education through technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   </div>
                  <h4 className="text-xl font-bold text-[#0d141c] mb-2">Leadership Team</h4>
                  <p className="text-[#49719c]">Experienced leaders from top tech companies and educational institutions, driving our vision forward.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                     </svg>
                   </div>
                  <h4 className="text-xl font-bold text-[#0d141c] mb-2">Engineering Team</h4>
                  <p className="text-[#49719c]">World-class engineers and AI researchers building the next generation of educational technology.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                     </svg>
                   </div>
                  <h4 className="text-xl font-bold text-[#0d141c] mb-2">Education Experts</h4>
                  <p className="text-[#49719c]">Former educators and academic administrators who understand the real challenges in education.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 lg:px-10 py-16">
        {/* Animated Background Shapes for Footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Elements */}
          <div className="absolute top-12 left-8 w-3 h-3 bg-blue-400/10 rounded-full animate-bounce" style={{animationDelay: '0.1s', animationDuration: '3.6s'}}></div>
          <div className="absolute top-20 right-12 w-4 h-4 bg-purple-400/10 rounded-full animate-pulse" style={{animationDelay: '1.4s', animationDuration: '4.1s'}}></div>
          <div className="absolute bottom-16 left-1/5 w-5 h-5 bg-emerald-400/10 rounded-full animate-ping" style={{animationDelay: '2.6s', animationDuration: '3.4s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-orange-400/10 rounded-full animate-bounce" style={{animationDelay: '0.7s', animationDuration: '3.9s'}}></div>
          <div className="absolute bottom-24 right-16 w-4 h-4 bg-indigo-400/10 rounded-full animate-pulse" style={{animationDelay: '1.8s', animationDuration: '3.7s'}}></div>
          
          {/* Geometric Shapes */}
          <div className="absolute top-16 right-1/5 w-6 h-6 border border-blue-300/10 rotate-45 animate-bounce" style={{animationDelay: '2.1s', animationDuration: '4.2s'}}></div>
          <div className="absolute bottom-32 left-1/6 w-3 h-3 border border-purple-300/10 rounded-full animate-pulse" style={{animationDelay: '0.4s', animationDuration: '3.8s'}}></div>
          <div className="absolute top-2/3 left-12 w-5 h-5 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rotate-12 animate-bounce" style={{animationDelay: '1.6s', animationDuration: '3.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 text-white">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.8"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">BeyondGrades.ai</h3>
                  <p className="text-sm text-gray-400">AI-Powered Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming education through intelligent automation, comprehensive analytics, and personalized learning experiences.
              </p>
            </div>
            
            {/* Product */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#api" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#press" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#documentation" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#status" className="hover:text-white transition-colors">System Status</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom */}
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 BeyondGrades.ai. All rights reserved. Made with ❤️ for education.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;