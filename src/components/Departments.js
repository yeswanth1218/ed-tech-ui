import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import PermissionModal from './PermissionModal';

const Departments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalActionType, setModalActionType] = useState('');

  const handleAddClick = (actionType) => {
    setModalActionType(actionType);
    setModalOpen(true);
  };

  const departments = [
    {
      id: 1,
      name: 'Mechanical Engineering',
      shortName: 'MECH',
      icon: 'settings',
      students: 245,
      faculty: 12,
      semesters: 8,
      hoverColor: 'from-blue-50 to-blue-200',
      borderColor: 'border-blue-300'
    },
    {
      id: 2,
      name: 'Civil Engineering',
      shortName: 'CIVIL',
      icon: 'construction',
      students: 198,
      faculty: 10,
      semesters: 8,
      hoverColor: 'from-green-50 to-green-200',
      borderColor: 'border-green-300'
    },
    {
      id: 3,
      name: 'Electronics & Communication',
      shortName: 'ECE',
      icon: 'radio',
      students: 312,
      faculty: 15,
      semesters: 8,
      hoverColor: 'from-purple-50 to-purple-200',
      borderColor: 'border-purple-300'
    },
    {
      id: 4,
      name: 'Computer Science',
      shortName: 'CSE',
      icon: 'computer',
      students: 456,
      faculty: 18,
      semesters: 8,
      hoverColor: 'from-indigo-50 to-indigo-200',
      borderColor: 'border-indigo-300'
    },
    {
      id: 5,
      name: 'Electrical Engineering',
      shortName: 'EEE',
      icon: 'electrical_services',
      students: 189,
      faculty: 11,
      semesters: 8,
      hoverColor: 'from-yellow-50 to-yellow-200',
      borderColor: 'border-yellow-300'
    },
    {
      id: 6,
      name: 'Information Technology',
      shortName: 'IT',
      icon: 'language',
      students: 278,
      faculty: 14,
      semesters: 8,
      hoverColor: 'from-teal-50 to-teal-200',
      borderColor: 'border-teal-300'
    },
    {
      id: 7,
      name: 'Chemical Engineering',
      shortName: 'CHEM',
      icon: 'science',
      students: 134,
      faculty: 8,
      semesters: 8,
      hoverColor: 'from-red-50 to-red-200',
      borderColor: 'border-red-300'
    },
    {
      id: 8,
      name: 'Biotechnology Engineering',
      shortName: 'BT',
      icon: 'biotech',
      students: 98,
      faculty: 6,
      semesters: 8,
      hoverColor: 'from-pink-50 to-pink-200',
      borderColor: 'border-pink-300'
    },
    {
      id: 9,
      name: 'AI & Machine Learning',
      shortName: 'AIML',
      icon: 'smart_toy',
      students: 156,
      faculty: 9,
      semesters: 8,
      hoverColor: 'from-cyan-50 to-cyan-200',
      borderColor: 'border-cyan-300'
    }
  ];

  const totalStudents = departments.reduce((sum, dept) => sum + dept.students, 0);
  const totalFaculty = departments.reduce((sum, dept) => sum + dept.faculty, 0);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      <div className="layout-container flex h-full grow flex-col">
        <Header title="Departments" />
        <div className="gap-1 px-6 flex flex-1 justify-start py-5">
          <Sidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Departments Overview</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">Manage and monitor all academic departments, their programs, faculty, and student enrollment across the institution.</p>
              </div>
            </div>

            {/* Department Statistics */}
            <div className="flex flex-wrap gap-4 p-4">
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🏛️</div>
                  <div>
                    <p className="text-[#101418] text-base font-medium leading-normal">Total Departments</p>
                    <p className="text-[#101418] text-2xl font-bold leading-tight tracking-[-0.015em]">{departments.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="material-icons text-blue-600" style={{fontSize: '32px'}}>groups</span>
                  </div>
                  <div>
                    <p className="text-[#101418] text-base font-medium leading-normal">Total Students</p>
                    <p className="text-[#101418] text-2xl font-bold leading-tight tracking-[-0.015em]">{totalStudents.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 transition-all duration-300 transform hover:-translate-y-1 min-w-[200px]">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="material-icons text-green-600" style={{fontSize: '32px'}}>school</span>
                  </div>
                  <div>
                    <p className="text-[#101418] text-base font-medium leading-normal">Total Faculty</p>
                    <p className="text-[#101418] text-2xl font-bold leading-tight tracking-[-0.015em]">{totalFaculty}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Grid */}
            <div className="p-4">
              <div className="flex justify-between items-center pb-4">
                <h2 className="text-[#101418] text-xl font-bold leading-tight tracking-[-0.015em]">Academic Departments</h2>
                <button 
                  onClick={() => handleAddClick('department')}
                  className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {departments.map((department) => (
                  <Link 
                    key={department.id} 
                    to={`/departments/${department.shortName.toLowerCase()}`}
                    className="block"
                  >
                    <div className={`bg-white border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-2xl hover:bg-gradient-to-br hover:${department.hoverColor} hover:${department.borderColor} transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-[300px] flex flex-col justify-between`}>
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="mb-2">
                          <span className="material-icons text-gray-700" style={{fontSize: '48px'}}>{department.icon}</span>
                        </div>
                        <h3 className="text-[#101418] text-lg font-bold leading-tight">{department.name}</h3>
                        <p className="text-[#637588] text-sm font-medium">{department.shortName}</p>
                        
                        <div className="w-full space-y-2 mt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">Students:</span>
                            <span className="text-xs font-semibold text-gray-800">{department.students}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">Faculty:</span>
                            <span className="text-xs font-semibold text-gray-800">{department.faculty}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-600">Semesters:</span>
                            <span className="text-xs font-semibold text-gray-800">{department.semesters}</span>
                          </div>
                        </div>
                        
                        <div className="w-full pt-3 border-t border-gray-100">
                          <p className="text-xs text-blue-600 font-medium">Click to view details →</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4">
              <div className="flex justify-between items-center pb-4">
                <h2 className="text-[#101418] text-xl font-bold leading-tight tracking-[-0.015em]">Quick Actions</h2>
                <button 
                  onClick={() => handleAddClick('quick action')}
                  className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="material-icons text-blue-600" style={{fontSize: '24px'}}>analytics</span>
                    </div>
                    <div>
                      <p className="text-[#101418] text-sm font-bold">Department Analytics</p>
                      <p className="text-[#637588] text-xs">View performance metrics</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-50 hover:to-green-200 hover:border-green-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="material-icons text-green-600" style={{fontSize: '24px'}}>menu_book</span>
                    </div>
                    <div>
                      <p className="text-[#101418] text-sm font-bold">Curriculum Management</p>
                      <p className="text-[#637588] text-xs">Update syllabus & subjects</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="material-icons text-purple-600" style={{fontSize: '24px'}}>person</span>
                    </div>
                    <div>
                      <p className="text-[#101418] text-sm font-bold">Faculty Assignment</p>
                      <p className="text-[#637588] text-xs">Manage teacher allocation</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-200 hover:border-orange-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div>
                      <span className="material-icons text-orange-600" style={{fontSize: '24px'}}>assignment</span>
                    </div>
                    <div>
                      <p className="text-[#101418] text-sm font-bold">Reports & Documents</p>
                      <p className="text-[#637588] text-xs">Generate department reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <PermissionModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        actionType={modalActionType}
      />
    </div>
  );
};

export default Departments;