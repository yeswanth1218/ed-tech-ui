import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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
            <span className="text-sm font-semibold text-[#693393]">About BeyondGrades.ai</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0d141c] mb-6">
            Transforming Education Through
            <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-[#49719c] max-w-4xl mx-auto mb-12">
            BeyondGrades is an AI platform that is designed to change the way of manual evaluations 
            and gives us the results which are beyond mere grades.
            
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#0d141c] mb-8">Our Mission</h2>
              <p className="text-lg text-[#49719c] mb-6">
                At BeyondGrades.ai, we believe that every student deserves personalized, accurate, and timely 
                feedback on their academic performance. Our AI-powered platform eliminates the traditional 
                barriers in educational assessment, making it faster, more accurate, and more insightful than ever before.
              </p>
              <p className="text-lg text-[#49719c] mb-8">
                We're committed to empowering educators with the tools they need to focus on what matters most: 
                teaching and inspiring the next generation of learners. By automating the tedious aspects of 
                assessment, we free up valuable time for meaningful educational interactions.
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
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-10">
              <h3 className="text-2xl font-bold text-[#0d141c] mb-6">Our Vision</h3>
              <p className="text-lg text-[#49719c] mb-8">
                We envision a world where technology seamlessly enhances education, where every student receives 
                personalized attention, and where educators are empowered with intelligent tools that amplify 
                their impact.
              </p>
              
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
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Our Story</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              Founded by educators and technologists who experienced firsthand the challenges of traditional assessment methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">2019 - The Idea</h3>
              <p className="text-[#49719c]">
                Our founders, frustrated with spending countless hours on manual grading, envisioned an AI-powered 
                solution that could understand and evaluate student work with human-like accuracy.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">2020 - Research & Development</h3>
              <p className="text-[#49719c]">
                We assembled a world-class team of AI researchers, educators, and engineers to develop our 
                proprietary handwriting recognition and content analysis algorithms.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">2021 - Launch</h3>
              <p className="text-[#49719c]">
                BeyondGrades.ai officially launched with our first pilot schools. The results exceeded expectations, 
                with 75% reduction in grading time and 99%+ accuracy rates.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Today - Transforming Education Globally</h3>
              <p className="text-lg text-blue-100 max-w-3xl mx-auto">
                We now serve over 200 educational institutions worldwide, processing millions of assessments 
                and helping educators reclaim their time to focus on what they do best: teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Meet Our Team</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              Our diverse team of educators, engineers, and AI researchers is passionate about transforming 
              education through technology. We bring together decades of experience in education, artificial 
              intelligence, and software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Leadership Team */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center">
           <div className="w-20 h-20 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                     </svg>
                   </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Leadership Team</h3>
              <p className="text-[#49719c] mb-6">
                Experienced leaders from top tech companies and educational institutions, driving our vision 
                forward with strategic insight and industry expertise.
              </p>
              <div className="space-y-2 text-sm text-[#49719c]">
                <p>• Former executives from Google, Microsoft, and Apple</p>
                <p>• Educational leaders from Harvard, MIT, and Stanford</p>
                <p>• Combined 100+ years of experience</p>
              </div>
            </div>
            
            {/* Engineering Team */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center">
           <div className="w-20 h-20 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                     </svg>
                   </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Engineering Team</h3>
              <p className="text-[#49719c] mb-6">
                World-class engineers and AI researchers building the next generation of educational technology 
                with cutting-edge machine learning and software engineering practices.
              </p>
              <div className="space-y-2 text-sm text-[#49719c]">
                <p>• PhD researchers in AI and Machine Learning</p>
                <p>• Full-stack engineers from top tech companies</p>
                <p>• Published authors in educational technology</p>
              </div>
            </div>
            
            {/* Education Experts */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center">
           <div className="w-20 h-20 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                     </svg>
                   </div>
              <h3 className="text-xl font-bold text-[#0d141c] mb-4">Education Experts</h3>
              <p className="text-[#49719c] mb-6">
                Former educators and academic administrators who understand the real challenges in education 
                and ensure our solutions address genuine needs in the classroom.
              </p>
              <div className="space-y-2 text-sm text-[#49719c]">
                <p>• Former teachers and principals</p>
                <p>• Curriculum development specialists</p>
                <p>• Educational assessment experts</p>
              </div>
            </div>
          </div>
          
          {/* Join Our Team */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Join Our Mission</h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference in education. 
              Join us in transforming how the world learns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
              </Link>
              <a 
                href="mailto:careers@beyondgrades.ai" 
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Our Values</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              These core values guide everything we do, from product development to customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-4">Excellence</h3>
              <p className="text-[#49719c] text-sm">
                We strive for excellence in everything we do, from our AI algorithms to customer support.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-4">Collaboration</h3>
              <p className="text-[#49719c] text-sm">
                We believe in the power of collaboration, both within our team and with our educational partners.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-4">Innovation</h3>
              <p className="text-[#49719c] text-sm">
                We continuously push the boundaries of what's possible with AI in education.
              </p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-4">Impact</h3>
              <p className="text-[#49719c] text-sm">
                Every decision we make is guided by its potential to positively impact education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Awards & Recognition</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              We're honored to be recognized by industry leaders and educational organizations worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">EdTech Breakthrough Award</h3>
              <p className="text-sm text-[#49719c] mb-2">2023</p>
              <p className="text-[#49719c] text-sm">Best AI-Powered Educational Assessment Solution</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Innovation in Education</h3>
              <p className="text-sm text-[#49719c] mb-2">2022</p>
              <p className="text-[#49719c] text-sm">UNESCO Global Education Innovation Award</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d141c] mb-2">Fast Company Most Innovative</h3>
              <p className="text-sm text-[#49719c] mb-2">2023</p>
              <p className="text-[#49719c] text-sm">Top 10 Most Innovative Companies in Education</p>
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
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Be part of the educational revolution. Start transforming your institution with BeyondGrades.ai today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white text-[#693393] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg" 
                  to="/login"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Start Free Trial</span>
                </Link>
                
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/20 backdrop-blur-md text-white text-lg font-bold leading-normal tracking-[0.015em] border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  to="/contact"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;