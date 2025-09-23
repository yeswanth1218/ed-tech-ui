import React from 'react';
import { Link } from 'react-router-dom';

const InfoGraphic = () => {
  const steps = [
    {
      id: 1,
      title: "The Unseen Burden of Evaluation ",
      description: "Manually evaluating every answer sheet is a monumental and time-consuming task , leading to educator fatigue and unintentional inconsistencies",
      position: { row: 1, col: 1 }
    },
    {
      id: 2,
      title: "Introducing BeyondGrades.ai",
      description: "An AI-powered platform designed to Revolutionize the Evaluation Process",
      position: { row: 1, col: 2 }
    },
    {
      id: 3,
      title: "Capture and Go",
      description: "Simply take snapshots of student answer sheets. Our AI intelligently identifies, extracts, and sorts each handwritten answer",
      position: { row: 2, col: 1 }
    },
    {
      id: 4,
      title: "Instant, Consistant & Transparent",
      description: "The system evaluates answers based on your custom rubrics and provides a clear, concise reason for every mark awarded or deducted.",
      position: { row: 2, col: 2 }
    },
    {
      id: 5,
      title: "Automate the Workload",
      description: "Drastically reduce the hours spent on manual evaluation so you can focus on what you do best: teaching.",
      position: { row: 3, col: 1 }
    },
    {
      id: 6,
      title: "Grades to Roadmaps for Success ",
      description: "The AI analyzes performance over time to identify strengths and recurring mistakes, offering personalized guidance to help each student improve.",
      position: { row: 3, col: 2 }
    },
    {
      id: 7,
      title: "Insights for all",
      description: "Gain a bird's-eye view of class performance to adjust teaching strategies and empower your school with data-driven insights for decision-making.",
      position: { row: 4, col: 1 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">BG</span>
              </div>
              <span className="text-xl font-bold text-[#0d141c]">BeyondGrades.ai</span>
            </Link>
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#693393]">Feature Journey</span>
            <div className="w-2 h-2 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full animate-pulse"></div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0d141c] mb-6">
            Revolutionizing Evaluation and Empowering
            <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Educators & Students</span>
          </h1>
          <p className="text-xl text-[#49719c] max-w-4xl mx-auto mb-12">
            Follow our simple 7-step process to transform your evaluation workflow with AI-powered grading
          </p>
        </div>
      </section>

      {/* Journey Infographic */}
      <section className="py-40 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="relative min-h-[1900px]">
            {/* SVG Curved Path - Treasure Map Style */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 1000 1900" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#693393" />
                  <stop offset="33%" stopColor="#0b79ee" />
                  <stop offset="66%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#693393" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {/* Flowing S-curve treasure map path */}
              <path
                d="M 150 140 
                   Q 300 100 450 140 
                   Q 600 180 750 140
                   Q 850 120 800 260
                   Q 750 400 600 360
                   Q 450 320 300 360
                   Q 150 400 200 540
                   Q 250 680 400 640
                   Q 550 600 700 640
                   Q 850 680 750 820
                   Q 650 960 500 920
                   Q 350 880 250 920
                   Q 150 960 200 1100
                   Q 250 1240 400 1200
                   Q 550 1160 700 1200
                   Q 850 1240 800 1380
                   Q 750 1520 600 1480
                   Q 450 1440 300 1480
                   Q 150 1520 200 1660
                   Q 250 1800 400 1760"
                stroke="url(#pathGradient)"
                strokeWidth="5"
                fill="none"
                strokeDasharray="15,8"
                filter="url(#glow)"
                className="animate-pulse"
                opacity="0.8"
              />
              
              {/* Connection dots at each step position */}
              <circle cx="150" cy="140" r="10" fill="#693393" className="animate-pulse" opacity="0.9" />
              <circle cx="750" cy="140" r="10" fill="#0b79ee" className="animate-pulse" opacity="0.9" />
              <circle cx="300" cy="360" r="10" fill="#6366f1" className="animate-pulse" opacity="0.9" />
              <circle cx="700" cy="640" r="10" fill="#693393" className="animate-pulse" opacity="0.9" />
              <circle cx="250" cy="920" r="10" fill="#0b79ee" className="animate-pulse" opacity="0.9" />
              <circle cx="600" cy="1480" r="10" fill="#6366f1" className="animate-pulse" opacity="0.9" />
              <circle cx="400" cy="1760" r="10" fill="#693393" className="animate-pulse" opacity="0.9" />
            </svg>

            {/* Step Cards - Flowing Layout */}
            <div className="relative z-10">
              {/* Step 1 - Top Left */}
              <div 
                className="absolute group"
                style={{ 
                  left: '3%', 
                  top: '-175px',
                  animationDelay: '0.1s'
                }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 w-80">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden border-2 border-gray-300 group-hover:border-[#693393] transition-all duration-300">
                    <img 
                      src="/infogrphics/Image_01.png" 
                      alt="Upload Question Paper"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d141c] group-hover:text-[#693393] transition-colors duration-300">
                      {steps[0].title}
                    </h3>
                    <p className="text-[#49719c] text-sm leading-snug">
                      {steps[0].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 - Top Right */}
              <div 
                className="absolute group"
                style={{ 
                  right: '3%', 
                  top: '-20px',
                  animationDelay: '0.2s'
                }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 w-80">
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-[#0b79ee] to-[#6366f1] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden border-2 border-gray-300 group-hover:border-[#0b79ee] transition-all duration-300">
                    <img 
                      src="/infogrphics/Image_02.png" 
                      alt="Set Answer Key"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d141c] group-hover:text-[#0b79ee] transition-colors duration-300">
                      {steps[1].title}
                    </h3>
                    <p className="text-[#49719c] text-sm leading-snug">
                      {steps[1].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 - Middle Left */}
              <div 
                className="absolute group"
                style={{ 
                  left: '8%', 
                  top: '420px',
                  animationDelay: '0.3s'
                }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 w-80">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#6366f1] to-[#693393] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden border-2 border-gray-300 group-hover:border-[#6366f1] transition-all duration-300">
                    <img 
                      src="/infogrphics/Image_03.png" 
                      alt="Configure Rubrics"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d141c] group-hover:text-[#6366f1] transition-colors duration-300">
                      {steps[2].title}
                    </h3>
                    <p className="text-[#49719c] text-sm leading-snug">
                      {steps[2].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 - Middle Right */}
              <div 
                className="absolute group"
                style={{ 
                  right: '16%', 
                  top: '550px',
                  animationDelay: '0.4s'
                }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 w-80">
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden border-2 border-gray-300 group-hover:border-[#693393] transition-all duration-300">
                    <img 
                      src="/infogrphics/Image_04.png" 
                      alt="Upload Student Answers"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d141c] group-hover:text-[#693393] transition-colors duration-300">
                      {steps[3].title}
                    </h3>
                    <p className="text-[#49719c] text-sm leading-snug">
                      {steps[3].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 - Lower Left */}
              <div 
                className="absolute group"
                style={{ 
                  left: '6%', 
                  top: '980px',
                  animationDelay: '0.5s'
                }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 w-80">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#0b79ee] to-[#6366f1] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">5</span>
                  </div>
                  <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden border-2 border-gray-300 group-hover:border-[#0b79ee] transition-all duration-300">
                    <img 
                      src="/infogrphics/Image_05.png" 
                      alt="AI Processing"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d141c] group-hover:text-[#0b79ee] transition-colors duration-300">
                      {steps[4].title}
                    </h3>
                    <p className="text-[#49719c] text-sm leading-snug">
                      {steps[4].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 - Bottom Center */}
              <div 
                className="absolute group"
                style={{ 
                  left: '68%', 
                  transform: 'translateX(-50%)',
                  top: '1260px',
                  animationDelay: '0.6s'
                }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 w-80">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-[#6366f1] to-[#693393] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">6</span>
                  </div>
                  <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden border-2 border-gray-300 group-hover:border-[#6366f1] transition-all duration-300">
                    <img 
                      src="/infogrphics/Image_06.png" 
                      alt="Get Results"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d141c] group-hover:text-[#6366f1] transition-colors duration-300">
                      {steps[5].title}
                    </h3>
                    <p className="text-[#49719c] text-sm leading-snug">
                      {steps[5].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 7 - Bottom Left */}
              <div 
                className="absolute group"
                style={{ 
                  left: '18%', 
                  top: '1540px',
                  animationDelay: '0.7s'
                }}
              >
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 transform hover:-translate-y-3 group-hover:scale-105 w-80">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#693393] to-[#0b79ee] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">7</span>
                  </div>
                  <div className="w-full h-72 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden border-2 border-gray-300 group-hover:border-[#693393] transition-all duration-300">
                    <img 
                      src="/infogrphics/Image_07.png" 
                      alt="Share & Export"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0d141c] group-hover:text-[#693393] transition-colors duration-300">
                      {steps[6].title}
                    </h3>
                    <p className="text-[#49719c] text-sm leading-snug">
                      {steps[6].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10 bg-gradient-to-r from-[#693393] via-[#0b79ee] to-[#6366f1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Experience the Magic?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of educators who have already transformed their evaluation process with AI
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/login"
              className="group flex min-w-[220px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white text-[#693393] text-lg font-bold leading-normal tracking-[0.015em] hover:shadow-2xl transition-all duration-500 transform hover:scale-110"
            >
              <span>Get Started Now</span>
            </Link>
            <Link
              to="/"
              className="group flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-transparent border-2 border-white text-white text-lg font-bold leading-normal tracking-[0.015em] hover:bg-white hover:text-[#693393] transition-all duration-300"
            >
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoGraphic;