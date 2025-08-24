import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'home' },
    { path: '/departments', label: 'Departments', icon: 'school' },
    { path: '/upload', label: 'AI Evaluation', icon: 'description' },
    { path: '/student-performance', label: 'Students', icon: 'people' },
    { path: '/evaluation', label: 'Insights & Analytics', icon: 'assessment' },
    { path: '/financials', label: 'Financials', icon: 'account_balance' },
    { path: '/admin', label: 'Settings', icon: 'settings' }
  ];

  return (
    <div className="layout-content-container flex flex-col w-80">
      <div className="flex h-full min-h-[700px] flex-col justify-between bg-gray-50 p-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-[#101418] text-base font-medium leading-normal">Skool</h1>
            <p className="text-[#5c728a] text-sm font-normal leading-normal">Admin</p>
          </div>
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path || 
                              (item.path === '/upload' && location.pathname === '/organization-exam-creation');
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
      </div>
    </div>
  );
};

export default Sidebar;