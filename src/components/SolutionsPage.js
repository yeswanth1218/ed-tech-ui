import React from 'react';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
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
            <span className="text-sm font-semibold text-[#693393]">Tailored Solutions</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0d141c] mb-6">
            Perfect Solutions for Every
            <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Educational Need</span>
          </h1>
          <p className="text-xl text-[#49719c] max-w-4xl mx-auto mb-12">
            From small schools to large universities, our platform scales to meet your institution's unique requirements. 
            Discover how BeyondGrades.ai adapts to your specific educational environment.
          </p>
        </div>
      </section>

      {/* Main Solutions */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* For Schools */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-gray-200/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#0d141c] mb-6">For Schools</h3>
              <p className="text-lg text-[#49719c] mb-8">
                Streamline K-12 education with comprehensive student management, automated grading, 
                and parent communication tools designed for modern schools.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-[#0d141c] mb-3">Key Features:</h4>
                  <ul className="space-y-3 text-sm text-[#49719c]">
                    <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Student information system</li>
                    <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Automated attendance tracking</li>
                    <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Parent portal access</li>
                    <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Grade book management</li>
                    <li className="flex items-center"><span className="text-[#693393] mr-3">✓</span>Progress report generation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#0d141c] mb-3">Perfect For:</h4>
                  <ul className="space-y-2 text-sm text-[#49719c]">
                    <li>• Elementary Schools</li>
                    <li>• Middle Schools</li>
                    <li>• High Schools</li>
                    <li>• Private Schools</li>
                  </ul>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white py-4 rounded-2xl font-semibold hover:from-[#0b79ee] hover:to-[#693393] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            {/* For Universities */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border-2 border-purple-200 hover:shadow-2xl transition-all duration-500 group relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Most Popular</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#0d141c] mb-6">For Universities</h3>
              <p className="text-lg text-[#49719c] mb-8">
                Advanced higher education management with research tracking, multi-campus support, 
                and sophisticated analytics for complex university environments.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-[#0d141c] mb-3">Key Features:</h4>
                  <ul className="space-y-3 text-sm text-[#49719c]">
                    <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Multi-campus management</li>
                    <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Research project tracking</li>
                    <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Advanced analytics dashboard</li>
                    <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Faculty performance metrics</li>
                    <li className="flex items-center"><span className="text-[#0b79ee] mr-3">✓</span>Department-wise reporting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#0d141c] mb-3">Perfect For:</h4>
                  <ul className="space-y-2 text-sm text-[#49719c]">
                    <li>• Public Universities</li>
                    <li>• Private Universities</li>
                    <li>• Community Colleges</li>
                    <li>• Research Institutions</li>
                  </ul>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#0b79ee] to-[#6366f1] text-white py-4 rounded-2xl font-semibold hover:from-[#6366f1] hover:to-[#0b79ee] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
            
            {/* For Training Centers */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 border border-gray-200/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#0d141c] mb-6">For Training Centers</h3>
              <p className="text-lg text-[#49719c] mb-8">
                Optimize professional training programs with skill assessments, certification tracking, 
                and industry-specific modules for vocational education.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-[#0d141c] mb-3">Key Features:</h4>
                  <ul className="space-y-3 text-sm text-[#49719c]">
                    <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Skill-based assessments</li>
                    <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Certification management</li>
                    <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Industry-specific modules</li>
                    <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Progress tracking tools</li>
                    <li className="flex items-center"><span className="text-[#6366f1] mr-3">✓</span>Employer integration</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#0d141c] mb-3">Perfect For:</h4>
                  <ul className="space-y-2 text-sm text-[#49719c]">
                    <li>• Vocational Schools</li>
                    <li>• Corporate Training</li>
                    <li>• Certification Bodies</li>
                    <li>• Professional Institutes</li>
                  </ul>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-[#6366f1] to-[#693393] text-white py-4 rounded-2xl font-semibold hover:from-[#693393] hover:to-[#6366f1] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Simple Implementation Process</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              Get started with BeyondGrades.ai in just a few simple steps. Our team guides you through every phase.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#693393] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Consultation</h3>
              <p className="text-[#49719c] text-sm">We analyze your needs and recommend the best solution for your institution</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0b79ee] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Setup & Migration</h3>
              <p className="text-[#49719c] text-sm">Our team handles data migration and system setup with minimal disruption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Training</h3>
              <p className="text-[#49719c] text-sm">Comprehensive training for administrators, teachers, and staff members</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#693393] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Go Live</h3>
              <p className="text-[#49719c] text-sm">Launch with ongoing support and continuous optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Success Stories</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              See how institutions like yours have transformed their educational processes with BeyondGrades.ai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#693393]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d141c]">Springfield High School</h4>
                  <p className="text-sm text-[#49719c]">1,200 Students</p>
                </div>
              </div>
              <p className="text-[#49719c] mb-4">
                "BeyondGrades.ai reduced our grading time by 75% and improved accuracy significantly. 
                Teachers now have more time to focus on actual teaching."
              </p>
              <div className="text-sm text-[#693393] font-semibold">75% Time Reduction</div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#0b79ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d141c]">Metro University</h4>
                  <p className="text-sm text-[#49719c]">15,000 Students</p>
                </div>
              </div>
              <p className="text-[#49719c] mb-4">
                "The analytics dashboard gives us insights we never had before. We can now predict 
                and prevent student dropouts with 90% accuracy."
              </p>
              <div className="text-sm text-[#0b79ee] font-semibold">90% Prediction Accuracy</div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#0d141c]">TechSkills Institute</h4>
                  <p className="text-sm text-[#49719c]">800 Students</p>
                </div>
              </div>
              <p className="text-[#49719c] mb-4">
                "Our certification pass rates increased by 40% after implementing personalized 
                learning paths powered by BeyondGrades.ai."
              </p>
              <div className="text-sm text-[#6366f1] font-semibold">40% Higher Pass Rates</div>
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
                Find Your Perfect Solution
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Ready to transform your institution? Let's discuss which solution works best for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white text-[#693393] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg" 
                  to="/contact"
                >
                  <span>Speak with Expert</span>
                </Link>
                
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/20 backdrop-blur-md text-white text-lg font-bold leading-normal tracking-[0.015em] border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  to="/login"
                >
                  <span>Start Free Trial</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;