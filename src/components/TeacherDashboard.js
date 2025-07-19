import React, { useState } from 'react';
import Header from './Header';
import TeacherSidebar from './TeacherSidebar';

const TeacherDashboard = () => {
  const [currentTime] = useState(new Date());
  
  const todayClasses = [
    { time: '09:00 AM', subject: 'Mathematics', class: '12-A', room: 'Room 201', status: 'upcoming' },
    { time: '11:00 AM', subject: 'Algebra', class: '11-B', room: 'Room 203', status: 'upcoming' },
    { time: '02:00 PM', subject: 'Calculus', class: '12-C', room: 'Room 201', status: 'completed' },
    { time: '03:30 PM', subject: 'Statistics', class: '11-A', room: 'Room 205', status: 'upcoming' }
  ];

  const recentActivities = [
    { type: 'exam', title: 'Mid-term Mathematics Exam', class: '12-A', time: '2 hours ago', status: 'evaluated' },
    { type: 'assignment', title: 'Algebra Problem Set 5', class: '11-B', time: '4 hours ago', status: 'submitted' },
    { type: 'request', title: 'Grade Review Request', student: 'John Smith', time: '6 hours ago', status: 'pending' },
    { type: 'attendance', title: 'Morning Session Attendance', class: '12-A', time: '1 day ago', status: 'completed' }
  ];

  const quickStats = [
    { label: 'Total Students', value: '156', icon: 'groups', color: 'blue' },
    { label: 'Pending Evaluations', value: '8', icon: 'pending_actions', color: 'orange' },
    { label: 'Today\'s Classes', value: '4', icon: 'schedule', color: 'green' },
    { label: 'Avg. Attendance', value: '92%', icon: 'how_to_reg', color: 'purple' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'text-blue-600 bg-blue-50';
      case 'completed': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-orange-600 bg-orange-50';
      case 'evaluated': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatColor = (color) => {
    switch (color) {
      case 'blue': return 'text-blue-600 bg-blue-50';
      case 'orange': return 'text-orange-600 bg-orange-50';
      case 'green': return 'text-green-600 bg-green-50';
      case 'purple': return 'text-purple-600 bg-purple-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="flex h-screen">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6">
            {/* Welcome Section */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#101418] mb-2">Welcome back, Dr. Sarah Wilson</h1>
              <p className="text-[#5c728a]">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {quickStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-[#d4dbe2] hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#5c728a] text-sm font-medium">{stat.label}</p>
                      <p className="text-2xl font-bold text-[#101418] mt-1">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatColor(stat.color)}`}>
                      <span className="material-icons" style={{fontSize: '24px'}}>{stat.icon}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Today's Schedule */}
              <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-[#101418]">Today's Schedule</h2>
                  <span className="material-icons text-[#5c728a]">schedule</span>
                </div>
                <div className="space-y-3">
                  {todayClasses.map((classItem, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-[#101418]">{classItem.subject}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(classItem.status)}`}>
                            {classItem.status}
                          </span>
                        </div>
                        <p className="text-sm text-[#5c728a]">{classItem.class} • {classItem.room}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-[#101418]">{classItem.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities */}
              <div className="bg-white rounded-xl p-6 border border-[#d4dbe2]">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-[#101418]">Recent Activities</h2>
                  <span className="material-icons text-[#5c728a]">history</span>
                </div>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(activity.status)}`}>
                        <span className="material-icons" style={{fontSize: '16px'}}>
                          {activity.type === 'exam' ? 'quiz' : 
                           activity.type === 'assignment' ? 'assignment' :
                           activity.type === 'request' ? 'support_agent' : 'how_to_reg'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-[#101418] text-sm">{activity.title}</p>
                        <p className="text-xs text-[#5c728a]">
                          {activity.class || activity.student} • {activity.time}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-[#101418] mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="bg-white p-4 rounded-xl border border-[#d4dbe2] hover:shadow-md transition-all hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-100 transition-colors">
                      <span className="material-icons text-blue-600">how_to_reg</span>
                    </div>
                    <p className="text-sm font-medium text-[#101418]">Mark Attendance</p>
                  </div>
                </button>
                <button className="bg-white p-4 rounded-xl border border-[#d4dbe2] hover:shadow-md transition-all hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-green-100 transition-colors">
                      <span className="material-icons text-green-600">assignment</span>
                    </div>
                    <p className="text-sm font-medium text-[#101418]">Create Assessment</p>
                  </div>
                </button>
                <button className="bg-white p-4 rounded-xl border border-[#d4dbe2] hover:shadow-md transition-all hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-purple-100 transition-colors">
                      <span className="material-icons text-purple-600">quiz</span>
                    </div>
                    <p className="text-sm font-medium text-[#101418]">Review Exams</p>
                  </div>
                </button>
                <button className="bg-white p-4 rounded-xl border border-[#d4dbe2] hover:shadow-md transition-all hover:scale-105 group">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-orange-100 transition-colors">
                      <span className="material-icons text-orange-600">analytics</span>
                    </div>
                    <p className="text-sm font-medium text-[#101418]">View Analytics</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;