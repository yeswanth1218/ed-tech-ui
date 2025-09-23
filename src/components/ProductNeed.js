import React from 'react';

const ProductNeed = () => {
    return (
        <section className="relative z-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                        <span className="text-xs sm:text-sm font-semibold text-[#693393]">The Beyond Grades Advantage</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-[#0d141c] mb-4 sm:mb-6 px-2">
                        Does Anyone Really 
                        <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Need This? </span>
                    </h2>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-[#49719c] max-w-3xl mx-auto px-2">
                        "They say to look for truth between the words. Likewise, your grades state the facts; opportunity lives in the <span className="bg-[#693393]/70 text-white px-1 sm:px-2 py-1 rounded">spaces between the grades</span>. Our product provides the lens to see these hidden patterns and the tools to act on them."
                    </p>
                </div>

                {/* Three Tiles Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* For Teachers */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200/50 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 sm:hover:-translate-y-3 transition-all duration-500 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#693393] to-[#0b79ee] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0d141c] mb-3 sm:mb-4">For Teachers</h3>
                        
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#693393] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Reclaim Your Time</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Drastically reduce the hours spent on manual evaluation.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#693393] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Focus on Teaching</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Use data-driven insights to tailor your lesson plans and interventions.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#693393] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Eliminate Repetitive Queries</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">The AI handles initial student questions about grading, freeing you up for more impactful conversations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Students */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200/50 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 sm:hover:-translate-y-3 transition-all duration-500 group">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#0b79ee] to-[#6366f1] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0d141c] mb-3 sm:mb-4">For Students</h3>
                        
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0b79ee] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Transparent & Fair Evaluation</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Understand exactly why they received a certain grade.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0b79ee] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Personalized Guidance</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Receive actionable advice on how to improve.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0b79ee] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Empowered to Ask</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Raise concerns without fear or hesitation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For the School */}
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200/50 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1 sm:hover:-translate-y-3 transition-all duration-500 group md:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#6366f1] to-[#693393] rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0d141c] mb-3 sm:mb-4">For the School</h3>
                        
                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6366f1] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Enhanced Academic Standards</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Ensure consistent and fair evaluation across the board.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6366f1] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">Data-Driven Decision Making</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Gain deep insights into academic performance and trends.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6366f1] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-[#0d141c] mb-1 text-sm sm:text-base">A Reputation for Innovation</h4>
                                    <p className="text-[#49719c] text-xs sm:text-sm">Position your school as a leader in leveraging technology for educational excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductNeed;