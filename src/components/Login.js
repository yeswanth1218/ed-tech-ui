import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [loginType, setLoginType] = useState('student');
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type');
    if (type && ['student', 'teacher', 'admin'].includes(type)) {
      setLoginType(type);
    }
    
    // Environment debugging on component mount
    console.log('🚀 Login Component Mounted - Environment Check:');
    console.log('📍 All Environment Variables:');
    console.log('  - REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
    console.log('  - REACT_APP_API_VERSION:', process.env.REACT_APP_API_VERSION);
    console.log('  - REACT_APP_ENVIRONMENT:', process.env.REACT_APP_ENVIRONMENT);
    console.log('  - NODE_ENV:', process.env.NODE_ENV);
    console.log('🌐 Current Location:', window.location.href);
    console.log('🔧 User Agent:', navigator.userAgent);
    console.log('📱 Platform Info:', {
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled
    });
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Demo credentials for testing
    const demoCredentials = {
      student: { username: 'student', password: 'demo' },
      teacher: { username: 'teacher', password: 'demo' },
      org: { username: 'admin', password: 'demo' }
    };

    // Check if using demo credentials
    // const isDemoLogin = credentials.username === demoCredentials[loginType]?.username && 
    //                    credentials.password === demoCredentials[loginType]?.password;

    // if (isDemoLogin) {
    //   // Demo login - navigate directly to appropriate portal
    //   console.log(`Demo login successful for ${loginType}`);
      
    //   switch (loginType) {
    //     case 'STUDENT':
    //       navigate('/student-profile');
    //       break;
    //     case 'TEACHER':
    //       navigate('/teacher-dashboard');
    //       break;
    //     case 'ADMIN':
    //       navigate('/dashboard');
    //       break;
    //     default:
    //       navigate('/');
    //   }
    //   return;
    // }

    // Try actual API login
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000/api';
      
      // Debug logs for troubleshooting
      console.log('🔍 Authentication Debug Info:');
      console.log('📍 Environment Variables:');
      console.log('  - REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
      console.log('  - NODE_ENV:', process.env.NODE_ENV);
      console.log('🌐 Resolved API URL:', apiUrl);
      console.log('🎯 Full Login Endpoint:', `${apiUrl}/login`);
      console.log('📦 Login Payload:', {
        username: credentials.username,
        password: credentials.password ? '[HIDDEN]' : 'undefined',
        loginType: loginType
      });
      console.log('⚙️ Request Config:', { withCredentials: true });
      
      const res = await axios.post(
        `${apiUrl}/auth/login`,
        credentials,
        { withCredentials: true }
      );

      const user = res.data.user;
      console.log('✅ Login successful:', user);
      console.log('🎫 Response data:', res.data);

      // Navigate based on role
      switch (user.role) {
        case 'STUDENT':
          navigate('/student-profile');
          break;
        case 'TEACHER':
          navigate('/teacher-dashboard');
          break;
        case 'ADMIN':
          navigate('/dashboard');
          break;
        default:
          navigate('/');
      }
    } catch (err) {
      console.error('❌ Login Authentication Failed:');
      console.error('🔍 Error Details:');
      console.error('  - Error Type:', err.name);
      console.error('  - Error Message:', err.message);
      console.error('  - Error Code:', err.code);
      
      if (err.response) {
        // Server responded with error status
        console.error('📡 Server Response Error:');
        console.error('  - Status Code:', err.response.status);
        console.error('  - Status Text:', err.response.statusText);
        console.error('  - Response Data:', err.response.data);
        console.error('  - Response Headers:', err.response.headers);
      } else if (err.request) {
        // Request was made but no response received
        console.error('🌐 Network/Request Error:');
        console.error('  - Request Details:', err.request);
        console.error('  - Possible causes: Network connectivity, CORS, server down');
      } else {
        // Something else happened
        console.error('⚠️ Unexpected Error:', err.message);
      }
      
      console.error('🔧 Troubleshooting Tips:');
      console.error('  1. Check if backend server is running');
      console.error('  2. Verify API URL is accessible from container');
      console.error('  3. Check CORS configuration');
      console.error('  4. Verify network connectivity');
      
      const errorMessage = err?.response?.data?.error || 
                          err?.response?.data?.message || 
                          err?.message || 
                          'Login failed. Try demo credentials: username="student/teacher/admin", password="demo"';
      
      alert(`Authentication Failed: ${errorMessage}`);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rotate-45 opacity-50 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-70"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-pink-200 rotate-12 opacity-40"></div>
        <div className="absolute top-60 left-1/3 w-8 h-8 bg-yellow-200 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-80 right-1/3 w-14 h-14 bg-green-200 rotate-45 opacity-50"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="size-8">
                <svg viewBox="0 0 48 48" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                    fill="currentColor" />
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                    fill="currentColor" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-[#0d141c]">BeyondGrades</h1>
            </div>
            <h2 className="text-xl font-semibold text-[#0d141c] mb-2">Welcome Back</h2>
            <p className="text-[#49719c] mb-2">Sign in to your account</p>
          </div>

          <div className="flex bg-[#e7edf4] rounded-lg p-1 mb-6">
            {['student', 'teacher', 'org'].map((type) => (
              <button
                key={type}
                onClick={() => setLoginType(type)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  loginType === type
                    ? 'bg-white text-[#0d141c] shadow-sm'
                    : 'text-[#49719c] hover:text-[#0d141c]'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0d141c] mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="w-full px-3 py-2 border border-[#e7edf4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b79ee] focus:border-transparent bg-white/70"
                placeholder={`Enter ${loginType} username`}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#0d141c] mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-3 py-2 border border-[#e7edf4] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0b79ee] focus:border-transparent bg-white/70"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0b79ee] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#0969da] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Sign In as {loginType.charAt(0).toUpperCase() + loginType.slice(1)}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-sm text-[#49719c] hover:text-[#0d141c] transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
