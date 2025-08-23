import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TeacherSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/teacher-dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/teacher-class', label: 'Responsible Class', icon: 'group' },
    { path: '/teacher-timetable', label: 'My Timetable', icon: 'schedule' },
    { path: '/teacher-exams', label: 'Exams & Evaluations', icon: 'assessment' },
    { path: '/teacher-requests', label: 'Requests & Issues', icon: 'report_problem' },
    { path: '/teacher-attendance', label: 'Attendance', icon: 'check_circle_outline' },
    { path: '/teacher-assessments', label: 'Create Assessments', icon: 'create' },
    { path: '/teacher-archive', label: 'Academic Archive', icon: 'archive' },
    { path: '/teacher-analytics', label: 'AI Analytics', icon: 'analytics' },
    { path: '/teacher-leaderboard', label: 'Leaderboard & Rankings', icon: 'leaderboard' }
  ];

  return (
    <aside className="w-80 min-h-screen p-4 flex flex-col bg-white">
      <div className="flex items-center mb-8">
        <span className="material-icons text-3xl text-purple-600">school</span>
        <span className="text-xl font-bold ml-2">SKOOL</span>
      </div>
      
      <nav className="space-y-2 mb-6">
        {menuItems.map((item) => {
          // Check for exact match or related paths for Exams & Evaluations
          const isActive = location.pathname === item.path || 
            (item.path === '/teacher-exams' && 
             (location.pathname === '/answer-sheet-upload' || location.pathname === '/set-question-paper'));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-purple-600 text-white hover:bg-purple-600' 
                  : 'text-gray-700 hover:bg-purple-50'
              }`}
            >
              <span className="material-icons">{item.icon}</span>
              <span className="ml-4">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      {/* Teacher Info Section */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
        <div className="flex items-center">
          <div className="relative">
            <img 
              alt="Dr. Sarah Wilson's profile picture" 
              className="w-10 h-10 rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hgYuD47Bm8DNrH_31086GQPy2f4wsD6lBgawozH7CyXMmPWOIq7EKIpjQ-jKauvYo0Pj6IYjLOzg0fyPnOQzg5iIgLVq7xdyfgIE2ZlW9NCcHil7nJY1e-fOwRRgYvG34daNJ1xWEsxz8X71s833qCAwhB_5v2fSzYxV1YvHAJbuwaEMK0CBlvtfaUDY5JjlcxAl1c455Mdq4Z2McUMlnKkTfrslL9hZjy2uBAglo3qsP5skkipqa6k2lvFRkfbox7XuV3ThAlhG"
            />
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 border-2 border-white"></span>
          </div>
          <div className="ml-3">
            <p className="font-semibold text-sm">Dr. Sarah Wilson</p>
            <p className="text-xs text-gray-500">TCH-2024-015</p>
          </div>
        </div>
        <div className="mt-2 text-xs text-gray-500 flex justify-between">
          <span>Mathematics Dept.</span>
          <span>Class Teacher: 12-A</span>
        </div>
      </div>
    </aside>
  );
};

export default TeacherSidebar;