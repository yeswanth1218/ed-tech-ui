import React, { useEffect, useState } from 'react';

const Header = () => {
    const [loginType, setLoginType] = useState('student');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);



    return (
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
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#features">
                            Features
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#solutions">
                            Solutions
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#contact">
                            Contact
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                        <a className="text-[#0d141c] text-sm font-medium leading-normal hover:text-[#0b79ee] transition-all duration-200 relative group cursor-pointer" href="#about">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b79ee] transition-all duration-200 group-hover:w-full"></span>
                        </a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    {/* Enhanced Login Type Toggle */}
                    <div className="hidden sm:flex bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-1 shadow-inner">
                        {['student', 'teacher', 'org'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setLoginType(type)}
                                className={`py-2 px-4 rounded-lg text-xs font-semibold transition-all duration-200 ${loginType === type
                                    ? 'bg-white text-[#0d141c] shadow-md transform scale-105'
                                    : 'text-[#49719c] hover:text-[#0d141c] hover:bg-white/50'
                                    }`}
                            >
                                {type === 'org' ? 'Admin' : type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                        ))}
                    </div>

                    <a
                        className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-6 bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-[#0b79ee] hover:to-[#693393] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        href="/login"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;


