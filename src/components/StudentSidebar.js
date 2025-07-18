import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const StudentSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/student-profile', label: 'Dashboard', icon: 'dashboard' },
    { path: '/student-news', label: 'News & Announcements', icon: 'campaign' },
    { path: '/student-results', label: 'Department Results', icon: 'assessment' },
    { path: '/student-analytics', label: 'AI Analytics', icon: 'analytics' },
    { path: '/student-timetable', label: 'Class Timetable', icon: 'schedule' },
    { path: '/student-archive', label: 'Academic Archive', icon: 'folder' },
    { path: '/student-fees', label: 'Fees & Payments', icon: 'payment' },
    { path: '/student-settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <div className="layout-content-container flex flex-col w-80">
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-[#101418] text-base font-medium leading-normal">Skool</h1>
            <p className="text-[#5c728a] text-sm font-normal leading-normal">Student Portal</p>
          </div>
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-full transition-colors ${
                    isActive ? 'bg-[#eaedf1]' : 'hover:bg-[#f5f5f5]'
                  }`}
                >
                  <div className="text-[#101418]">
                    <span className="material-icons" style={{fontSize: '24px'}}>{item.icon}</span>
                  </div>
                  <p className="text-[#101418] text-sm font-medium leading-normal">{item.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Student Info Section */}
        <div className="flex flex-col gap-3 p-3 bg-white rounded-xl border border-[#d4dbe2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="material-icons text-blue-600" style={{fontSize: '20px'}}>person</span>
            </div>
            <div className="flex-1">
              <p className="text-[#101418] text-sm font-medium">Alice Johnson</p>
              <p className="text-[#5c728a] text-xs">STU-2024-001</p>
            </div>
          </div>
          <div className="flex justify-between text-xs text-[#5c728a]">
            <span>12th Grade A</span>
            <span>Rank: #3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSidebar;