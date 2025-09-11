import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
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
            <span className="text-sm font-semibold text-[#693393]">Revolutionary Features</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0d141c] mb-6">
            Powerful AI Features for
            <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Modern Education</span>
          </h1>
          <p className="text-xl text-[#49719c] max-w-4xl mx-auto mb-12">
            Discover how BeyondGrades.ai transforms traditional educational processes with cutting-edge artificial intelligence, 
            making assessment faster, more accurate, and deeply insightful.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* AI-Powered Assessment */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-3xl flex items-center justify-center mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#0d141c] mb-6">AI-Powered Assessment</h3>
              <p className="text-lg text-[#49719c] mb-8">
                Revolutionary automated evaluation system that processes handwritten answers with unprecedented accuracy, 
                provides detailed feedback, and generates comprehensive performance analytics in real-time.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-[#693393] text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d141c]">Advanced Handwriting Recognition</h4>
                    <p className="text-sm text-[#49719c]">OCR technology that understands various handwriting styles and languages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d141c]">Intelligent Content Analysis</h4>
                    <p className="text-sm text-[#49719c]">AI understands context, concepts, and provides meaningful scoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d141c]">Instant Detailed Feedback</h4>
                    <p className="text-sm text-[#49719c]">Comprehensive feedback with suggestions for improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Analytics */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="w-24 h-24 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-3xl flex items-center justify-center mb-8">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#0d141c] mb-6">Real-time Analytics</h3>
              <p className="text-lg text-[#49719c] mb-8">
                Advanced dashboard with live performance metrics, predictive insights, and actionable recommendations 
                to improve learning outcomes and institutional effectiveness.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-[#0b79ee] text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d141c]">Live Performance Tracking</h4>
                    <p className="text-sm text-[#49719c]">Monitor student progress and performance in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d141c]">Predictive Analytics</h4>
                    <p className="text-sm text-[#49719c]">AI-powered insights to predict and prevent academic challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0d141c]">Custom Report Generation</h4>
                    <p className="text-sm text-[#49719c]">Automated reports tailored to different stakeholders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Personalization */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Smart Personalization</h3>
              <p className="text-[#49719c] mb-4">AI-driven personalized learning paths that adapt to individual student needs and learning styles.</p>
              <ul className="text-sm text-[#49719c] space-y-2">
                <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Adaptive learning paths</li>
                <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Individual recommendations</li>
                <li className="flex items-center"><span className="text-[#6366f1] mr-2">✓</span>Learning style analysis</li>
              </ul>
            </div>

            {/* Comprehensive Management */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#693393] to-[#6366f1] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Comprehensive Management</h3>
              <p className="text-[#49719c] mb-4">Complete institutional management suite covering all aspects of educational administration.</p>
              <ul className="text-sm text-[#49719c] space-y-2">
                <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Student information system</li>
                <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Faculty management</li>
                <li className="flex items-center"><span className="text-[#693393] mr-2">✓</span>Financial oversight</li>
              </ul>
            </div>

            {/* Seamless Integration */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0b79ee] to-[#693393] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Seamless Integration</h3>
              <p className="text-[#49719c] mb-4">Easy integration with existing systems and third-party educational platforms.</p>
              <ul className="text-sm text-[#49719c] space-y-2">
                <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>API integrations</li>
                <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>Data migration</li>
                <li className="flex items-center"><span className="text-[#0b79ee] mr-2">✓</span>Third-party compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Technical Excellence</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              Built on cutting-edge technology stack with enterprise-grade security and scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#693393]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Bank-level Security</h3>
              <p className="text-[#49719c] text-sm">End-to-end encryption and compliance with educational data privacy standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0b79ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Lightning Fast</h3>
              <p className="text-[#49719c] text-sm">Process thousands of assessments in minutes with 99.9% uptime</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#6366f1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Multi-Platform</h3>
              <p className="text-[#49719c] text-sm">Web, mobile, and tablet applications for seamless access anywhere</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#0b79ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Global Scale</h3>
              <p className="text-[#49719c] text-sm">Cloud infrastructure that scales from small schools to large universities</p>
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
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how BeyondGrades.ai can transform your educational processes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white text-[#693393] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg" 
                  to="/login"
                >
                  <span>Start Free Trial</span>
                </Link>
                
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/20 backdrop-blur-md text-white text-lg font-bold leading-normal tracking-[0.015em] border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  to="/contact"
                >
                  <span>Schedule Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;