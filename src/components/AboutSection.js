import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="relative z-10 py-24 px-6 lg:px-10 bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-12 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '3.1s' }}></div>
                <div className="absolute top-32 right-24 w-5 h-5 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.6s', animationDuration: '3.9s' }}></div>
                <div className="absolute bottom-24 left-1/6 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{ animationDelay: '2.2s', animationDuration: '3.3s' }}></div>
                <div className="absolute top-1/3 right-1/5 w-6 h-6 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.7s' }}></div>
                <div className="absolute bottom-32 right-12 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.3s', animationDuration: '4.1s' }}></div>

                <div className="absolute top-24 right-1/6 w-6 h-6 border-2 border-blue-300/20 rotate-45 animate-bounce" style={{ animationDelay: '2.7s', animationDuration: '3.5s' }}></div>
                <div className="absolute bottom-40 left-1/5 w-5 h-5 border-2 border-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '4.3s' }}></div>
                <div className="absolute top-1/2 left-20 w-7 h-7 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-bounce" style={{ animationDelay: '1.9s', animationDuration: '3.2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
                        <span className="text-sm font-semibold text-[#693393]">What is BeyondGrades.ai?</span>
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

                <div className="relative text-center mb-12">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-8 left-12 w-4 h-4 bg-blue-400/15 rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '3.6s' }}></div>
                        <div className="absolute top-16 right-20 w-5 h-5 bg-purple-400/15 rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '3.9s' }}></div>
                        <div className="absolute bottom-12 left-1/4 w-3 h-3 bg-emerald-400/15 rounded-full animate-ping" style={{ animationDelay: '2.2s', animationDuration: '3.3s' }}></div>
                        <div className="absolute top-1/3 right-1/6 w-6 h-6 bg-orange-400/15 rounded-full animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '4.1s' }}></div>
                        <div className="absolute bottom-20 right-16 w-4 h-4 bg-indigo-400/15 rounded-full animate-pulse" style={{ animationDelay: '1.9s', animationDuration: '3.7s' }}></div>

                        <div className="absolute top-12 right-1/5 w-6 h-6 border-2 border-blue-300/15 rotate-45 animate-bounce" style={{ animationDelay: '2.6s', animationDuration: '3.8s' }}></div>
                        <div className="absolute bottom-16 left-1/6 w-5 h-5 border-2 border-purple-300/15 rounded-full animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '4.0s' }}></div>
                        <div className="absolute top-2/3 left-18 w-7 h-7 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rotate-12 animate-bounce" style={{ animationDelay: '1.4s', animationDuration: '3.5s' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;


