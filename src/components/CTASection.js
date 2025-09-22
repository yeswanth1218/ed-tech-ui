import React from 'react';

const CTASection = () => {
    return (
        <section className="relative z-10 py-24 px-6 lg:px-10">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-12 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '3.5s' }}></div>
                <div className="absolute top-20 right-16 w-5 h-5 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.3s', animationDuration: '4.0s' }}></div>
                <div className="absolute bottom-16 left-1/6 w-3 h-3 bg-emerald-400/20 rounded-full animate-ping" style={{ animationDelay: '2.1s', animationDuration: '3.2s' }}></div>
                <div className="absolute top-1/4 right-1/5 w-6 h-6 bg-orange-400/20 rounded-full animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '3.8s' }}></div>
                <div className="absolute bottom-20 right-12 w-4 h-4 bg-indigo-400/20 rounded-full animate-pulse" style={{ animationDelay: '1.7s', animationDuration: '3.6s' }}></div>

                <div className="absolute top-16 right-1/4 w-7 h-7 border-2 border-blue-300/20 rotate-45 animate-bounce" style={{ animationDelay: '2.4s', animationDuration: '3.9s' }}></div>
                <div className="absolute bottom-24 left-1/5 w-5 h-5 border-2 border-purple-300/20 rounded-full animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '4.2s' }}></div>
                <div className="absolute top-1/2 left-14 w-6 h-6 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rotate-12 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.4s' }}></div>
            </div>
        </section>
    );
};

export default CTASection;


